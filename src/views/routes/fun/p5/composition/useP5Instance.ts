import p5 from 'p5';
import { nextTick } from 'vue';
import { useP5 } from '@/script/composition';
import type { p5_func } from '../instances'

export const useP5Instance = (fun: p5_func) => {
    const { container, p5_instance } = useP5();

    nextTick(() => {
        if (container.value) {
            p5_instance.value = new p5(function (args: p5) {
                fun(args, container.value);
            }, container.value);
        }
    });

    return {
        container, p5_instance
    }
}