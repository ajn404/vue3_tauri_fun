import { reactive } from 'vue';
import { countingSortView } from '../../instances';
import { useP5 } from '@/script/composition';
export const useCounting = () => {
  const option = reactive({
    rate: 60,
    width: 3,
    count: 0,
  });
  const { container, p5_instance, update } = useP5(countingSortView, option);

  return {
    container,
    p5_instance,
    update,
    option,
  };
};
