"use client";

import { useEffect, useRef } from "react";
import { useStorage } from "@/context/storageContext";

const Audio = (
    props: Omit<React.HTMLAttributes<HTMLAudioElement>, "style">
) => {
    const { storage, setStorage } = useStorage();
    const isPlaying = storage.options.playing;
    const playBackRate = storage.options.playBackRate;
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // Update playback rate when playBackRate changes
    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.playbackRate = playBackRate;
    }, [playBackRate]);

    const handleEnded = () => {
        console.log("Audio has ended");

        setStorage((prev) => ({
            ...prev,
            options: {
                ...prev.options,
                playing: false,
            },
        }));
    };

    return (
        <audio
            ref={audioRef}
            {...props}
            controls
            src="https://ia601507.us.archive.org/5/items/Tareq-Mohammad/001.mp3"
            style={{ display: "none" }}
            onEnded={handleEnded}
        />
    );
};

export default Audio;
