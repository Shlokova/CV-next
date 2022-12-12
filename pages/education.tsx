import React from 'react';
import {resources} from '../resources/resources';
import s from '../styles/pages/EducationPage.module.css';
import Timeline from '@/ui/kit/Timeline/Timeline';

const EducationPage: React.FC = () => {
  const {educationInfo, title} = resources.educationPage;
  const timelineData = educationInfo.map((el) => ({
    date: el.years,
    title: el.university,
    subtitle: el.place,
    description: el.educationProgram,
  }));

  return (
    <div className={s.root}>
      <div className={s.title}>{title}</div>
      <div className={s.timelineContainer}>
        <Timeline timelineData={timelineData} className={s.timeline} />
      </div>
    </div>
  );
};

export default EducationPage;
