import React from 'react';

const Hero = () => (
  <section className="flex justify-center items-center min-h-[400px] py-12 px-[100px]">
    <div className="w-full bg-white rounded-2xl shadow-2xl flex overflow-hidden">
      {/* Left: Image */}
      <div className="flex items-center justify-center bg-gray-100 flex-shrink-0 w-60 h-60 self-center hero-image">
        <img
          src="/images/my-profile.png"
          alt="Profile"
          className="h-full w-auto object-contain rounded-xl shadow m-0 mx-auto my-auto block"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center p-8 px-[10px]">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Somayeh Khanbabaei</h1>
        <p className="text-base text-gray-700">
          Hi! I'm Somayeh, a front-end developer with a background in web design and a passion for building clean, user-friendly interfaces.
          I started my journey with HTML, CSS, and JavaScript, and eventually developed a strong interest in React.
          Currently, I'm focusing on React.js and have hands-on experience with tools like Git and Tailwind CSS. I'm passionate about writing clean, maintainable code, solving problems, and constantly learning new technologies.
          I'm eager to contribute to creative teams and grow through real-world projects and collaboration.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
