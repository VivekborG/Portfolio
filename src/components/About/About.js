import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Vivek Borgohain</strong>. Currently pursuing a Bachelor of Technology in Electronics and Instrumentation Engineering at the National Institute of Technology, Silchar, with an expected graduation in May 2025. My academic journey is complemented by a robust technical skill set in programming languages and frameworks, with a notable focus on front-end technologies including HTML, CSS, JavaScript, ReactJS, and NodeJS..
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            During my internship at the Satyendra Nath Bose Summer Internship (NIT Silchar) in June 2024, I developed a phishing website detection system using machine learning. This project not only enhanced my skills in machine learning but also allowed me to create a user-friendly front-end using HTML and CSS, demonstrating my capability to integrate complex backend logic with intuitive front-end designs.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I have engaged in several projects that further solidify my front-end development skills. Notably, I built a real-time cryptocurrency price tracker and an e-commerce website for school uniforms using the MERN stack. These projects refined my abilities in front-end frameworks and backend integration, showcasing my competence in delivering comprehensive web applications.
              In addition to my technical skills, I bring leadership, event management, and public speaking abilities from various roles and extracurricular activities during my time at NIT Silchar.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
