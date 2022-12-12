import {FC} from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}

export const Image: FC<ImageProps> = ({src, alt, className, width, height}) => {
  // eslint-disabled-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} style={{aspectRatio: String(width / height)}} />;
};
