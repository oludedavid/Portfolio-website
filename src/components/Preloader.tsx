import React, { useEffect, useState } from "react";

const PreLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloader = document.querySelector(".preloader") as HTMLElement;
    preloader.style.display = "flex";

    // Simulate a delay to showcase the preloader
    const delay = setTimeout(() => {
      preloader.style.display = "none";
      setIsLoading(false);
      clearTimeout(delay);
    }, 3000);
  }, []);

  return (
    <div className={`preloader ${isLoading ? "loading" : ""}`}>
      <div className="preloader__gif-container">
        <img
          src="./images/loader/chick.gif"
          className="preloader__loader-gif"
          alt="loader gif"
        />
      </div>
    </div>
  );
};

export default PreLoader;
