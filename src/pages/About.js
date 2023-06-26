import React from "react";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"></div>
          <div className="flex-1 pt-36 pb-14  lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              In the heart of a bustling city, amidst the sea of hurried souls,
              there exists a photographer, a true artist with a lens. His name
              is Lucas, and he possesses a remarkable ability to capture moments
              that transcend the boundaries of time.
              <br />
              With his trusty camera slung over his shoulder, Lucas ventures
              into the world, seeking beauty in the most unexpected places.
              <br />
              From sun-kissed meadows to rain-soaked streets, he navigates the
              tapestry of life, forever chasing that elusive perfect shot.
            </p>
            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
