export enum TextSizeEnum {
  'xxs' = 8,
  'xs' = 10,
  'sm' = 12,
  'base' = 14,
  'lg' = 18,
  'xl' = 22,
  '2xl' = 26,
  '3xl' = 30,
  '4xl' = 34,
}

export enum TextEnum {
  textPrimary = '#131313',
  textSecondary = '#effefc',
}

export enum BackgroundEnum {
  bgPrimary = '#1c1e22',
  bgSecondary = '#2c2c2c',
}

export type TextColors = keyof typeof TextEnum;
export type TextSizes = keyof typeof TextSizeEnum;
export type BackgroundColos = keyof typeof BackgroundEnum;
