import { color } from './color'

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */

export const BASE_SHADOW = {
  shadowColor: color.shadow,
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowRadius: 10,
  shadowOpacity: 0.3
}

export const shadow = {
  base: BASE_SHADOW
}
