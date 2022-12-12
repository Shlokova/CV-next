import React from 'react';
import s from './ProgressBar.module.css';
import classNames from 'classnames';

type ProgressBarProps = {
  completed: number;
  className?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({completed, className}) => {
  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className={classNames(s.root, className)}>
      <div className={s.fillers} style={fillerStyles} />
    </div>
  );
};

export default ProgressBar;
