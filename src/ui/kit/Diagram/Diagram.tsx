import React from 'react';
import {Stage} from '@pixi/react';
import {Segments} from './Fragments/Segments';
import {SegmentType} from './Fragments/Segment';
import s from './Diagram.module.css';
import {resources} from 'resources/resources';

const colors = [
  0xa2978f, 0x333333, 0xc17944, 0xe3e2d9, 0x857e69, 0x1f1f1f, 0x8e5c37, 0x9c9696, 0xb1a789, 0xc17943, 0xc8c1ac,
];

const skills: SegmentType[][] = resources.skillsPage.HardSkills.skills.map((skillsName, i) =>
  skillsName.map((skillName, j) => ({label: skillName, color: colors[(i + j) % colors.length]})),
);

export const Diagram: React.FC = () => {
  return (
    <Stage options={{backgroundColor: 0x171717}} className={s.diagram} width={800} height={800}>
      <Segments segmentsLevels={skills} />
    </Stage>
  );
};
