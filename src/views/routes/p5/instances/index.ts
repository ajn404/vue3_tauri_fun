import type p5 from 'p5';
export type p5Function = (
  sketch: p5,
  container: HTMLElement | null,
  option?: p5Option
) => void;
export interface p5Option {
  width?: number;
  index?: number;
  rate?: number;
  PI?: number;

  magnification?: number;
  switch?: boolean;
}

// @index('./*', f => `export * from '${f.path}'`)
export * from './demo';
export * from './math';
export * from './practice';
export * from './sort';
export * from './sound';
