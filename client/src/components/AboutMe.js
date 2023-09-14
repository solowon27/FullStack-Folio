import React from "react";

function AboutMe() {
  return (
<section id="about-me" className="md:flex md:justify-center md:items-center">
  <div className="md:w-1/2 text-center">
    <h2 className="text-4xl text-lime-400 font-semibold mb-4 mt-10">About me</h2>
    <div className="text-justify m-5">
      <p className="lg:text-xl md:text:1xl">
        Hi, I'm Solomon Tegegne, a Full Stack Developer, originally from
        Ethiopia and currently based in the vibrant city of Salt Lake City,
        Utah. My passion for coding ignited my journey into the world of web
        development.
      </p>
      <p className="lg:text-xl md:text:1xl">
        I am a proud graduate of the prestigious University of Utah Coding
        Bootcamp, where I honed my skills in a wide range of technologies
        including HTML, CSS, JavaScript, Node.js, Express.js, React.js,
        MongoDB, MySQL, and more. I love turning ideas into elegant and
        efficient web solutions that provide value and enhance user
        experiences.
      </p>
      <p className="lg:text-xl md:text:1xl">
        When I'm not coding, you can find me exploring the great outdoors,
        indulging in culinary adventures, or diving into a good book. I'm
        always excited to take on new challenges and collaborate on
        innovative projects. Let's build something amazing together!
      </p>
    </div>
  </div>
</section>
  );
}
export default AboutMe;
