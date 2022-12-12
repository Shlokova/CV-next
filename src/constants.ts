export const isServer = typeof window === 'undefined';

export enum AppPath {
  Main = '/',
  Education = '/education',
  Experience = '/experience',
  Skills = '/skills',
  Projects = '/projects',
  Extra = '/extra',
}

const MEDIA = {
  MOBILE: 320,
  MOBILE_M: 600,
  MOBILE_L: 768,
  DESKTOP: 1024,
  DESKTOP_M: 1600,
  DESKTOP_L: 1920,
};

export const mobileMediaQuery = `(min-width: ${MEDIA.MOBILE}px)`;
export const mobileMediumMediaQuery = `(min-width: ${MEDIA.MOBILE_M}px)`;
export const mobileLargeMediaQuery = `(min-width: ${MEDIA.MOBILE_L}px)`;
export const desktopMediaQuery = `(min-width: ${MEDIA.DESKTOP}px)`;
export const desktopMediumMediaQuery = `(min-width: ${MEDIA.DESKTOP_M}px)`;
export const desktopLargeMediaQuery = `(min-width: ${MEDIA.DESKTOP_L}px)`;
