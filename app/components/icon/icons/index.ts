export * from './export-icon-component'

export const icons = {
  logo: require('./logo.png'),
  back: require('./arrow-left.png')
}

export type IconTypes = keyof typeof icons
