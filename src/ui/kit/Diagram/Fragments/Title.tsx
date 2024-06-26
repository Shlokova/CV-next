import {Graphics, Text} from '@pixi/react';
import {TextStyle} from 'pixi.js';
import React from 'react';

const TEXT_STYLE = new TextStyle({
  fontSize: 22,
  fontFamily: 'Monoton',
  fill: 0xffffff,
  dropShadow: true,
  dropShadowAlpha: 0.25,
  dropShadowDistance: 2,
  dropShadowBlur: 4,
  wordWrap: true,
  align: 'center',
});

export const Title = ({text}: {text: string}) => {
  return (
    <>
      <Graphics
        draw={(g) => {
          g.clear();
          g.beginFill(0x000000, 0.8);
          g.drawCircle(400, 400, 90);
          g.endFill();
        }}
      />
      <Text anchor={0.5} position={{x: 400, y: 400}} style={TEXT_STYLE} text={text.toUpperCase()} />
    </>
  );
};
