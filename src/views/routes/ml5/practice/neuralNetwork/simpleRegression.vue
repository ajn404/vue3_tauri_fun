

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
        task: "regression",
        debug: true,
    }
    let nn: any;
    let counter = 0;
    sketch.setup = () => {
        sketch.createCanvas(container.clientWidth, container.clientHeight);
        nn = ml5.neuralNetwork(options);
        createTrainingData();
        nn.normalizeData();
        console.log(nn)

        const trainingOptions = {
            batchSize: 24,
            epochs: 10
        }

        nn.train(trainingOptions, finishedTraining, () => {
            console.log('finished');
        }); // if you want to change the training options
        // nn.train(finishedTraining); // use the default training options
    }

    function finishedTraining() {

        if (counter < sketch.width) {
            nn.predict([counter], (err: Error, results: any) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(results[0]);
                const prediction = results[0];
                const x = counter;
                const y = prediction.value;
                sketch.fill(255, 0, 0);
                sketch.rectMode(sketch.CENTER);
                sketch.rect(x, y, 10, 10);

                counter += 1;
                finishedTraining();
            });
        }

    }
    function createTrainingData() {
        for (let i = 0; i < sketch.width; i += 10) {
            const iters = sketch.floor(sketch.random(5, 20));
            const spread = 50;
            for (let j = 0; j < iters; j += 1) {
                const data = [i, sketch.height - i + sketch.floor(sketch.random(-spread, spread))];
                sketch.fill(0, 0, 255);
                sketch.ellipse(data[0], data[1], 10, 10);
                nn.addData([data[0]], [data[1]]);
            }
        }
    }

}, { banResize: true });


</script>



