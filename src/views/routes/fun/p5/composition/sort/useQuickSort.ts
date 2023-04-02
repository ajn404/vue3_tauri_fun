import { reactive } from 'vue';
import { useP5 } from '@/script/composition';
import { quickSortView } from '../../instances';
export const useQuick = () => {
  const option = reactive({
    rate: 5,
    width: 2,
  });
  const { container, p5_instance, update } = useP5(quickSortView, option);

  return {
    container,
    p5_instance,
    update,
    option,
  };
};
