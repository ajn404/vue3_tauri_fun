import { grid } from '../instances';

import { useP5 } from '@/script/composition';

export const useGrid = () => {
  const { container, p5_instance } = useP5(grid);

  return {
    container,
    p5_instance,
  };
};
