export { geometries } from './geometries';
export { noise } from './noise1d';
export { grid } from './grid';

import type p5 from 'p5';

export type p5_func =  (sketch: p5, container: HTMLElement | null) => void
