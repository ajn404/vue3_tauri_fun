import type p5 from 'p5';
import C2Path from '@/assets/piano/C2.mp3';
import type { SoundFile } from 'p5';
import type { p5Function } from '../index';
// import { getBrowserVersion } from '@/script/utils';

const all: p5Function = (sketch: p5, container: HTMLElement | null) => {
  let C2: SoundFile | null = null;

  const preload = async () => {
    const sound = await import('p5/lib/addons/p5.sound');
    sketch.soundFormats('mp3');
    console.log(sound);

    C2 = sketch.loadSound(C2Path);
  };
  sketch.setup = async () => {
    await preload();
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400,
      sketch.WEBGL
    );

    sketch.background(220);

    // renderer.mousePressed(mousePressed);
  };

  document.addEventListener('click', async () => {
    // const mic = sketch.getAudioContext();
    // await mic?.audioWorklet.addModule(
    //   'node_modules/.vite/deps/p5_lib_addons_p5__sound.js'
    // );
    sketch.userStartAudio();
    C2?.play();
  });

  //   const mousePressed = async () => {
  //     const { browser } = getBrowserVersion();

  //     if (browser === 'chrome') {
  //       console.log(sketch);

  //       const context = new AudioContext();
  //       await context.audioWorklet.addModule('p5/lib/addons/p5.sound');
  //       new AudioWorkletNode(context, 'worklet-processor');
  //     }
  //     sketch.userStartAudio();
  //     C2?.play();
  //   };
};

export const piano = all;
