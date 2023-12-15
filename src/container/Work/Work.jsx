import React, { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/pro-solid-svg-icons';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import  images  from '../../contants/images';

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const works = [
 
 
    {
      imgUrl: images.school,
      name: 'School Facility Pro',
      projectLink: 'https://oval-project-management-system-d27b.vercel.app/',
      title: 'School Districts Master Planning',
      description:
        'School facility pro is a master planning web app for managing, locating, and reporting system of school districts, we proudly complete this project and now over 180+ school districts in California use this platform for managing the data of their schools.',
      tags: 'Production',
      tech: [images.react, images.node, images.sass, images.googlemap],
    },
    {
      imgUrl: images.portfolio,
      name: 'My Personal Portfolio',
      projectLink: '',
      title: 'Personal Portfolio',
      description:
        'This is a fully responsive modern look portfolio that showcase and exampalify a developer works, skills and experiences, I tried to use latest JS technologies to accomplish this amazing project.',
      tags: 'Personal',
      tech: [
        images.react,
        images.next,
        images.graphql,
        images.node,
        images.sass,
        images.sanity,
      ],
    },
    {
        imgUrl: images.website,
        name: 'Web Studio',
        projectLink: 'https://web-studio-software-company.vercel.app/',
        title: 'Web Studio',
        description:
          'Web Studio is basically developed for software developing company. This is a fully responsive modern look website that showcase and exampalify a developer works, skills and experiences, I tried to use latest JS technologies to accomplish this amazing project.',
        tags: 'Personal',
        tech: [
          images.react,
          images.next,
          images.node,
          images.sass,
          images.rapidapi,
        ],
      },
    {
      imgUrl: images.burger,
      name: 'Burger Lab',
      projectLink: 'https://burger-lab.vercel.app/',
      title: 'Burger Lab',
      description:
        'Burger Lab is an innovative, fully responsive website crafted with React.js and Tailwind CSS, offering a unique, interactive experience where users can visually create their custom burgers.This website combines sleek, modern aesthetics with user-friendly functionality, making burger customization both fun and easy.',
      tags: 'Production',
      tech: [
        images.react,
        images.next,
        images.graphql,
        images.node,
        images.sass,
        images.graphcms,
      ],
    },
    
    {
      imgUrl: images.halal,
      name: 'Halal Food',
      
      title: 'Halal Foods',
      description:
        'Halal food website, built with HTML, CSS, JavaScript, and Bootstrap, caters to Halal food lovers, offering an accessible platform for discovering diverse and delicious dining options.',
      tags: 'Personal',
      tech: [
        images.react,
        images.next,
        images.node,
        images.sass,
        images.rapidapi,
      ],
    },
  
  ];
  return (
    <>
      <h2 className='head-text'>
        Delightful <span>apps</span> crafted with{' '}
        <span>
          {' '}
          <FontAwesomeIcon
          
            color='#E41B17'
            style={{ fontSize: '40px' }}
          />
        </span>
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {works.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work?.imgUrl} alt={work?.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className='app__work-hover app__flex'
              >
                <a href={work?.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work?.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work?.description}
              </p>
              <div className='app__work-tag app__flex' key={index}>
                <p className='p-text'>{work.tags}</p>
              </div>
              <div className='work-icon-badges'>
                {work.tech.map((t, index) => {
                  return (
                    <div className='work-icon-badge' key={index}>
                      <img
                        src={t}
                        alt=''
                        width='25px'
                        height='25px'
                        style={{ borderRadius: '50%' }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
