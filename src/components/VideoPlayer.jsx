import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoPlayer({ src, title, aspect = "video" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Video play interrupted:", err));
        // Se o usuário clicou para dar play, removemos o mute para ele ouvir o som
        setIsMuted(false);
        videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation(); // Evita dar play/pause ao clicar no botão de som
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl border border-white/5 bg-zinc-900/50 cursor-pointer ${
        aspect === "vertical" ? "aspect-[9/16] max-h-[500px] w-auto mx-auto" : "aspect-video w-full"
      }`}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        loop
        playsInline
        autoPlay
        muted={isMuted}
      />
      
      {/* Dark Overlay on Hover when playing, or fixed when paused */}
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${
        isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
      }`}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-dark-bg transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-brand/20">
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
        </div>
      </div>

      {/* Video Title Indicator */}
      <div className="absolute top-4 left-4 rounded-md bg-black/60 px-3 py-1 text-xs font-mono text-white/90 backdrop-blur-md border border-white/10">
        {title}
      </div>

      {/* Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-md border border-white/10 transition-colors"
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* Subtle bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full bg-brand transition-all duration-100" 
          style={{ 
            width: videoRef.current ? `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%` : '0%' 
          }}
        />
      </div>
    </div>
  );
}
