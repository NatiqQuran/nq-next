"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Container, Main, Row, Screen, Spacer, H2, P, Text, Loading } from "@yakad/ui";
import {
    Ayah,
    FindBar,
    FindPopup,
    MorePopup,
    PageDivider,
    SurahPeriodIcon,
} from "@/components";
import FooterWrapper from "./footerWrappers";
import AppBarWrapper from "./appBarWrapper";
import { getAyahs } from "@/actions/getAyahs";
import { AyahsListResponseData } from "@ntq/sdk";

const Page = () => {
    const [isFindPopupVisible, setIsFindPopupVisible] =
        useState<boolean>(false);
    const [isMorePopupVisible, setIsMorePopupVisible] =
        useState<boolean>(false);

    const [page, setPage] = useState(0);
    const [offset, setOffset] = useState(1);
    const [limit, setLimit] = useState(20);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);
    const [ayahs, setAyahs] = useState<AyahsListResponseData>([]);

    useEffect(() => {
        if (!loaderRef.current || !hasMore) return;

        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setOffset(offset)
              setLimit((prev) => prev + 5);
            }
          },
          { threshold: 1 }
        );

        observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [hasMore]);


    const fetchItems = useCallback(async () => {
        console.log(offset, limit)
        getAyahs(offset, limit).then(res => setAyahs(res));
        if (ayahs[ayahs.length - 1].number == 1){
            setPage(prev => prev + 1)
        }
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
                    <Container size="sm" align="center">
                        <Row>
                            <SurahPeriodIcon variant="filled" period="makki" />
                            <H2 title="Surah name" variant="heading6">
                                1. Al-Fatihah
                            </H2>
                            <Spacer />
                            <Text variant="heading6">5 Ayahs</Text>
                        </Row>
                        <P variant="body1">بسم الله الرحن الرحیم</P>
                    </Container>

                    {ayahs?.map((ayah,index) => (
                            <>
                                {/* {ayah.number == 1 && <PageDivider pagenumber={page}/>} */}
                                <Ayah key={index} text={ayah.text} number={ayah.number} />
                            </>
                        ))
                    }

                    {hasMore && <Loading ref={loaderRef} variant="dots" />}
                    {!hasMore && <p>No more items</p>}
                </Container>
            </Main>
            <FooterWrapper />
            {isFindPopupVisible && (
                <FindPopup
                    heading="Find"
                    onclosebuttonclick={() => setIsFindPopupVisible(false)}
                />
            )}
            {isMorePopupVisible && (
                <MorePopup
                    heading="Al-Fatihah"
                    onclosebuttonclick={() => setIsMorePopupVisible(false)}
                />
            )}
        </Screen>
    );
};

export default Page;
