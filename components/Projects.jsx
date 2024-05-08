import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="MENDELSON UI"
            backgroundImg={
              "/assets/projects/Screenshot 2024-05-06 at 6.32.30 PM.png"
            }
            projectUrl="https://github.com/vaibhavzignuts/Mendleson-communication-ui"
            tech="React JS"
          />
          <ProjectItem
            title="Book store"
            backgroundImg={
              "/assets/projects/Screenshot 2024-05-07 at 5.17.01 PM.png"
            }
            projectUrl="https://github.com/vaibhavzignuts/library-managment-system"
            tech="React JS"
          />
          <ProjectItem
            title="E-commerce app"
            backgroundImg={"/assets/projects/Screenshot_1715082714.png"}
            projectUrl="https://github.com/vaibhavzignuts/assignment5-Ecommerce-app-react-native"
            tech="React Native"
          />
          <ProjectItem
            title="Foodie"
            backgroundImg={"/assets/projects/Screenshot_1715083521.png"}
            // projectUrl="/twitch"
            tech="React Native"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
