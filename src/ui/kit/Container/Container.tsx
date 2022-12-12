import React, {FC, PropsWithChildren} from 'react';
import classNames from 'classnames';
import s from './Container.module.css';

type ContainerProps = PropsWithChildren & {
  className?: string;
};

export const Container: FC<ContainerProps> = ({children, className}) => (
  <div className={classNames(s.container, className)}>{children}</div>
);
