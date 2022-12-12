import React from 'react';
import s from './Timeline.module.css';
import TimelineItem from './TimelineItem/TimelineItem';
import classNames from 'classnames';
import {TimelineData} from './types';

type TimelineProps = {
  timelineData: TimelineData[];
  className?: string;
};

const Timeline: React.FC<TimelineProps> = ({timelineData, className}) => {
  return (
    <>
      {timelineData.length > 0 && (
        <div className={classNames(s.container, className)}>
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={data.date} />
          ))}
        </div>
      )}
    </>
  );
};

export default Timeline;
