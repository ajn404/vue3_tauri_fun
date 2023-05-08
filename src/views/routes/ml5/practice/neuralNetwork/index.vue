

<template>
    <div class="view">
        <div class="container" ref="container"></div>
    </div>
</template>

<script lang="ts" setup>
import * as ml5 from 'ml5';
import { useP5 } from '@/script/composition';
import { assertIsHTMLElement } from '@/script/utils';
const { container } = useP5((sketch, container) => {
    assertIsHTMLElement(container, 'container')
    const options = {
        inputs: 1,
        outputs: 2,
        task: 'classification',
        debug: true
    }
    let nn: any;
    sketch.setup = () => {
        sketch.createCanvas(container.clientWidth, container.clientHeight);
        nn = ml5.neuralNetwork(options);
        createTrainingData();
        nn.normalizeData();
        console.log(nn)

        const trainingOptions = {
            batchSize: 24,
            epochs: 32
        }

        nn.train(trainingOptions, finishedTraining, () => {
            console.log('finished');
        }); // if you want to change the training options
        // nn.train(finishedTraining); // use the default training options
    }

    function finishedTraining() {

        nn.classify([300], function (err: Error, result: any) {
            console.log(result);
        })

    }
    function createTrainingData() {
        for (let i = 0; i < 400; i += 1) {
            if (i % 2 === 0) {
                const x = sketch.random(0, sketch.width / 2);
                nn.addData([x], ['left'])
            } else {
                const x = sketch.random(sketch.width / 2, sketch.width);
                nn.addData([x], ['right'])
            }
        }
    }

}, {});










</script>



