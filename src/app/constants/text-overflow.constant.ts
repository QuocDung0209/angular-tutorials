export const TEXT_OVERFLOW_METHOD = {
  textOverflow: 'text-overflow',
  webkitLineClamp: 'line-clamp-overflow',
  wordBreak: 'word-break-overflow',
  angularDirective: '',
}

export const UNITS = [
  'cm',
  'mm',
  'in', // 	inches (1in = 96px = 2.54cm)
  'px', // pixels (1px = 1/96th of 1in)
  'pt', // points (1pt = 1/72 of 1in)
  'pc', // picas (1pc = 12 pt)
  'em', // Relative to the font-size of the element (2em means 2 times the size of the current font)
  'ex', // Relative to the x-height of the current font (rarely used)
  'ch', // Relative to the width of the "0" (zero)
  'rem', // Relative to font-size of the root element
  'vw', // Relative to 1% of the width of the viewport*
  'vh', // Relative to 1% of the height of the viewport*
  'vmin', // Relative to 1% of viewport's* smaller dimension
  'vmax', // Relative to 1% of viewport's* larger dimension
  '%', // Relative to the parent element
];

export const TEXT_OVERFLOW_OPTIONS = [
  {
    id: 'clip',
    value: 'text-overflow: clip;',
  },
  {
    id: 'ellipsis',
    value: 'text-overflow: ellipsis;',
  },
  {
    id: 'initial',
    value: 'text-overflow: initial;',
  },
];

export const ORIENT_OPTIONS = [
  {
    id: 'vertical',
    value: '-webkit-box-orient: vertical;',
  },
  {
    id: 'block-axis',
    value: '-webkit-box-orient: block-axis;',
  },
  {
    id: 'horizontal',
    value: '-webkit-box-orient: horizontal;',
  },
  {
    id: 'inline-axis',
    value: '-webkit-box-orient: inline-axis;',
  },
  {
    id: 'initial',
    value: '-webkit-box-orient: initial;',
  },
];

export const WORD_BREAK_OPTIONS = [
  {
    id: 'normal',
    value: 'word-break: normal;',
  },
  {
    id: 'break-all',
    value: 'word-break: break-all;',
  },
  {
    id: 'keep-all',
    value: 'word-break: keep-all;',
  },
  {
    id: 'break-word',
    value: 'word-break: break-word;',
  },
  {
    id: 'initial',
    value: 'word-break: initial;',
  },
  {
    id: 'inherit',
    value: 'word-break: inherit;',
  },
];
