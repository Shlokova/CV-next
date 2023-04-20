import React from 'react';
import {resources} from '../resources/resources';
import s from '../styles/pages/EducationPage.module.css';
import Timeline from '@/ui/kit/Timeline/Timeline';
import {Title} from '@/ui/kit/Title/Title';

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
      <Title text={title} className={s.title} />
      <div className={s.timelineContainer}>
        <Timeline timelineData={timelineData} className={s.timeline} />
      </div>
    </div>
  );
};

export default EducationPage;
