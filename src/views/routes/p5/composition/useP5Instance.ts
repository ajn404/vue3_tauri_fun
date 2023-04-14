import { useP5 } from '@/script/composition';
import type { p5Function } from '../instances';

export const useP5Instance = (fun: p5Function) => {
  const { container, p5_instance } = useP5(fun);

  return {
    container,
    p5_instance,
  };
};
