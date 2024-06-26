import {Container, Graphics} from '@pixi/react';
import {Graphics as PixiGraphics, Texture} from 'pixi.js';
import React, {useCallback, useState} from 'react';
import {CurvedText} from './CurvedText';
import {Spring} from 'react-spring';
import {Sprite} from '@pixi/react-animated';

export type SegmentType = {
  color: number;
  label: string;
};

type SegmentProps = {
  position: {x: number; y: number};
  startAngle: number;
  endAngle: number;
  segment: SegmentType;
  innerRadius: number;
  outerRadius: number;
  textRadius: number;
  textLength: number;
};

export const Segment = ({
  segment,
  startAngle,
  endAngle,
  innerRadius,
  outerRadius,
  textRadius,
  textLength,
  position,
}: SegmentProps): JSX.Element => {
  const [props, setProps] = useState({
    x: position.x,
    y: position.y,
    alpha: 0.8,
  });

  const midAngle = startAngle + (endAngle - startAngle) / 2;

  const drawSegment = useCallback(
    (
      graphics: PixiGraphics,
      x: number,
      y: number,
      innerRadius: number,
      outerRadius: number,
      startAngle: number,
      endAngle: number,
      color: number,
    ) => {
      graphics.clear();
      graphics.beginFill(color);
      graphics.moveTo(x + outerRadius * Math.cos(startAngle), y + outerRadius * Math.sin(startAngle));
      graphics.arc(x, y, outerRadius, startAngle, endAngle);
      graphics.lineTo(x + innerRadius * Math.cos(endAngle), y + innerRadius * Math.sin(endAngle));
      graphics.arc(x, y, innerRadius, endAngle, startAngle, true);
      graphics.lineTo(x + outerRadius * Math.cos(startAngle), y + outerRadius * Math.sin(startAngle));
      graphics.endFill();
    },
    [],
  );

  return (
    <Container
      eventMode="static"
      cursor="pointer"
      pointerover={() => {
        setProps({
          x: position.x + Math.cos(midAngle) * 20,
          y: position.y + Math.sin(midAngle) * 20,
          alpha: 0.9,
        });
      }}
      pointerout={() => {
        setProps({
          x: position.x,
          y: position.y,
          alpha: 0.8,
        });
      }}
    >
      <Spring to={props}>
        {(props) => (
          <Sprite texture={Texture.EMPTY} {...props}>
            <Graphics
              draw={(g) => drawSegment(g, 0, 0, innerRadius, outerRadius, startAngle, endAngle, segment.color)}
            />
            <CurvedText angle={midAngle} label={segment.label} radius={textRadius} length={textLength} />
          </Sprite>
        )}
      </Spring>
    </Container>
  );
};
