import { useRef, useState, useCallback } from "react";

export function useMusic(src) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const init = useCallback(() => {
    if (!src) return;
    if (!audioRef.current) {
      const audio = new Audio(src);
      audio.loop = true;
      audio.volume = 0.4;
      audioRef.current = audio;
    }
    audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
  }, [src]);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playing]);

  return { playing, init, toggle };
}
