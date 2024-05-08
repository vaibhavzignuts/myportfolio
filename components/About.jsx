import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a passionate frontend developer specializing in React.js, React
            Native, and frontend development. During my internship, I gained
            hands-on experience in building modern web and mobile applications,
            focusing on creating responsive and user-friendly interfaces.
          </p>
          <p className="py-2 text-gray-600">
            As a frontend developer , I had the opportunity to work on various
            projects involving React.js and React Native. I contributed to the
            development of frontend components, implemented user interfaces, and
            collaborated with the team to optimize application performance.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={"/assets/about.jpg"} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
