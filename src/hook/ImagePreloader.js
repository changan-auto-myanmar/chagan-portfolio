// useImagePreloader.js
import { useState, useEffect } from "react";

export const useImagePreloader = (imageUrls) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const promises = imageUrls.map(
      (url) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        })
    );

    Promise.all(promises)
      .then(() => setIsLoaded(true))
      .catch((error) => {
        console.error("Some images failed to load:", error);
        setIsLoaded(true); // Still show the page
      });
  }, [imageUrls]);

  return isLoaded;
};
