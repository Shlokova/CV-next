import React from 'react';
import {resources} from '../resources/resources';
import s from '../styles/pages/ExtraPage.module.css';
import {Button} from '@/ui/kit/Button/Button';
import {Image} from '@/ui/kit/Image/Image';

const ExtraPage: React.FC = () => {
  const {article, art} = resources.extraPage;

  return (
    <div className={s.root}>
      <div className={s.technology}>
        <div className={s.header}>{article.title}</div>
        <div className={s.articles}>
          {article.items.map((el) => (
            <div className={s.article} key={el.title}>
              <div className={s.title}>{el.title}</div>
              <div className={s.authors}>{el.authors}</div>
              <div className={s.description}>{el.description}</div>
              <Button className={s.button} href={el.link}>
                View
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className={s.info}>
        <Image className={s.image} src={art.image} alt={''} width={1876} height={1914} />
        <div className={s.header}>{art.title}</div>
        <div className={s.about}>
          <div>
            {art.description}
            <a className={s.link} href={art.link.href} target="_blank" rel="noreferrer">
              {art.link.label}
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraPage;
