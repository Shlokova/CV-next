import React, { useEffect, useRef, useState } from "react";
import s from '../styles/pages/ExperiencePage.module.css';
import {resources} from '../resources/resources';
import {Title} from '@/ui/kit/Title/Title';

const ExperiencePage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [topVisible, setTopVisible] = useState(false);
  const [isUpButton, setIsUpButton] = useState(false);

  useEffect(() => {
    if (ref.current) {

      ref.current.addEventListener('scroll',()=>{
        if (ref.current?.scrollTop === 0){
          setIsUpButton(false);
        } else if (ref.current?.scrollTop + ref.current?.clientHeight){
          setIsUpButton(true);
        }
      });

      if (ref.current.scrollHeight > ref.current.clientHeight) {
        setTopVisible(true);
      }
    };

  }, []);

  const scroll = () => {
    ref.current &&
      ref.current.scrollTo({
        top: isUpButton ? 0 : ref.current.scrollHeight,
        behavior: 'smooth',
      });
  };

  return (
    <div className={s.root}>
      <Title text={resources.experiencePage.title} className={s.title} />
      <div className={s.information} ref={ref}>
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
        {
          topVisible && <button className={[s.moreButton, isUpButton ? s.buttonUp : s.buttonDown].join(' ')} onClick={scroll}/>
        }
      </div>
    </div>
  );
};

export default ExperiencePage;
