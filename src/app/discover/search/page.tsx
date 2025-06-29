"use client";

import React, { useState, useEffect } from "react";
import { SurahListResponseData } from "@ntq/sdk";
import { filterArrayBySearch } from "@yakad/lib";
import {
    InputField,
    Container,
    Loading,
    Row,
    Spacer,
    Button,
    AppBar,
} from "@yakad/ui";

import { RelatedSurahs, SearchResult } from "./utils";
import { controllerSurah } from "../../../connection";
import Symbol from "@yakad/symbols";

const Page: React.FC = () => {
    const [surahList, setSurahList] = useState<SurahListResponseData | null>(
        null
    );
    const [filteredSurahList, setFilteredSurahList] =
        useState<SurahListResponseData>([]);

    useEffect(() => {
        controllerSurah
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
            <AppBar>
                <Container size="md">
                    <Row>
                        <h1>Search</h1>
                        <Spacer />
                        <Button icon={<Symbol icon="mic" />} />
                        <Button icon={<Symbol icon="camera" />} />
                    </Row>
                </Container>
            </AppBar>
            <Container size="md">
                <InputField
                    boxsize="small"
                    placeholder="Search Surah by Name or Number"
                    onChange={(e) => {
                        filterBySearchInputOnChange(e.target.value);
                    }}
                />
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
