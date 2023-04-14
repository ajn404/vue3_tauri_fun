import { leibnizSeries, type p5Option } from '../../instances';
import { useP5 } from '@/script/composition';

export const useLeibnizSeries = (option: p5Option) => {
  const { container, p5_instance, update } = useP5(leibnizSeries, option);
  return {
    container,
    p5_instance,
    update,
  };
};
