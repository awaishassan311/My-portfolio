import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import  images  from '../../contants/images';
import "./Skills.scss";

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     console.log(data);
  //     setSkills(data);
  //   });
  // }, []);

  const skills = [
    { name: "Ms Excel", bgColor: "#f8f8f8", pic: images.excel },
    { name: "Powerpoint", bgColor: "#f8f8f8", pic: images.powerpoint },
    { name: "Ms Office", bgColor: "#f8f8f8", pic: images.office },
    { name: "Phantom Busters", bgColor: "#f8f8f8", pic: images.phantom },
    { name: "Crm", bgColor: "#f8f8f8", pic: images.crm},
    { name: "Mailchimp", bgColor: "#f8f8f8", pic: images.mailchimp },
    { name: "ReactJS", bgColor: "#f8f8f8", pic: images.react },
    { name: "NodeJS", bgColor: "#f8f8f8", pic: images.node },
    { name: "Tailwind Css", bgColor: "#f8f8f8", pic: images.tailwind },
    { name: "JavaScript", bgColor: "#f8f8f8", pic: images.javascript },
    { name: "TypeScript", bgColor: "#f8f8f8", pic: images.typescript },
    { name: "Sass", bgColor: "#f8f8f8", pic: images.sass },
  ];
  const experiences = [
    {
      year: ["2018 - 2018"],
      month: "February-October",
      works: [
        {
          name: "Data Entry",
          company: "BISP",
          desc: ["Convert daily hard form collected data into soft using MS office.", 
           "Store and maintain updated data",
           "Updating the details of the customers.",
           "Verifying and sorting the data collected by staff from the people."]
        },
      ],
    },
    {
      year: "2022 - 2022",
      month: "June-November",
      works: [
        {
          name: "Lead Generation",
          company: "Genesis Engineering",
          desc:[
           "Fetching the lead from different platforms for software projects.",
           "Scheduling the calls of leads in pipeline to developers using Trello.",
           "Managing all leads, email correspondence and follow up the leads.",
           "Assigning the daily tasks of leads in pipeline and check the quality of leads.",
            "Creating content and proposal for the leads.",
            "Handle company social media accounts by updating daily posts.",
            "Attending initial calls and created daily calls agenda."
        ]
        },
      ],
    },
    {
      year: "2022 - Present",
      month: "December-Present",
      works: [
        {
          name: "Frontend Developer",
          company: "Genesis Engineering",
          desc: [
            "Resolving tests and technical challenges provided by foreign companies as part of the application process.",
           "Designing and developing user interfaces for new websites, ensuring both functionality and aesthetic appeal.",     
                "Managing and creating the company's own website from scratch, demonstrating skills in both development and design.",
          "Developing and maintaining several websites, with links to these sites showcasing your direct contributions.",
          "Currently engaged in a project-focused role, handling multiple responsibilities:",
          "Completing assigned tickets in a timely and efficient manner.",
          "Identifying and resolving bugs, contributing to the overall stability and performance of the project.",
          "Implementing new features, enhancing the user experience and functionality of the application.",
          "Addressing and correcting UI errors, ensuring a seamless and intuitive user interface."],
        },
      ],
    },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.pic} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
        {experiences.map((experience, index) => (
            <motion.div className="app__skills-exp-item" key={experience.year + index}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
                <p className="p-text">{experience.month}</p>
              </div>
    
              <motion.div className="app__skills-exp-works">
              {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      {Array.isArray(work.desc) ? (
                        <ul>
                        {work.desc.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="">{work.desc}</p>
                      )}
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
