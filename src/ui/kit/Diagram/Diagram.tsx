import React from 'react';
import s from './Diagram.module.css';
import classNames from 'classnames';
import {resources} from '../../../../resources/resources';
import {RightDiagram} from '@/ui/kit/Diagram/fragments/RightDiagram';
import {LeftDiagram} from '@/ui/kit/Diagram/fragments/LeftDiagram';
import FullDiagram from '@/ui/kit/Diagram/fragments/FullDiagram';

type DiagramProps = {
  isMobile: boolean;
};

const Diagram: React.FC<DiagramProps> = ({isMobile}) => {
  if (isMobile) {
    return <FullDiagram className={s.diagram} />;
  }

  return (
    <div className={s.containerDiagrams}>
      <div className={classNames(s.title, s.diagramTitle)}>{resources.skillsPage.HardSkills.title}</div>
      <div className={s.containerDiagram}>
        <RightDiagram className={s.rightDiagram} />
      </div>
      <div className={s.containerDiagram}>
        <LeftDiagram className={s.leftDiagram} />
      </div>
    </div>
  );
};

export default Diagram;
