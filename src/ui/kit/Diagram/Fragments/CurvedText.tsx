import React from 'react';
import {SimpleRope} from '@pixi/react';
import {Text, TextStyle, Point} from 'pixi.js';

const TEXT_STYLE = new TextStyle({
  fontSize: 18,
  fontFamily: 'Red Hat Mono',
  fill: 0xffffff,
  dropShadow: true,
  dropShadowAlpha: 0.25,
  dropShadowDistance: 2,
  dropShadowBlur: 4,
  wordWrap: true,
  align: 'center',
});

type CurvedTextProps = {
  label: string;
  radius: number;
  length: number;
  angle: number;
};

Text.defaultResolution = 6;
Text.defaultAutoResolution = false;

export const CurvedText = ({label, radius, angle, length}: CurvedTextProps): JSX.Element => {
  const maxRopePoints = length;

  const text = new Text(label, {
    ...TEXT_STYLE,
    wordWrapWidth: length,
  });

  text.roundPixels = true;
  text.updateText(false);

  const step = Math.PI / maxRopePoints;
  const ropePoints = (maxRopePoints - Math.round((text.texture.width / (radius * Math.PI)) * maxRopePoints)) / 2;
  const points = [];

  for (let i = maxRopePoints - ropePoints; i > ropePoints; i--) {
    const x = radius * Math.cos(step * i - Math.PI / 2);
    const y = radius * Math.sin(step * i - Math.PI / 2);

    points.push(new Point(x, y));
  }

  //@ts-ignore
  return <SimpleRope angle={(angle * 180) / Math.PI} points={points} texture={text.texture} />;
};
