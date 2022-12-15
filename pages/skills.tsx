import React from 'react';
import {useMedia} from 'react-use';
import {mobileLargeMediaQuery} from '@/constants';
import s from '../styles/pages/SkillsPage.module.css';
import {resources} from '../resources/resources';
import {Image} from '@/ui/kit/Image/Image';
import Diagram from '@/ui/kit/Diagram/Diagram';
import classNames from 'classnames';
import {RightDiagram} from '@/ui/kit/Diagram/fragments/RightDiagram';
import {LeftDiagram} from '@/ui/kit/Diagram/fragments/LeftDiagram';

const SkillsPage: React.FC = () => {
  const isMobileL = useMedia(mobileLargeMediaQuery, false);

  return (
    <div className={s.root}>
      <div className={s.softSkills}>
        <div className={s.title}>{resources.skillsPage.softSkills.title}</div>
        <div className={s.skills}>
          {resources.skillsPage.softSkills.items.map((el) => (
            <div className={s.skill} key={el.label}>
              <Image src={el.icon} className={s.image} alt="" width={52} height={52} />
              <div className={s.label}>{el.label}</div>
            </div>
          ))}
        </div>
      </div>
      {isMobileL ? (
        <Diagram className={s.diagram} />
      ) : (
        <div className={s.containerDiagrams}>
          <div className={classNames(s.title, s.diagramTitle)}>{resources.skillsPage.HardSkills.title}</div>
          <div className={s.containerDiagram}>
            <RightDiagram className={s.rightDiagram} />
          </div>
          <div className={s.containerDiagram}>
            <LeftDiagram className={s.leftDiagram} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsPage;
