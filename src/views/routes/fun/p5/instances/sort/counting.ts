import type p5 from 'p5';
import type { p5Option } from '../';
export interface countingSortViewOption extends p5Option {
    rate?: number;
    count?:number;
}

export const coutingSort = (storeArr: number[]): number[] => {
    let len = storeArr.length;
    if (len > 1) {
        let max = storeArr[0];
        for (let i = 1; i < len; i++) {
            let item = storeArr[i];
            if (item > max) max = item;
        }
        let C = new Array(max + 1);
        C.fill(0)
        //callbackFn 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。

        //初始化C
        //C内存储计数
        for (let x = 0; x < len; x++) {
            C[storeArr[x]] += 1;
        }

        //C内存储计数索引
        for (let j = 1; j <= max; j++) {
            C[j] += C[j - 1];
        }
        let B = new Array(len);
        for (let k = len - 1; k >= 0; k--) {

            //查询arr[k]的索引，并赋值B[index] = storeArr[k]
            B[C[storeArr[k]]] = storeArr[k];
            //索引--
            C[storeArr[k]]--;
        }
        return B;
    }

    return storeArr



}

//any script
export const deepCloneMethod = (target: any) => {
    const map = new Map();
    function isObject(val: any) {
        return val != null && typeof val === "object";
    }
    function clone(target: any) {
        if (isObject(target)) {
            let cloneTarget: any = Array.isArray(target) ? [] : {};
            if (map.get(target)) {
                return map.get(target);
            }
            map.set(target, cloneTarget);
            for (const key in target) {
                cloneTarget[key] = clone(target[key]);
            }
            return cloneTarget;
        } else {
            return target;
        }
    }
    return clone(target);
}

export const countingSortView = (
    sketch: p5,
    container: HTMLElement | null,
    option?: countingSortViewOption
) => {
    let k = 0;
    let len = 0;
    let storeArr: number[] = [];
    let C: number[];
    let values: number[] = []; ''
    const width: number = option?.width || 1;
    const rate = option?.rate || 60;
    sketch.setup = () => {
        sketch.createCanvas(
            container?.clientWidth || sketch.windowWidth,
            container?.clientHeight || sketch.windowHeight
        );
        sketch.frameRate(rate);
        values = new Array(Math.round(sketch.width / width));

        for (let n = 0; n < values.length; n++) {
            values[n] = Math.floor(sketch.random(sketch.height));
        }
        setupStoreArr();
    };




    const setupStoreArr = () => {
        k = values.length - 1;
        len = values.length;

        storeArr = deepCloneMethod(values);
        // storeArr = structuredClone(values);
        // storeArr = values;

        let max = storeArr[0];
        for (let i = 1; i < len; i++) {
            let item = storeArr[i];
            if (item > max) max = item;
        }
        C = new Array(max + 1);
        C.fill(0)
        for (let x = 0; x < len; x++) {
            C[storeArr[x]] += 1;
        }
        for (let j = 1; j <= max; j++) {
            C[j] += C[j - 1];
        }
    }

    const drawLine = () => {
        for (let m = 0; m < values.length; m++) {
            const color = (m / values.length) * 255;
            const reverseColor = 255 - color;

            sketch.stroke(reverseColor - 100, color, 100);
            sketch.strokeWeight(width);

            const line_height = sketch.height - values[m];
            sketch.line(m * width, sketch.height, m * width, line_height);
        }
    };

    sketch.draw = () => {
        sketch.translate(0.5*width,0);

        sketch.background(0);
        drawLine();

        if (k >= 0 && len > 0) {
            values[C[storeArr[k]] - 1] = storeArr[k];
            {
                sketch.stroke(256, 256, 256);
                const line_height = sketch.height - values[k];
                sketch.line(k * width, sketch.height, k * width, line_height);
                if (option)option.count = values[k];
            }
            C[storeArr[k]]--;
        }
        else {
            sketch.noLoop();
        }

        k--;



    };
};
