import {AdaptiveProperty} from '@/types/types';
import {useMedia} from 'react-use';
import {
  desktopLargeMediaQuery,
  desktopMediaQuery,
  desktopMediumMediaQuery,
  mobileLargeMediaQuery,
  mobileMediumMediaQuery,
} from '@/constants';

const updateProperty = (property: string | null, newValue?: string) => {
  if (newValue !== undefined) {
    return newValue;
  }

  return property;
};

export const useAdaptiveProperty = (property?: AdaptiveProperty) => {
  const isMobileMedium = useMedia(mobileMediumMediaQuery);
  const isMobileLarge = useMedia(mobileLargeMediaQuery);
  const isDesktop = useMedia(desktopMediaQuery);
  const isDesktopMedium = useMedia(desktopMediumMediaQuery);
  const isDesktopLarge = useMedia(desktopLargeMediaQuery);

  if (!property) {
    return '';
  }

  let adaptiveProperty = updateProperty(null, property.mobile);

  if (isMobileMedium) {
    adaptiveProperty = updateProperty(adaptiveProperty, property.mobileM);
  }

  if (isMobileLarge) {
    adaptiveProperty = updateProperty(adaptiveProperty, property.mobileL);
  }

  if (isDesktop) {
    adaptiveProperty = updateProperty(adaptiveProperty, property.desktop);
  }

  if (isDesktopMedium) {
    adaptiveProperty = updateProperty(adaptiveProperty, property.desktopM);
  }

  if (isDesktopLarge) {
    adaptiveProperty = updateProperty(adaptiveProperty, property.desktopL);
  }

  return adaptiveProperty || '';
};
