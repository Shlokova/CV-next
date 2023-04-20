import React from 'react';
import s from '../styles/pages/ExperiencePage.module.css';
import {resources} from '../resources/resources';
import {Title} from '@/ui/kit/Title/Title';

const ExperiencePage: React.FC = () => {
  return (
    <div className={s.root}>
      <Title text={resources.experiencePage.title} className={s.title} />
      <div className={s.information}>
        {resources.experiencePage.information.map((el) => (
          <div className={s.informationItem} key={el.workplace}>
            <div className={s.date}>{el.years}</div>
            <div className={s.about}>
              <div className={s.workplace}>{el.workplace}</div>
              <div className={s.post}>{el.post}</div>
              <ul className={s.tasks}>
                {el.tasks.map((task, id) => (
                  <li key={id}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
