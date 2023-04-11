import { useP5 } from '@/script/composition';
import type { p5_func } from '../instances';

export const useP5Instance = (fun: p5_func) => {
  const { container, p5_instance } = useP5(fun);

  return {
    container,
    p5_instance,
  };
};
