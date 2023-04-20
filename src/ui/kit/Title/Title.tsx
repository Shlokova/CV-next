import React from 'react';
import s from './Title.module.css';
import classNames from 'classnames';

type TitleProps = {
  className?: string;
  text: string;
};

export const Title: React.FC<TitleProps> = ({text, className}) => {
  return <div className={classNames(s.title, className)}>{text}</div>;
};
