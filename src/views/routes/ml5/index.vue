<template>
    <div class="view" ref="view">
        <canvas ref="canvas"> </canvas>
        <video ref="video" class="hidden"></video>

        <div class="fixed w-1/2 flex right-0 top-1 items-center">
            <span>SCORE</span>
            <el-slider :min="0.1" :max="1" :step="0.01" v-model="score" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as ml5 from 'ml5';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
//这个包着实有点大
const canvas: Ref<HTMLCanvasElement | null> = ref(null);
const video: Ref<HTMLVideoElement | null> = ref(null);
const view: Ref<HTMLElement | null> = ref(null);
const score = ref(0.2);
const animationId = ref(0);
onUnmounted(() => {
    cancelAnimationFrame(animationId.value);
});
onMounted(() => {
    // Create a webcam capture
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function (stream) {
                if (video.value) {
                    video.value.srcObject = stream;
                    video.value.play();
                }
            });
    }

    if (canvas.value && video.value) {
        let ctx: CanvasRenderingContext2D | null = canvas.value.getContext('2d');
        let poses: any[] = [];

        function drawCameraIntoCanvas() {
            if (video.value && view.value && canvas.value) {
                canvas.value.width = view.value.clientWidth;
                canvas.value.height = view.value.clientHeight;
                video.value.width = view.value.clientWidth;
                video.value.height = view.value.clientHeight;
                ctx = canvas.value.getContext('2d');
                if (ctx) {
                    ctx.drawImage(
                        video.value,
                        0,
                        0,
                        view.value.clientWidth,
                        view.value.clientHeight
                    );
                    drawKeypoints();
                    drawSkeleton();
                }
            }
            animationId.value = requestAnimationFrame(drawCameraIntoCanvas);
        }
        drawCameraIntoCanvas();

        const poseNet = ml5.poseNet(video.value, () => {
            poseNet.multiPose(video.value);
        });

        poseNet.on('pose', (res: any[]) => {
            poses = res;
        });

        function drawKeypoints() {
            if (ctx) {
                for (let i = 0; i < poses.length; i += 1) {
                    for (let j = 0; j < poses[i].pose.keypoints.length; j += 1) {
                        let keypoint = poses[i].pose.keypoints[j];
                        if (keypoint.score > score.value) {
                            let { x, y } = keypoint.position;

                            ctx.beginPath();
                            ctx.arc(x, y, 10, 0, 2 * Math.PI);
                            if (keypoint.part.includes('Eye')) {
                                ctx.fillStyle = `rgba(${(x * 100) % 255},${(y * 100) % 255},${(x * 100) % 255
                                    },${x % 1})`;
                            } else {
                                ctx.fillStyle = 'white';
                            }
                            ctx.fill();
                            ctx.fillText(keypoint.part, x - 10, y - 10);
                            ctx.stroke();
                        }
                    }
                }
            }
        }

        function drawSkeleton() {
            if (ctx) {
                for (let i = 0; i < poses.length; i += 1) {
                    for (let j = 0; j < poses[i].skeleton.length; j += 1) {
                        let partA = poses[i].skeleton[j][0];
                        let partB = poses[i].skeleton[j][1];
                        ctx.beginPath();
                        ctx.moveTo(partA.position.x, partA.position.y);
                        ctx.lineTo(partB.position.x, partB.position.y);
                        ctx.stroke();
                    }
                }
            }
        }
    }
});
</script>
