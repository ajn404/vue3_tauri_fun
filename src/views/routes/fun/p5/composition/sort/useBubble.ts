import { reactive } from 'vue';
import { bubbleSortView } from '../../instances';
import { useP5 } from '@/script/composition';
export const useBubble = () => {
  const option = reactive({
    rate: 60,
    width: 3,
  });
  const { container, p5_instance, update } = useP5(bubbleSortView, option);

  return {
    container,
    p5_instance,
    update,
    option,
  };
};
