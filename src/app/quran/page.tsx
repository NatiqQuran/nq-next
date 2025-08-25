"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
    Container,
    Main,
    Row,
    Screen,
    Spacer,
    H2,
    P,
    Text,
    Loading,
} from "@yakad/ui";
import {
    Ayah,
    FindBar,
    FindPopup,
    MorePopup,
    PageDivider,
    SurahPeriodIcon,
} from "@/components";
import FooterWrapper from "./FooterWrapper";
import AppBarWrapper from "./AppBarWrapper";
import { getAyahs } from "@/actions/getAyahs";
import { AyahsListResponseData } from "@ntq/sdk";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const [isFindPopupVisible, setIsFindPopupVisible] =
        useState<boolean>(false);
    const [isMorePopupVisible, setIsMorePopupVisible] =
        useState<boolean>(false);

    const [currentSurah, setCurrentSurah] = useState(null);
    const [offset, setOffset] = useState(1);
    const [limit, setLimit] = useState(20);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);
    const [ayahs, setAyahs] = useState<AyahsListResponseData>([]);

    useEffect(() => {
        if (!loaderRef.current || !hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                console.log(entries);
                if (entries[0].isIntersecting) {
                    setOffset(offset);
                    setLimit((prev) => prev + 5);
                }
            },
            { threshold: 1 }
        );

        observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [hasMore]);

    const fetchItems = useCallback(async () => {
        getAyahs(offset, limit).then((res) => setAyahs(res));
        setHasMore(true);
    }, [limit]);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    return (
        <Screen>
            <AppBarWrapper />
            <Main>
                <Container size="md">
                    <FindBar
                        surahnumber={1}
                        ayahnumber={1}
                        pagenumber={1}
                        juz={1}
                        hizb={2}
                        onClick={() => setIsFindPopupVisible(true)}
                    />

                    {ayahs?.map((ayah, index) => (
                        <>
                            {ayah.number == 1 && (
                                <Container key={index} size="sm" align="center">
                                    <Row>
                                        <SurahPeriodIcon
                                            variant="filled"
                                            period="makki"
                                        />
                                        <H2
                                            title="Surah name"
                                            variant="heading6"
                                        >
                                            {ayah.surah.names[0].name}
                                        </H2>
                                        <Spacer />
                                        <Text variant="heading6">
                                            {ayah.surah.number_of_ayahs} Ayahs
                                        </Text>
                                    </Row>
                                    <P variant="body1">
                                        {ayah.bismillah &&
                                        ayah.bismillah.is_ayah
                                            ? ayah.text
                                            : ayah.bismillah?.text ||
                                              "bismillah"}
                                    </P>
                                </Container>
                            )}

                            {/* {ayah.number == 1 && <PageDivider pagenumber={page}/>} */}
                            <Ayah
                                key={index}
                                text={ayah.text}
                                number={ayah.number}
                                id={`ayah-${ayah.uuid}`}
                            />
                        </>
                    ))}

                    {hasMore && <Loading ref={loaderRef} variant="dots" />}
                    {!hasMore && <p>No more items</p>}
                </Container>
            </Main>
            <FooterWrapper />
            {isFindPopupVisible && (
                <FindPopup
                    heading="Find"
                    onclosebuttonclick={() => setIsFindPopupVisible(false)}
                    onButtonClicked={(a) => {
                        router.push(`#ayah-${ayahs[a].uuid}`);
                        setIsFindPopupVisible(false);
                    }}
                    ayahs_numbers={[1, 2, 3, 4, 5]}
                />
            )}
            {isMorePopupVisible && (
                <MorePopup
                    heading=""
                    onclosebuttonclick={() => setIsMorePopupVisible(false)}
                />
            )}
        </Screen>
    );
};

export default Page;
