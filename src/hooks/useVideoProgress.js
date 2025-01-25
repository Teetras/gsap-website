import { useEffect } from "react";
import gsap from "gsap";

const useVideoProgress = (
  videoId,
  isPlaying,
  videoRef,
  videoSpanRef,
  videoDivRef,
  hightlightsSlides,
) => {
  useEffect(() => {
    let currentProgress = 0;
    const span = videoSpanRef.current;

    if (span[videoId]) {
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          updateProgressBar(progress, videoDivRef, videoId);
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], { width: "12px" });
            gsap.to(span[videoId], { backgroundColor: "#afafaf" });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        const progress =
          videoRef.current[videoId].currentTime /
          hightlightsSlides[videoId].videoDuration;
        anim.progress(progress);
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }

    return () => {
      gsap.ticker.remove(animUpdate); // Clean up ticker on unmount
    };
  }, [
    videoId,
    isPlaying,
    videoRef,
    videoSpanRef,
    videoDivRef,
    hightlightsSlides,
  ]);

  const updateProgressBar = (currentProgress, videoDivRef, videoId) => {
    gsap.to(videoDivRef.current[videoId], {
      width:
        window.innerWidth < 760
          ? "10vw"
          : window.innerWidth < 1200
            ? "10vw"
            : "4vw",
    });

    gsap.to(videoSpanRef.current[videoId], {
      width: `${currentProgress}%`,
      backgroundColor: "white",
    });
  };
};

export default useVideoProgress;
