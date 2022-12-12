import React from 'react';
import s from '../styles/pages/ExperiencePage.module.css';
import {resources} from '../resources/resources';

const ExperiencePage: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.title}>{resources.experiencePage.title}</div>
      <div className={s.information}>
        {resources.experiencePage.information.map((el) => (
          <div className={s.informationItem} key={el.workplace}>
            <div className={s.date}>{el.years}</div>
            <div className={s.about}>
              <div className={s.workplace}>{el.workplace}</div>
              <div className={s.place}>{el.place}</div>
              <div className={s.command}>{el.command}</div>
              <div className={s.post}>{el.post}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
