import React, {FC, PropsWithChildren} from 'react';

import s from './Button.module.css';
import classNames from 'classnames';

type ButtonProps = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
};

export const Button: FC<ButtonProps> = ({className, onClick, children, href, download}) => {
  if (href) {
    return (
      <a
        href={href}
        className={classNames(s.root, className || '')}
        download={download}
        target={'_blank'}
        rel="noreferrer"
      >
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
