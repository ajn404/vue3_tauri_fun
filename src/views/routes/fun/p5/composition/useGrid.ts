import p5 from 'p5';
import { nextTick } from 'vue';
import { grid } from '../instances';

import { useP5 } from '@/script/composition';

export const useGrid = () => {
    const { container, p5_instance } = useP5();

    nextTick(() => {
        if (container.value) {
            p5_instance.value = new p5(function (args: p5) {
                grid(args, container.value);
            }, container.value);
        }
    });

    return {
        container, p5_instance
    }
}