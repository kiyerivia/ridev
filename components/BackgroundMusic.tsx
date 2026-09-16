"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, VolumeX, Volume1, Play, Pause, Music, X, ChevronDown, Sparkles } from "lucide-react";

declare global {
  interface Window {
    SC: any;
  }
}

export default function BackgroundMusic() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50); // Default 50%
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const widgetRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // SoundCloud Direct Track API URL for instant loading & autoplay
  const SOUNDCLOUD_TRACK_API = "https://api.soundcloud.com/tracks/2401661328";
  const SOUNDCLOUD_EMBED_URL = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    SOUNDCLOUD_TRACK_API
  )}&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&buying=false&sharing=false&download=false&show_artwork=false&show_playcount=false`;

  // Safe playback trigger
  const startPlayback = useCallback(() => {
    if (widgetRef.current) {
      try {
        const targetVol = isMuted ? 0 : (volume || 50);
        widgetRef.current.setVolume(targetVol);
        widgetRef.current.play();
      } catch (err) {
        console.log("Audio playback error:", err);
      }
    }
  }, [volume, isMuted]);

  // Initialize SoundCloud Widget
  const initSCWidget = useCallback(() => {
    if (window.SC && window.SC.Widget && iframeRef.current) {
      try {
        const widget = window.SC.Widget(iframeRef.current);
        widgetRef.current = widget;

        widget.bind(window.SC.Widget.Events.READY, () => {
          const targetVol = isMuted ? 0 : (volume || 50);
          widget.setVolume(targetVol);
          widget.play();
        });

        widget.bind(window.SC.Widget.Events.PLAY, () => {
          setIsPlaying(true);
        });

        widget.bind(window.SC.Widget.Events.PLAY_PROGRESS, () => {
          setIsPlaying(true);
        });

        widget.bind(window.SC.Widget.Events.PAUSE, () => {
          setIsPlaying(false);
        });

        widget.bind(window.SC.Widget.Events.FINISH, () => {
          widget.seekTo(0);
          widget.play();
        });
      } catch (e) {
        console.log("SoundCloud Widget initialization error:", e);
      }
    }
  }, [volume, isMuted]);

  // Load SoundCloud Widget API Script
  useEffect(() => {
    if (!window.SC || !window.SC.Widget) {
      const tag = document.createElement("script");
      tag.src = "https://w.soundcloud.com/player/api.js";
      tag.async = true;
      tag.onload = () => {
        initSCWidget();
      };
      document.head.appendChild(tag);
    } else {
      initSCWidget();
    }
  }, [initSCWidget]);

  // Multi-tier Autoplay Engine:
  // 1. Tries automatic play upon load
  // 2. Unlocks instantly on any user gesture (tap/click/scroll/touch) anywhere on page to bypass browser autoplay restrictions
  useEffect(() => {
    let triggered = false;
    const triggerAudio = () => {
      if (triggered) return;
      triggered = true;
      startPlayback();
      document.removeEventListener("pointerdown", triggerAudio, true);
      document.removeEventListener("click", triggerAudio, true);
      document.removeEventListener("touchstart", triggerAudio, true);
      document.removeEventListener("scroll", triggerAudio, true);
      document.removeEventListener("keydown", triggerAudio, true);
    };

    // Global capture listener to catch first interaction
    document.addEventListener("pointerdown", triggerAudio, { capture: true, passive: true });
    document.addEventListener("click", triggerAudio, { capture: true, passive: true });
    document.addEventListener("touchstart", triggerAudio, { capture: true, passive: true });
    document.addEventListener("scroll", triggerAudio, { capture: true, passive: true });
    document.addEventListener("keydown", triggerAudio, { capture: true, passive: true });

    // Aggressive retries for environments where autoplay is pre-permitted
    const t1 = setTimeout(() => startPlayback(), 300);
    const t2 = setTimeout(() => startPlayback(), 800);
    const t3 = setTimeout(() => startPlayback(), 1600);
    const t4 = setTimeout(() => startPlayback(), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.removeEventListener("pointerdown", triggerAudio, true);
      document.removeEventListener("click", triggerAudio, true);
      document.removeEventListener("touchstart", triggerAudio, true);
      document.removeEventListener("scroll", triggerAudio, true);
      document.removeEventListener("keydown", triggerAudio, true);
    };
  }, [startPlayback]);

  // Toggle Play / Pause
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!widgetRef.current) return;

    try {
      if (isPlaying) {
        widgetRef.current.pause();
        setIsPlaying(false);
      } else {
        widgetRef.current.setVolume(isMuted ? 0 : (volume || 50));
        widgetRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      setIsPlaying(!isPlaying);
    }
  };

  // Handle Volume Change (0 to 100)
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseInt(e.target.value, 10);
    setVolume(newVol);
    if (widgetRef.current && typeof widgetRef.current.setVolume === "function") {
      widgetRef.current.setVolume(newVol);
      if (newVol === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  // Toggle Mute
  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!widgetRef.current) return;

    if (isMuted) {
      const restoreVol = volume > 0 ? volume : 50;
      widgetRef.current.setVolume(restoreVol);
      if (volume === 0) setVolume(50);
      setIsMuted(false);
    } else {
      widgetRef.current.setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* SoundCloud Iframe Embed with Full Autoplay & Audio Media Permissions */}
      <div 
        className="fixed -bottom-96 -left-96 w-80 h-40 opacity-0 pointer-events-none -z-50 overflow-hidden" 
        aria-hidden="true"
      >
        <iframe
          id="sc-bgm-player"
          ref={iframeRef}
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay; encrypted-media; fullscreen"
          src={SOUNDCLOUD_EMBED_URL}
          onLoad={initSCWidget}
          title="SoundCloud Background Music"
          tabIndex={-1}
        />
      </div>

      {/* Floating BGM Widget Container */}
      <div className="fixed left-4 sm:left-6 bottom-5 sm:bottom-6 z-50 select-none">
        {/* 🌟 Compact Floating Equalizer Trigger (Only Equalizer Icon, opens details on click) */}
        {!isOpen ? (
          <button
            onClick={() => {
              setIsOpen(true);
              if (!isPlaying) {
                startPlayback();
              }
            }}
            className="group relative w-12 h-12 rounded-2xl bg-white/95 dark:bg-[#120822]/95 backdrop-blur-xl border-2 border-pink-500/50 dark:border-pink-500/60 text-slate-800 dark:text-white shadow-[0_4px_25px_rgba(255,0,127,0.35)] hover:shadow-[0_0_30px_rgba(255,0,127,0.6)] hover:border-pink-400 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Buka Pengatur Musik"
            title="Buka Pengatur Musik BGM"
          >
            {/* Holographic glowing pulse when playing */}
            {isPlaying && (
              <span className="animate-ping absolute inset-0 rounded-2xl bg-pink-500/25 pointer-events-none" />
            )}

            {/* Lively Animated Equalizer Sound Waves */}
            <div className="flex items-end justify-center gap-1 h-5 w-5">
              {isPlaying ? (
                <>
                  <span className="w-1 bg-gradient-to-t from-pink-600 to-rose-400 rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" style={{ animationDelay: "0ms", height: "100%" }} />
                  <span className="w-1 bg-gradient-to-t from-pink-600 to-rose-400 rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" style={{ animationDelay: "200ms", height: "55%" }} />
                  <span className="w-1 bg-gradient-to-t from-pink-600 to-rose-400 rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" style={{ animationDelay: "400ms", height: "85%" }} />
                  <span className="w-1 bg-gradient-to-t from-pink-600 to-rose-400 rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" style={{ animationDelay: "150ms", height: "40%" }} />
                </>
              ) : (
                <>
                  <span className="w-1 bg-slate-400 dark:bg-slate-600 rounded-full h-2" />
                  <span className="w-1 bg-slate-400 dark:bg-slate-600 rounded-full h-3" />
                  <span className="w-1 bg-slate-400 dark:bg-slate-600 rounded-full h-2" />
                  <span className="w-1 bg-slate-400 dark:bg-slate-600 rounded-full h-1" />
                </>
              )}
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
                    SoundCloud BGM • kiyerivia
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                    Relaxing Genshin Impact Music
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
