"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Volume1, Play, Pause, Music, X, ChevronDown, Sparkles } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function BackgroundMusic() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50); // Default 50%
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const YOUTUBE_VIDEO_ID = "T2hVthpcWK8"; // Lagu Backsound Genshin Yang Nyaman

  // Initialize YouTube Player API
  useEffect(() => {
    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player("youtube-bgm-player", {
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            playsinline: 1,
          },
          events: {
            onReady: (event: any) => {
              event.target.setVolume(50); // 50% volume by default
              try {
                event.target.playVideo();
                setIsPlaying(true);
              } catch (err) {
                console.log("Autoplay waiting for user interaction");
              }
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setIsPlaying(false);
              } else if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            },
          },
        });
      }
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore cleanup error
        }
      }
    };
  }, []);

  // Handle browser autoplay policy by starting on first user gesture if blocked
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && playerRef.current && typeof playerRef.current.playVideo === "function") {
        setHasInteracted(true);
        try {
          playerRef.current.setVolume(volume);
          playerRef.current.playVideo();
          setIsPlaying(true);
        } catch (e) {
          // ignore
        }
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [hasInteracted, volume]);

  // Toggle Play / Pause
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!playerRef.current || typeof playerRef.current.playVideo !== "function") return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  // Handle Volume Change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseInt(e.target.value, 10);
    setVolume(newVol);
    if (playerRef.current && typeof playerRef.current.setVolume === "function") {
      playerRef.current.setVolume(newVol);
      if (newVol === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      }
    }
  };

  // Toggle Mute
  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!playerRef.current || typeof playerRef.current.mute !== "function") return;

    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(volume > 0 ? volume : 50);
      if (volume === 0) setVolume(50);
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* Hidden YouTube Iframe Container */}
      <div className="fixed -top-96 -left-96 w-1 h-1 opacity-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div id="youtube-bgm-player" />
      </div>

      {/* Floating BGM Widget Container */}
      <div 
        ref={containerRef}
        className="fixed left-4 sm:left-6 bottom-5 sm:bottom-6 z-50 select-none"
      >
        {/* 🌟 Compact Collapsed Floating Trigger */}
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 py-2.5 px-3.5 sm:px-4 rounded-2xl bg-white/90 dark:bg-[#120822]/90 backdrop-blur-xl border border-pink-400/50 dark:border-pink-500/40 text-slate-800 dark:text-white shadow-[0_4px_25px_rgba(255,0,127,0.3)] hover:border-pink-500 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Buka Pengatur Volume BGM"
            title="Buka Pengatur Volume Musik (Genshin Relaxing BGM)"
          >
            {/* Holographic glowing border pulse when playing */}
            {isPlaying && (
              <span className="animate-ping absolute inset-0 rounded-2xl bg-pink-500/20 pointer-events-none" />
            )}

            {/* Music Equalizer Waves Icon */}
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-pink-400/40 flex items-center justify-center text-pink-600 dark:text-pink-400 shadow-sm shrink-0">
              {isPlaying ? (
                <div className="flex items-end gap-0.5 h-3.5">
                  <span className="w-0.5 bg-pink-500 rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" style={{ animationDelay: "0ms", height: "100%" }} />
                  <span className="w-0.5 bg-pink-500 rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" style={{ animationDelay: "200ms", height: "60%" }} />
                  <span className="w-0.5 bg-pink-500 rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" style={{ animationDelay: "400ms", height: "90%" }} />
                  <span className="w-0.5 bg-pink-500 rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" style={{ animationDelay: "150ms", height: "40%" }} />
                </div>
              ) : (
                <Music className="w-4 h-4" />
              )}
            </div>

            {/* Label & Volume Indicator */}
            <div className="flex flex-col text-left pr-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-600 dark:text-pink-400 flex items-center gap-1 leading-none mb-0.5">
                <Sparkles className="w-2.5 h-2.5" />
                <span>BGM</span>
              </span>
              <span className="font-heading font-black text-xs text-slate-800 dark:text-slate-100 flex items-center gap-1">
                {isMuted || volume === 0 ? "Mute" : `${volume}%`}
              </span>
            </div>

            {/* Quick Play/Pause on icon click */}
            <div 
              onClick={togglePlay}
              className="w-6 h-6 rounded-lg bg-pink-100 dark:bg-pink-950/80 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 text-pink-600 dark:text-pink-300 flex items-center justify-center transition-colors ml-0.5"
              title={isPlaying ? "Jeda Musik" : "Putar Musik"}
            >
              {isPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
            </div>
          </button>
        ) : (
          /* 🌟 Expanded Fly-Effect Floating Dock */
          <div className="w-72 sm:w-80 rounded-2xl bg-white/95 dark:bg-[#120822]/95 backdrop-blur-2xl border-2 border-pink-500/50 shadow-[0_10px_35px_rgba(255,0,127,0.35)] p-4 space-y-3.5 animate-in slide-in-from-bottom-5 zoom-in-95 duration-300 holo-corners">
            
            {/* Header: Track Info & Close Fly Button */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2.5">
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="w-7 h-7 rounded-lg bg-pink-100 dark:bg-pink-950/70 border border-pink-400/40 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
                  <Music className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-[10px] font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                    Backsound Studio
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                    Genshin Relaxing BGM
                  </span>
                </div>
              </div>

              {/* Close / Fly Back Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Tutup Panel BGM"
                aria-label="Tutup Panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Controls: Play/Pause & Slider */}
            <div className="flex items-center gap-3">
              {/* Play / Pause Toggle Button */}
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:brightness-110 text-white shadow-md shadow-pink-500/30 flex items-center justify-center active:scale-95 transition-all shrink-0 cursor-pointer"
                title={isPlaying ? "Jeda" : "Putar"}
                aria-label={isPlaying ? "Jeda" : "Putar"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>

              {/* Mute Toggle Button */}
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-pink-100 dark:hover:bg-pink-950/60 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                title={isMuted ? "Aktifkan Suara" : "Bisukan"}
                aria-label={isMuted ? "Aktifkan Suara" : "Bisukan"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-red-500" />
                ) : volume < 50 ? (
                  <Volume1 className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              {/* Volume Slider & Percentage */}
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:accent-pink-400 transition-all"
                  aria-label="Pengatur Volume"
                />
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 min-w-[32px] text-right font-mono">
                  {isMuted ? "0%" : `${volume}%`}
                </span>
              </div>
            </div>

            {/* Footer Status Hint */}
            <div className="flex items-center justify-between pt-1 text-[10px] text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60">
              <span className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
                {isPlaying ? "Sedang Memutar" : "Dijeda"}
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-pink-600 dark:text-pink-400 hover:underline font-semibold flex items-center gap-0.5 cursor-pointer"
              >
                <span>Tutup</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>

          </div>
        )}
      </div>
    </>
  );
}
