"use client";

import React, { useState, useEffect } from "react";
import { ControllerSurahs, SurahsListResponseData } from "@ntq/sdk";
import { filterArrayBySearch } from "@yakad/lib";
import {
    InputField,
    Container,
    Loading,
    Row,
    Spacer,
    Button,
    H1,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

import { RelatedSurahs, SearchResult } from "./utils";
import { connection } from "../../../connection";

const Page = () => {
    const [surahList, setSurahList] = useState<SurahsListResponseData>([]);
    const [filteredSurahList, setFilteredSurahList] =
        useState<SurahsListResponseData>([]);

    useEffect(() => {
        const controllerSurahs = new ControllerSurahs(connection);

        controllerSurahs
            .list({
                params: { mushaf: "hafs" },
            })
            .then((response) => {
                setSurahList(response.data);
                setFilteredSurahList(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch surah list:", error);
            });
    }, []);

    const filterBySearchInputOnChange = (searchValue: string) => {
        setFilteredSurahList(
            filterArrayBySearch(surahList, searchValue, [
                "number",
                "names",
                "period",
                "arabic",
            ])
        );
    };

    return (
        <>
            <Container size="md">
                <Row>
                    <H1 variant="heading3">Search</H1>
                    <Spacer />
                    <Button icon={<Symbol icon="mic" />} />
                    <Button icon={<Symbol icon="camera" />} />
                </Row>
                <Row>
                    <InputField
                        boxsize="small"
                        placeholder="Search Surah by Name or Number"
                        onChange={(e) => {
                            filterBySearchInputOnChange(e.target.value);
                        }}
                    />
                    <Button
                        size="small"
                        variant="outlined"
                        icon={<Symbol icon="question_mark" />}
                    />
                </Row>
            </Container>
            {surahList ? (
                <Container size="md" style={{ marginTop: "2rem" }}>
                    <RelatedSurahs surahList={surahList} />
                    {/* {!isSearching && (
                            <RelatedSurahs surahList={surahList} />
                        )} */}
                    <SearchResult surahList={filteredSurahList} />
                </Container>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Page;
