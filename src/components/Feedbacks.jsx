import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

export const researchPapers = [
  {
    id: 1,
    title: 'IoT-Based Smart Irrigation System Using Hybrid Ensemble Models for Water Usage Prediction',
    authors: 'Click',
    conference: 'The 5th International Electronic Conference on Applied Sciences session Computing and Artificial Intelligence 2024',
    img: '/paper-icon.svg',
    url: 'https://sciforum.net/paper/view/20757',
    abstract: 'The study aims to optimize irrigation using IoT and machine learning to reduce water wastage and enhance crop yields. The Ensemble Linear Regression and Random Forest model achieved the highest accuracy of 96.34%, providing an efficient solution for water management.'
  }
];

const ResearchPaperCard = ({ index, title, authors, conference, abstract, img, url }) => {
  const handlePaperClick = () => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="w-full"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className='bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full cursor-pointer hover:bg-black-100 
                   transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl'
        onClick={handlePaperClick}
      >
        <div className='flex items-start gap-3'>
          <p className='text-white font-black text-[32px] leading-none'>"</p>
          <h3 className='text-white font-medium text-[16px] line-clamp-2'>
            {title}
          </h3>
        </div>
        
        <div className='mt-3'>
          <p className='text-white tracking-wider text-[14px] line-clamp-2 min-h-[40px]'>
            {abstract}
          </p>
          
          <div className='mt-4 flex justify-between items-center gap-1'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white font-medium text-[14px]'>
                <span className='blue-text-gradient'>@</span> {authors}
              </p>
              <p className='mt-1 text-secondary text-[12px] line-clamp-1'>
                {conference}
              </p>
            </div>
            
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              src={img}
              alt={`paper-${title}`}
              className='w-8 h-8 rounded-full object-cover'
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ResearchPapers = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()} className="pb-8">
          <p className={styles.sectionSubText}>My Academic Work</p>
          <h2 className={styles.sectionHeadText}>Research Papers.</h2>
        </motion.div>
      </div>
      
      <div className={`-mt-16 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {researchPapers.map((paper, index) => (
          <ResearchPaperCard
            key={paper.id}
            index={index}
            {...paper}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ResearchPapers, '');