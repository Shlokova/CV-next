import React, {FC, PropsWithChildren} from 'react';

import s from './Button.module.css';
import classNames from 'classnames';

type ButtonProps = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
  href?: string;
};

export const Button: FC<ButtonProps> = ({className, onClick, children, href}) => {
  if (href) {
    return (
      <a href={href} className={classNames(s.root, className || '')} target={'_blank'} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classNames(s.root, className || '')}>
      {children}
    </button>
  );
};
