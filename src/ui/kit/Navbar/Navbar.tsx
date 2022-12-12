import React, {FC, useState} from 'react';

import s from './Navbar.module.css';
import classNames from 'classnames';
import {useMedia} from 'react-use';
import {desktopMediaQuery} from '@/constants';
import {Image} from '@/ui/kit/Image/Image';
import {ROUTE_MAP} from '@/ui/kit/Navbar/constant';
import Link from 'next/link';
import {useRouter} from 'next/router';

export const Navbar: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => {
    return path === router.pathname;
  };

  if (!useMedia(desktopMediaQuery, false)) {
    return (
      <div>
        <div className={classNames(s.navigation, {[s.hidden]: !isShow})}>
          <button className={s.navigationButton} onClick={() => setIsShow((prev) => !prev)}>
            <Image className={s.buttonImg} src={'/menu.svg'} alt={''} width={150} height={150} />
          </button>
          {isShow && (
            <div className={s.navigationPanel}>
              {ROUTE_MAP.map((el) => (
                <Link
                  key={el.path}
                  href={el.path}
                  className={classNames(s.button, {[s.active]: isActive(el.path)})}
                  onClick={() => setIsShow(false)}
                >
                  {el.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.photo}>
          <Image className={s.img} src={'/mini-photo.png'} alt={''} width={350} height={350} />
        </div>
        <div className={s.text}>Shlokova Anna</div>
      </div>
      {ROUTE_MAP.map((el) => (
        <Link href={el.path} key={el.path} className={classNames(s.button, {[s.active]: isActive(el.path)})}>
          {el.title}
        </Link>
      ))}
    </div>
  );
};
