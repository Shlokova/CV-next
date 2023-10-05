import React, {useEffect, useRef, useState} from 'react';
import s from '../styles/pages/ExperiencePage.module.css';
import {resources} from '../resources/resources';
import {Title} from '@/ui/kit/Title/Title';

const ExperiencePage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [topButtonVisible, setTopButtonVisible] = useState(false);
  const [bottomButtonVisible, setBottomButtonVisible] = useState(true);

  const scrollListener = () => {
    if (!ref.current) {
      return;
    }

    if (ref.current.scrollTop < 5) {
      setTopButtonVisible(false);
    } else {
      setTopButtonVisible(true);
    }

    if (ref.current.scrollTop + ref.current.clientHeight === ref.current.scrollHeight) {
      setBottomButtonVisible(false);
    } else {
      setBottomButtonVisible(true);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', scrollListener);

      if (ref.current.scrollHeight <= ref.current.clientHeight) {
        setTopButtonVisible(false);
      }
    }
  }, []);

  const scrollTo = (isUpButton: boolean) => {
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
      </div>
      {topButtonVisible && <button className={[s.moreButton, s.buttonUp].join(' ')} onClick={() => scrollTo(true)} />}
      {bottomButtonVisible && (
        <button className={[s.moreButton, s.buttonDown].join(' ')} onClick={() => scrollTo(false)} />
      )}
    </div>
  );
};

export default ExperiencePage;
