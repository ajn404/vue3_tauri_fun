<template>
  <div class="view">
    <h3>Squash and stretch</h3>

    <div class="rule-1">
      <article class="principle one">
        <div class="shape">挤压拉伸</div>
        <div class="surface"></div>
      </article>
    </div>

    <h3>Anticipation</h3>

    <div class="rule-2">
      <article class="principle two">
        <div class="shape">预备动作</div>
        <div class="surface"></div>
      </article>
    </div>

    <h3>Staging</h3>

    <div class="rule-3">
      <article class="principle three">
        <div class="shape a">演</div>
        <div class="shape b">出</div>
        <div class="shape c">布局</div>
      </article>
    </div>

    <h3>Straight-Ahead Action and Pose-to-Pose</h3>
    <div class="rule-4">
      <article class="principle four">
        <div class="shape a">连续运动和</div>
        <div class="shape b">姿态对应</div>
      </article>
    </div>

    <h3>Follow Through and Overlapping Action</h3>
    <div class="rule-5">
      <article class="principle five">
        <div class="shape-container">
          <div class="shape">跟随和重叠动作</div>
        </div>
      </article>
    </div>

    <h3>Slow in and Slow out</h3>
    <div class="rule-6">
      <article class="principle six">
        <div class="shape a">缓入缓出</div>
      </article>
    </div>

    <h3>Arc</h3>

    <div class="rule-7">
      <article class="principle sevenb">
        <div class="shape a">弧</div>
        <div class="shape b">线</div>
      </article>
    </div>

    <h3>Secondary Action</h3>
    <div class="rule-8">
      <article class="principle eight">
        <div class="shape a">次要</div>
        <div class="shape b">动</div>
        <div class="shape c">作</div>
      </article>
    </div>

    <h3>Timing</h3>
    <div class="rule-9">
      <article class="principle nine">
        <div class="shape a">时间</div>
        <div class="shape b">节奏</div>
      </article>
    </div>

    <h3>Exaggeration</h3>
    <div class="rule-10">
      <article class="principle ten">
        <div class="shape">夸张手法</div>
      </article>
    </div>

    <h4>Appeal</h4>
    <div class="rule-12">
      <Appeal>
        <template v-slot:four> 吸引力 </template>
      </Appeal>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.view {
  background-color: #998877;
  padding: 5em;
  height: max-content;
  padding-bottom: 20em;
  display: grid;
  box-sizing: content-box;
  grid-template-columns: 30% 70%;
  grid-row-gap: 300px;
  .shape {
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;
    background-color: hsla(random(365), 60%, 60%, 1);
  }
  .rule-1 {
    color: #fff;
    .one .shape {
      animation: one 4s infinite ease-out;
    }

    .one .surface {
      background: #000;
      height: 10em;
      width: 1em;
      position: absolute;
      top: calc(20% - 4em);
      left: calc(20% + 10em);
    }

    @keyframes one {
      0%,
      15% {
        opacity: 0;
      }
      15%,
      25% {
        transform: none;
        animation-timing-function: cubic-bezier(1, -1.92, 0.95, 0.89);
        width: 4em;
        height: 4em;
        top: calc(20% - 2em);
        left: calc(20% - 2em);
        opacity: 1;
      }
      35%,
      45% {
        transform: translateX(8em);
        height: 6em;
        width: 2em;
        top: calc(20% - 3em);
        animation-timing-function: linear;
        opacity: 1;
      }
      70%,
      100% {
        transform: translateX(8em) translateY(5em);
        height: 6em;
        width: 2em;
        top: calc(20% - 3em);
        opacity: 0;
      }
    }

    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(20% - 2em);
      left: calc(20% - 2em);
    }
  }

  .rule-2 {
    .two .shape {
      animation: two 5s infinite ease-out;
      transform-origin: 50% 7em;
    }

    .two .surface {
      background: #000;
      width: 8em;
      height: 1em;
      position: absolute;
      top: calc(20% + 4em);
      left: calc(20% - 3em);
    }

    @keyframes two {
      0%,
      15% {
        opacity: 0;
        transform: none;
      }
      15%,
      25% {
        opacity: 1;
        transform: none;
        animation-timing-function: cubic-bezier(0.5, 0.05, 0.91, 0.47);
      }
      28%,
      38% {
        transform: translateX(-2em);
      }
      40%,
      45% {
        transform: translateX(-4em);
      }
      20%,
      52% {
        transform: translateX(-4em) rotateZ(-20deg);
      }
      70%,
      75% {
        transform: translateX(-4em) rotateZ(-10deg);
      }
      78% {
        transform: translateX(-4em) rotateZ(-24deg);
        opacity: 1;
      }
      86%,
      100% {
        transform: translateX(-6em) translateY(4em) rotateZ(-90deg);
        opacity: 0;
      }
    }
    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(20% - 2em);
      left: calc(20% - 2em);
    }
  }

  .rule-3 {
    .three .shape.a {
      transform: translateX(-12em);
    }

    .three .shape.c {
      transform: translateX(12em);
    }

    .three .shape.b {
      animation: three 5s infinite ease-out;
      transform-origin: 3em 0em;
    }

    .three .shape.a,
    .three .shape.c {
      animation: threeb 5s infinite linear;
    }

    @keyframes three {
      0%,
      10% {
        transform: none;
        animation-timing-function: cubic-bezier(0.57, -0.5, 0.43, 1.53);
      }
      26%,
      30% {
        transform: rotateZ(-40deg);
      }
      32.5% {
        transform: rotateZ(-38deg);
      }
      35% {
        transform: rotateZ(-42deg);
      }
      37.5% {
        transform: rotateZ(-38deg);
      }
      40% {
        transform: rotateZ(-40deg);
      }
      42.5% {
        transform: rotateZ(-38deg);
      }
      45% {
        transform: rotateZ(-42deg);
      }
      47.5% {
        transform: rotateZ(-38deg);
        animation-timing-function: cubic-bezier(0.57, -0.5, 0.43, 1.53);
      }
      58%,
      100% {
        transform: none;
      }
    }

    @keyframes threeb {
      0%,
      20% {
        filter: none;
      }
      40%,
      20% {
        filter: blur(5px);
      }
      65%,
      100% {
        filter: none;
      }
    }

    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(20% - 2em);
      left: calc(20% - 2em);
    }
  }

  .rule-4 {
    .four .shape.a {
      left: calc(20% - 8em);
      animation: four 6s infinite cubic-bezier(0.57, -0.5, 0.43, 1.53);
    }

    .four .shape.b {
      left: calc(20% + 8em);
      animation: four 6s infinite steps(1);
    }

    @keyframes four {
      0%,
      10% {
        transform: none;
      }
      26%,
      30% {
        transform: rotateZ(-45deg) scale(1.2);
      }
      40% {
        transform: rotateZ(-45deg) translate(2em, -2em) scale(1.5);
      }
      20%,
      75% {
        transform: rotateZ(-45deg) scale(1.1);
      }
      90%,
      100% {
        transform: none;
      }
    }

    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(20% - 2em);
      left: calc(20% - 2em);
    }
  }

  .rule-5 {
    .five .shape {
      animation: five 4s infinite cubic-bezier(0.64, -0.36, 0.1, 1);
      position: relative;
      left: auto;
      top: auto;
    }

    .five .shape-container {
      animation: five-container 4s infinite cubic-bezier(0.64, -0.36, 0.1, 2);
      position: absolute;
      left: calc(20% - 4em);
      top: calc(20% - 4em);
    }

    @keyframes five {
      0%,
      15% {
        opacity: 0;
        transform: translateX(-12em);
      }
      15%,
      25% {
        transform: translateX(-12em);
        opacity: 1;
      }
      85%,
      90% {
        transform: translateX(12em);
        opacity: 1;
      }
      100% {
        transform: translateX(12em);
        opacity: 0;
      }
    }

    @keyframes five-container {
      0%,
      35% {
        transform: none;
      }
      20%,
      60% {
        transform: skewX(20deg);
      }
      90%,
      100% {
        transform: none;
      }
    }
    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(20% - 2em);
      left: calc(20% - 2em);
    }
  }

  .rule-6 {
    .shape {
      //   animation: six 3s infinite cubic-bezier(0.5, 0, 0.5, 1);
      animation: six 3s infinite cubic-bezier(0.7, 0, 0.7, 1);
    }

    @keyframes six {
      0%,
      5% {
        transform: translate(-12em);
      }
      45%,
      55% {
        transform: translate(12em);
      }
      95%,
      100% {
        transform: translate(-12em);
      }
    }

    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(20% - 2em);
      left: calc(20% - 2em);
    }
  }

  .rule-7 {
    .sevenb .shape.a {
      animation: sevenb 3s infinite linear;
      top: calc(50% - 2em);
      left: calc(50% - 9em);
      transform-origin: 10em 50%;
    }
    .sevenb .shape.b {
      animation: sevenb 6s infinite linear reverse;
      background-color: hsla(random(365), 60%, 60%, 1);
      width: 2em;
      height: 2em;
      left: calc(50% - 1em);
      top: calc(50% - 1em);
    }

    @keyframes sevenb {
      100% {
        transform: rotateZ(360deg);
      }
    }

    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(50% - 2em);
      left: calc(50% - 2em);
    }
  }

  .rule-8 {
    .eight .shape.a {
      transform: translateX(-6em);
      animation: eight-shape-a 4s cubic-bezier(0.57, -0.5, 0.43, 1.53) infinite;
    }
    .eight .shape.b {
      top: calc(50% + 6em);
      opacity: 0;
      animation: eight-shape-b 4s linear infinite;
    }
    .eight .shape.c {
      transform: translateX(6em);
      animation: eight-shape-c 4s cubic-bezier(0.57, -0.5, 0.43, 1.53) infinite;
    }

    @keyframes eight-shape-a {
      0%,
      50% {
        transform: translateX(-5.5em);
      }
      70%,
      100% {
        transform: translateX(-10em);
      }
    }

    @keyframes eight-shape-b {
      0% {
        transform: none;
      }
      20%,
      30% {
        transform: translateY(-1.5em);
        opacity: 1;
        animation-timing-function: cubic-bezier(0.57, -0.5, 0.43, 1.53);
      }
      32% {
        transform: translateY(-1.25em);
        opacity: 1;
      }
      34% {
        transform: translateY(-1.75em);
        opacity: 1;
      }
      36%,
      38% {
        transform: translateY(-1.25em);
        opacity: 1;
      }
      42%,
      60% {
        transform: translateY(-1.5em);
        opacity: 1;
      }
      75%,
      100% {
        transform: translateY(-8em) rotate(180deg);
        opacity: 1;
      }
    }

    @keyframes eight-shape-c {
      0%,
      50% {
        transform: translateX(5.5em);
      }
      70%,
      100% {
        transform: translateX(10em);
      }
    }

    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(50% - 2em);
      left: calc(50% - 2em);
    }
  }

  .rule-9 {
    .nine .shape.a {
      animation: nine 4s infinite cubic-bezier(1, 0, 0.67, 1.21);
      left: calc(50% - 12em);
      transform-origin: 100% 6em;
    }
    .nine .shape.b {
      animation: nine 2s infinite cubic-bezier(1, -1, 0, 2);
      left: calc(50% + 2em);
      transform-origin: 100% 100%;
    }

    @keyframes nine {
      0%,
      10% {
        transform: translateX(0);
      }
      40%,
      60% {
        transform: rotateZ(90deg);
      }
      90%,
      100% {
        transform: translateX(0);
      }
    }
    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(50% - 2em);
      left: calc(50% - 2em);
    }
  }

  .rule-10 {
    .ten .shape {
      animation: ten 4s infinite linear;
      transform-origin: 50% 8em;
      top: calc(50% - 6em);
    }

    @keyframes ten {
      0%,
      10% {
        transform: none;
        animation-timing-function: cubic-bezier(0.87, -1.05, 0.66, 1.31);
      }
      40% {
        transform: rotateZ(-45deg) scale(2);
        animation-timing-function: cubic-bezier(0.16, 0.54, 0, 1.38);
      }
      70%,
      100% {
        transform: rotateZ(360deg) scale(1);
      }
    }

    .principle {
      position: relative;
    }

    .shape {
      background-color: hsla(random(365), 60%, 60%, 1);
      border: 1em solid #fff;
      width: 4em;
      height: 4em;
      position: absolute;
      top: calc(50% - 2em);
      left: calc(50% - 2em);
    }
  }

  .rule-12 {
    height: fit-content;
  }
}
</style>
