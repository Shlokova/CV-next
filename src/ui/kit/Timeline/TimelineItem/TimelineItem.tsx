import React from 'react';
import s from './TimelineItem.module.css';
import {TimelineData} from '@/ui/kit/Timeline/types';

type TimelineProps = {
  data: TimelineData;
};

const TimelineItem: React.FC<TimelineProps> = ({data}) => {
  return (
    <div className={s.root}>
      <div className={s.date}>{data.date}</div>
      <div className={s.content}>
        <div className={s.information}>
          <div className={s.title}>{data.title}</div>
          <div className={s.subtitle}>{data.subtitle}</div>
          <div className={s.description}>{data.description}</div>
        </div>
        <div className={s.circle} />
      </div>
    </div>
  );
};

export default TimelineItem;
