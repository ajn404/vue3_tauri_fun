<template>
  <div class="view">
    <canvas ref="canvas" width="640" height="480"></canvas>
    <video ref="video" width="640" height="480" class="hidden"></video>
  </div>
</template>

<script lang="ts" setup>
import * as ml5 from 'ml5';
import { onMounted, ref, type Ref } from 'vue';

//这个包着实有点大
const canvas: Ref<HTMLCanvasElement | null> = ref(null);
const video: Ref<HTMLVideoElement | null> = ref(null);

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
    const ctx: CanvasRenderingContext2D | null = canvas.value.getContext('2d');
    let poses: any[] = [];
    function drawCameraIntoCanvas() {
      if (video.value && ctx) ctx.drawImage(video.value, 0, 0, 640, 480);
      drawKeypoints();
      drawSkeleton();

      requestAnimationFrame(drawCameraIntoCanvas);
    }
    drawCameraIntoCanvas();
    const poseNet = ml5.poseNet(video.value, modelReady);
    poseNet.on('pose', gotPoses);

    function gotPoses(results: any[]) {
      poses = results;
    }

    function modelReady() {
      poseNet.multiPose(video.value);
    }
    function drawKeypoints() {
      if (ctx) {
        for (let i = 0; i < poses.length; i += 1) {
          for (let j = 0; j < poses[i].pose.keypoints.length; j += 1) {
            let keypoint = poses[i].pose.keypoints[j];
            if (keypoint.score > 0.2) {
              ctx.beginPath();
              ctx.arc(
                keypoint.position.x,
                keypoint.position.y,
                10,
                0,
                2 * Math.PI
              );
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
