"use client";

import React, { useState, useEffect } from "react";
import { SurahListResponseData } from "@ntq/sdk";
import { filterArrayBySearch } from "@yakad/lib";
import {
    AppBar,
    InputField,
    Container,
    Main,
    Screen,
    Loading,
} from "@yakad/ui";

import { RelatedSurahs, SearchResult } from "./utils";
import { controllerSurah } from "../../connection";
import GoBackButton from "@/components/goBackButton";

const SearchPage: React.FC = () => {
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
        <Screen>
            <AppBar style={{ flexWrap: "nowrap" }}>
                <InputField
                    boxsize="small"
                    placeholder="Search Surah by Name or Number"
                    onChange={(e) => {
                        filterBySearchInputOnChange(e.target.value);
                    }}
                />
                <GoBackButton />
            </AppBar>
            <Main>
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
            </Main>
        </Screen>
    );
};

export default SearchPage;
