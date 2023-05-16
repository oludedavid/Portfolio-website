import React from "react";
import TypeWriter from "typewriter-effect";

const Home: React.FC = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="./images/landing.jpg"
        alt="landing image"
      />
      <div className="home__typewriter-overlay-heading-container">
        <h1 className="home__typewriter-overlay-heading">
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, I'm David Olude.")
                .pauseFor(200)
                .deleteAll()
                .typeString("I am a Frontend Developer!")
                .pauseFor(200)
                .deleteAll()
                .typeString("I build user Interfaces.")
                .deleteAll()
                .start();
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Home;
