"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, VolumeX, Volume1, Play, Pause, Music, X, ChevronDown, Sparkles } from "lucide-react";

export default function BackgroundMusic() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(40); // Default 40%
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Supabase Storage CDN Direct MP3 URL
  const SUPABASE_AUDIO_URL =
    "https://kjivhrztkiggctvxqoud.supabase.co/storage/v1/object/public/pubs/1%20Hour%20of%20Relaxing%20Genshin%20Impact%20Music%20and%20Ambiance%20cmprs.mp3";

  // Play audio safely and return success boolean
  const startAudioPlayback = useCallback(async (): Promise<boolean> => {
    const audio = audioRef.current;
    if (!audio) return false;

    try {
      audio.muted = isMuted;
      audio.volume = isMuted ? 0 : volume / 100;
      await audio.play();
      setIsPlaying(true);
      return true;
    } catch (err) {
      console.log("Browser autoplay restriction waiting for user gesture...");
      setIsPlaying(false);
      return false;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;
    audio.loop = true;

    // 1. Immediate playback attempt upon mount
    startAudioPlayback();

    // 2. Persistent global user gesture listener:
    // Captures first click / tap / keydown ANYWHERE across the entire window
    // and ONLY detaches when playback has actually succeeded!
    const handleGlobalInteraction = async () => {
      const success = await startAudioPlayback();
      if (success) {
        detachListeners();
      }
    };

    const attachListeners = () => {
      document.addEventListener("click", handleGlobalInteraction, { capture: true, passive: true });
      document.addEventListener("pointerdown", handleGlobalInteraction, { capture: true, passive: true });
      document.addEventListener("pointerup", handleGlobalInteraction, { capture: true, passive: true });
      document.addEventListener("touchstart", handleGlobalInteraction, { capture: true, passive: true });
      document.addEventListener("touchend", handleGlobalInteraction, { capture: true, passive: true });
      document.addEventListener("keydown", handleGlobalInteraction, { capture: true, passive: true });
    };

    const detachListeners = () => {
      document.removeEventListener("click", handleGlobalInteraction, true);
      document.removeEventListener("pointerdown", handleGlobalInteraction, true);
      document.removeEventListener("pointerup", handleGlobalInteraction, true);
      document.removeEventListener("touchstart", handleGlobalInteraction, true);
      document.removeEventListener("touchend", handleGlobalInteraction, true);
      document.removeEventListener("keydown", handleGlobalInteraction, true);
    };

    attachListeners();

    return () => {
      detachListeners();
    };
  }, [startAudioPlayback, volume]);

  // Toggle Play / Pause
  const togglePlay = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await startAudioPlayback();
    }
  };

  // Handle Volume Change (0 to 100)
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseInt(e.target.value, 10);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol / 100;
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
    if (!audioRef.current) return;

    if (isMuted) {
      const restoreVol = volume > 0 ? volume : 40;
      audioRef.current.volume = restoreVol / 100;
      if (volume === 0) setVolume(40);
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* Native HTML5 Audio Element streaming directly from Supabase Storage */}
      <audio
        ref={audioRef}
        src={SUPABASE_AUDIO_URL}
        preload="auto"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating BGM Widget Container */}
      <div className="fixed left-4 sm:left-6 bottom-5 sm:bottom-6 z-50 select-none">
        {/* 🌟 Compact Floating Equalizer Trigger (Only Equalizer Icon, opens details on click) */}
        {!isOpen ? (
          <button
            onClick={() => {
              setIsOpen(true);
              if (!isPlaying) {
                startAudioPlayback();
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
                  <span className="text-[10px] font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    Supabase Audio • RIDEV BGM
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
