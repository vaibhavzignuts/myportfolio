import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Vaibhav | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">vaibhav parmar</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/vaibhav-parmar-6b8883229/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/vaibhavzignuts"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>React-native
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>
          <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Zignuts Technolab</span>
            <span className="px-2">|</span>Gandhinagar
          </p>
          <p className="py-1 italic">
            Front End Web Developer & Web Master (feb/2024 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        {/* <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Teaching & Mentoring Web Development
            </span>
            <span className="px-2">|</span>Dallas, TX
          </p>
          <p className="py-1 italic">
            Code Commerce - Youtube Channel (2021 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              In 2021 I started “Code Commerce”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div> */}

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">Projects</h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Book store</span>
          </p>

          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Incorporating the MERN (MongoDB, Express.js, React, Node.js)
              stack, I developed an online book store website that caters not
              only to customers but also to administrators with CRUD (Create,
              Read, Update, Delete) functionalities. This comprehensive platform
              facilitates seamless browsing and search experiences for users,
              coupled with secure authentication mechanisms ensuring user data
              integrity. Admins are empowered with full control through a
              dedicated admin panel, allowing them to effortlessly manage books,
              orders, and user accounts with ease. From adding new books to
              updating existing listings and processing orders, the admin
              functionalities ensure smooth operations and efficient management
              of the online book store.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">E-commerce app</span>
          </p>

          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Utilizing React Native, I engineered a dynamic e-commerce
              application tailored for mobile devices. This feature-rich app
              provides users with an intuitive platform for seamless shopping
              experiences on the go. Boasting a sleek mobile interface,
              customers can effortlessly explore a diverse catalog of products,
              add items to their carts, and securely complete transactions. The
              app is fortified with secure authentication mechanisms, ensuring
              user data protection and integrity throughout their shopping
              journey. Additionally, push notifications keep users informed
              about order updates and promotions, enhancing engagement and user
              satisfaction.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
