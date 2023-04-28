<template>
    <div class="view" ref="view">
        <canvas ref="canvas"> </canvas>
        <video ref="video" class="hidden"></video>

        <div class="fixed w-1/2 flex right-0 top-10 items-center">
            <span>SCORE</span>
            <el-tooltip content="举起手来(以鼻子为基准,当前镜头最好只有一人)" :visible="score === 0.1" effect="customized">
                <el-slider :min="0.1" :max="1" :step="0.01" v-model="score" />
            </el-tooltip>
        </div>
        <img v-show="reactiveData.surrender" :src="`${baseUrl}imgs/splash/white-flag.jpg`"
            class="img w-1/2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" alt="">

    </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import * as ml5 from 'ml5';
import { onMounted, onUnmounted, reactive, ref, watch, type Ref, getCurrentInstance } from 'vue';
//这个包着实有点大
const canvas: Ref<HTMLCanvasElement | null> = ref(null);
const video: Ref<HTMLVideoElement | null> = ref(null);
const view: Ref<HTMLElement | null> = ref(null);
const score = ref(0.1);
const animationId = ref(0);
const baseUrl = ref(import.meta.env.BASE_URL);

const reactiveData = reactive({
    leftOn: false,
    rightOn: false,
    //投降
    surrender: false,
    nosePos: {
        x: 0,
        y: 0,
    }
})

watch(() => reactiveData.leftOn, () => {
    watchMethod()
}, {
    deep: true
})

const watchMethod = () => {
    if (reactiveData.leftOn || reactiveData.rightOn) {
        ElMessage.success(`你举起了${reactiveData.leftOn ? '左' : '右'}手`)
    }
    if (reactiveData.leftOn && reactiveData.rightOn) {
        ElMessage.success(`投降`)
    }
}

watch(() => reactiveData.rightOn, () => {
    watchMethod()
}, {
    deep: true
})

const trigger = () => {
    reactiveData.surrender = false;
    if (reactiveData.leftOn && reactiveData.rightOn) {
        reactiveData.surrender = true
    }
}

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
                if (poses.length > 0)
                    //只给第一个画点
                    for (let i = 0; i < 1; i += 1) {
                        let noseHeight = 0;
                        for (let j = 0; j < poses[i].pose.keypoints.length; j += 1) {
                            let keypoint = poses[i].pose.keypoints[j];
                            if (keypoint.score > score.value) {
                                let { x, y } = keypoint.position;
                                ctx.beginPath();
                                ctx.arc(x, y, 10, 0, 2 * Math.PI);
                                if (keypoint.part.includes('Eye')) {
                                    ctx.fillStyle = `rgba(${(x * 100) % 255},${(y * 100) % 255},${(x * 100) % 255
                                        },${x % 1})`;
                                }
                                else if (keypoint.part.includes('nose')) {
                                    ctx.fillStyle = `blue`;
                                    noseHeight = y;

                                    reactiveData.nosePos = {
                                        x, y
                                    }
                                }
                                else {
                                    ctx.fillStyle = 'white';
                                }
                                if (keypoint.part.includes('leftWrist')) {

                                    if (y < noseHeight + 50) {
                                        reactiveData.leftOn = true;
                                        trigger()

                                    } else if (y > noseHeight - 50) {
                                        reactiveData.leftOn = false;
                                        trigger()

                                    }
                                }
                                if (keypoint.part.includes('rightWrist')) {

                                    if (y < noseHeight + 50) {
                                        reactiveData.rightOn = true;
                                        trigger()


                                    } else if (y > noseHeight - 50) {
                                        reactiveData.rightOn = false;
                                        trigger()

                                    }
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


<style lang="scss" setup>
.el-popper.is-customized {
    /* Set padding to ensure the height is 32px */
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    right: 0;
}
</style>