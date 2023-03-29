/**
  * @function _
  * @since 1.0.0
  */
function _ ($, $$) {
  return `\x1b[${$$}m${$}\x1b[0m`
}

/**
  * @export
  * @function bold
  * @since 1.0.0
  */
export function bold ($) {
  return _($, 1)
}

/**
  * @export
  * @function dim
  * @since 1.0.0
  */
export function dim ($) {
  return _($, 2)
}

/**
  * @export
  * @function italic
  * @since 1.0.0
  */
export function italic ($) {
  return _($, 3)
}

/**
  * @export
  * @function underline
  * @since 1.0.0
  */
export function underline ($) {
  return _($, 4)
}

/**
  * @export
  * @function strike
  * @since 1.0.0
  */
export function strike ($) {
  return _($, 9)
}

/**
  * @export
  * @function black
  * @since 1.0.0
  */
export function black ($) {
  return _($, 30)
}

/**
  * @export
  * @function red
  * @since 1.0.0
  */
export function red ($) {
  return _($, 31)
}

/**
  * @export
  * @function green
  * @since 1.0.0
  */
export function green ($) {
  return _($, 32)
}

/**
  * @export
  * @function yellow
  * @since 1.0.0
  */
export function yellow ($) {
  return _($, 33)
}

/**
  * @export
  * @function blue
  * @since 1.0.0
  */
export function blue ($) {
  return _($, 34)
}

/**
  * @export
  * @function magenta
  * @since 1.0.0
  */
export function magenta ($) {
  return _($, 35)
}

/**
  * @export
  * @function cyan
  * @since 1.0.0
  */
export function cyan ($) {
  return _($, 36)
}

/**
  * @export
  * @function white
  * @since 1.0.0
  */
export function white ($) {
  return _($, 37)
}

/**
  * @export
  * @function prettyblack
  * @since 1.0.0
  */
export function prettyblack ($) {
  return _($, 90)
}

/**
  * @export
  * @function prettyred
  * @since 1.0.0
  */
export function prettyred ($) {
  return _($, 91)
}

/**
  * @export
  * @function prettygreen
  * @since 1.0.0
  */
export function prettygreen ($) {
  return _($, 92)
}

/**
  * @export
  * @function prettyyellow
  * @since 1.0.0
  */
export function prettyyellow ($) {
  return _($, 93)
}

/**
  * @export
  * @function prettyblue
  * @since 1.0.0
  */
export function prettyblue ($) {
  return _($, 94)
}

/**
  * @export
  * @function prettymagenta
  * @since 1.0.0
  */
export function prettymagenta ($) {
  return _($, 95)
}

/**
  * @export
  * @function prettycyan
  * @since 1.0.0
  */
export function prettycyan ($) {
  return _($, 96)
}

/**
  * @export
  * @function prettywhite
  * @since 1.0.0
  */
export function prettywhite ($) {
  return _($, 97)
}

/**
  * @export
  * @function bgblack
  * @since 1.0.0
  */
export function bgblack ($) {
  return _($, 40)
}

/**
  * @export
  * @function bgred
  * @since 1.0.0
  */
export function bgred ($) {
  return _($, 41)
}

/**
  * @export
  * @function bggreen
  * @since 1.0.0
  */
export function bggreen ($) {
  return _($, 42)
}

/**
  * @export
  * @function bgyellow
  * @since 1.0.0
  */
export function bgyellow ($) {
  return _($, 43)
}

/**
  * @export
  * @function bgblue
  * @since 1.0.0
  */
export function bgblue ($) {
  return _($, 44)
}

/**
  * @export
  * @function bgmagenta
  * @since 1.0.0
  */
export function bgmagenta ($) {
  return _($, 45)
}

/**
  * @export
  * @function bgcyan
  * @since 1.0.0
  */
export function bgcyan ($) {
  return _($, 46)
}

/**
  * @export
  * @function bgwhite
  * @since 1.0.0
  */
export function bgwhite ($) {
  return _($, 47)
}

/**
  * @export
  * @function bgprettyblack
  * @since 1.0.0
  */
export function bgprettyblack ($) {
  return _($, 100)
}

/**
  * @export
  * @function bgprettyred
  * @since 1.0.0
  */
export function bgprettyred ($) {
  return _($, 101)
}

/**
  * @export
  * @function bgprettygreen
  * @since 1.0.0
  */
export function bgprettygreen ($) {
  return _($, 102)
}

/**
  * @export
  * @function bgprettyyellow
  * @since 1.0.0
  */
export function bgprettyyellow ($) {
  return _($, 103)
}

/**
  * @export
  * @function bgprettyblue
  * @since 1.0.0
  */
export function bgprettyblue ($) {
  return _($, 104)
}

/**
  * @export
  * @function bgprettymagenta
  * @since 1.0.0
  */
export function bgprettymagenta ($) {
  return _($, 105)
}

/**
  * @export
  * @function bgprettycyan
  * @since 1.0.0
  */
export function bgprettycyan ($) {
  return _($, 106)
}

/**
  * @export
  * @function bgprettywhite
  * @since 1.0.0
  */
export function bgprettywhite ($) {
  return _($, 107)
}