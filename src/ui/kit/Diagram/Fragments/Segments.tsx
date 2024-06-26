import {Container} from '@pixi/react';
import React from 'react';
import {Segment, SegmentType} from './Segment';
import {Title} from './Title';
import {resources} from 'resources/resources';

const INNER_RADIUS = 60;
const INITIAL_OUTER_RADIUS = 100;

export const Segments = ({segmentsLevels}: {segmentsLevels: SegmentType[][]}) => {
  return (
    <Container>
      {segmentsLevels.map((segments, rang) => {
        const zIndex = segmentsLevels.length - rang - 1;

        return (
          <React.Fragment key={rang}>
            {zIndex === 0 && <Title text={resources.skillsPage.HardSkills.title} />}
            <SegmentsLevel segments={segments} rang={rang} zIndex={zIndex} />
          </React.Fragment>
        );
      })}
    </Container>
  );
};

type SegmentsLevelParams = {
  rang: number;
  zIndex: number;
  segments: SegmentType[];
};

const SegmentsLevel = ({segments, rang, zIndex}: SegmentsLevelParams) => {
  let initialAngle = (segments.length - rang) / Math.PI;

  return (
    <>
      {segments.map((segment, index) => {
        const startAngle = initialAngle;
        const endAngle = startAngle + (Math.PI * 2) / (segments.length + 1);
        const outerRadius = INITIAL_OUTER_RADIUS + INITIAL_OUTER_RADIUS * zIndex * 0.7;
        const textRadius = outerRadius - 15;
        const textLength = (2 * Math.PI * textRadius) / (segments.length + 1);
        initialAngle = endAngle + (Math.PI * 2) / ((segments.length + 1) * segments.length);

        return (
          <Segment
            key={index}
            position={{x: 400, y: 400}}
            startAngle={startAngle}
            endAngle={endAngle}
            segment={segment}
            innerRadius={INNER_RADIUS}
            outerRadius={outerRadius}
            textRadius={textRadius}
            textLength={textLength}
          />
        );
      })}
    </>
  );
};
