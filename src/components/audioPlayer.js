import React, { useState, useEffect, useRef } from "react";

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.02); // Volume initial à 2 %
    const [isMuted, setIsMuted] = useState(false);
    const [showVolumeBar, setShowVolumeBar] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => setCurrentTime(audio.currentTime);
        const setAudioDuration = () => setDuration(audio.duration);

        audio.volume = isMuted ? 0 : volume;

        audio.addEventListener("timeupdate", updateProgress);
        audio.addEventListener("loadedmetadata", setAudioDuration);

        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
            audio.removeEventListener("loadedmetadata", setAudioDuration);
        };
    }, [volume, isMuted]);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        const newTime = (e.target.value / 100) * duration;
        audio.currentTime = newTime;
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value / 100);
        if (isMuted) setIsMuted(false); // Réactiver le son si la barre de volume est ajustée
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="audio-player">
            <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
            <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
            <div
                className="volume-control"
                onMouseEnter={() => setShowVolumeBar(true)}
                onMouseLeave={() => setShowVolumeBar(false)}
            >
                <button onClick={toggleMute} className="volume-icon">
                    {isMuted ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}
                </button>
                {showVolumeBar && (
                    <div className="volume-bar-container">
                        <input
                            type="range"
                            className="volume-bar"
                            min="0"
                            max="100"
                            value={volume * 100}
                            onChange={handleVolumeChange}
                            orient="vertical"
                        />
                    </div>
                )}
            </div>
            <input
                type="range"
                className="rangeInput"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
            />
            <div>
                <span>{formatTime(currentTime)}</span> {"  "} <span>{formatTime(duration)}</span>
            </div>
        </div>
    );
};

export default AudioPlayer;
