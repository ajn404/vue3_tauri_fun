export * from './geometries';
export * from './noise1d';
export * from './grid';
export * from './sort';
export * from './sound';
import type p5 from 'p5';
export * from './practice'
export type p5_func = (
  sketch: p5,
  container: HTMLElement | null,
  option?: p5Option
) => void;
export interface p5Option {
  width?: number;
}