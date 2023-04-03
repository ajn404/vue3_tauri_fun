import { reactive } from 'vue';
import { heapSortView } from '../../instances';
import { useP5 } from '@/script/composition';
export const useHeap = () => {
  const option = reactive({
    rate: 60,
    width: 3,
  });
  const { container, p5_instance, update } = useP5(heapSortView, option);

  return {
    container,
    p5_instance,
    update,
    option,
  };
};
