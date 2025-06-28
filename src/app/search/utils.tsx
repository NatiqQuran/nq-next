import React from "react";
import { SurahListResponseItem, SurahListResponseData } from "@ntq/sdk";
import {
    GridContainer,
    GridItem,
    Card,
    Row,
    Spacer,
    Stack,
    Hr,
} from "@yakad/ui";

// import RandomSurahButton from "../../components/randomSurahButton";
import GoToSurahButton from "../../components/goToSurahButton";
import SurahPeriodIcon from "../../components/surahPeriodIcon";
import Link from "next/link";

const RelatedSurahs = (props: { surahList: SurahListResponseData }) => (
    <Row style={{ marginTop: "2rem" }} overflow="scroll">
        {/* <RandomSurahButton surahList={props.surahList} /> */}
        <GoToSurahButton surahList={props.surahList} surahNumber={55} />
        <GoToSurahButton surahList={props.surahList} surahNumber={36} />
        <GoToSurahButton surahList={props.surahList} surahNumber={48} />
        <GoToSurahButton surahList={props.surahList} surahNumber={89} />
    </Row>
);

const SearchResult = (props: { surahList: SurahListResponseItem[] }) => (
    <div
        style={{
            width: "100%",
            minHeight: "calc(100vh - 16rem)",
            marginBottom: "2rem",
        }}
    >
        <h2 style={{ marginBottom: "0", fontSize: "3.4rem" }}>Surahs List</h2>
        <Hr marginx={2} />
        {props.surahList.length === 0 ? (
            <h2 style={{ margin: "5rem auto", textAlign: "center" }}>
                No Search Result
            </h2>
        ) : (
            <GridContainer>
                {props.surahList.map((surah) => (
                    <GridItem xl={4} md={6} xs={12} key={surah.uuid}>
                        <SurahLinkBox surah={surah} />
                    </GridItem>
                ))}
            </GridContainer>
        )}
    </div>
);

const SurahLinkBox = (props: { surah: SurahListResponseData[0] }) => (
    <Link href={`/quran/${props.surah.uuid}`} passHref>
        <Card>
            <Row>
                <span
                    style={{
                        fontFamily: "sans-serif",
                        fontSize: "2rem",
                        fontWeight: "bold",
                    }}
                >
                    {props.surah.number}
                </span>
                <Spacer />
                <Stack style={{ gap: "0" }}>
                    <Row>
                        <span
                            style={{
                                fontFamily: "hafs",
                                fontSize: "2.5rem",
                                fontWeight: "bold",
                            }}
                        >
                            {props.surah.names[0].arabic}
                        </span>
                        {/* <SurahPeriodIcon period={props.surah.period} /> */}
                        <h5>{props.surah.period}</h5>
                    </Row>
                </Stack>
            </Row>
        </Card>
    </Link>
);

export { RelatedSurahs, SearchResult };
