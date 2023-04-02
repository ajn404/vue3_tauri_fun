import type p5 from 'p5';
import C2Path from "@/assets/piano/C2.mp3"
import type { SoundFile } from 'p5';
import type { p5_func } from '../index'
const all: p5_func = (sketch: p5, container: HTMLElement | null) => {
    let C2: SoundFile | null = null;
    sketch.preload = async () => {
        await import('p5/lib/addons/p5.sound')

        sketch.soundFormats('mp3');
        C2 = sketch.loadSound(C2Path);
    }
    sketch.setup = () => {
        sketch.createCanvas(
            container?.clientWidth || 400,
            container?.clientHeight || 400,
            sketch.WEBGL
        );

        sketch.background(220);
        // C2?.play();

    };

    sketch.mousePressed = () => {
        console.log('start');
        
        C2?.play();
    }
}

export const piano = all;