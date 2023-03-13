<template>
  <div class="view">
    <h2>挤压和拉伸</h2>
    <h3>Squash and stretch</h3>

    <div class="rule-1">
      <article class="principle one">
        <div class="shape">挤压拉伸</div>
        <div class="surface"></div>
      </article>
    </div>

    <h2>预备动作</h2>
    <h3>Anticipation</h3>

    <div class="rule-2">
      <article class="principle two">
        <div class="shape">预备动作</div>
        <div class="surface"></div>
      </article>
    </div>

    <h2>演出布局</h2>
    <h3>Staging</h3>

    <div class="rule-3">
      <article class="principle three">
        <div class="shape a">演</div>
        <div class="shape b">出</div>
        <div class="shape c">布局</div>
      </article>
    </div>

    <h2>连续运动和姿态对应</h2>
    <h3>Straight-Ahead Action and Pose-to-Pose</h3>
    <div class="rule-4">
      <article class="principle four">
        <div class="shape a"></div>
        <div class="shape b"></div>
      </article>
    </div>

    <h2>跟随和重叠动作</h2>
    <h3>Follow Through and Overlapping Action</h3>
    <div class="rule-5">
      <article class="principle five">
        <div class="shape-container">
          <div class="shape"></div>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.view {
  background-color: #998877;
  padding: 5em;
  height: fit-content;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 30% 30% 40%;
  grid-row-gap: 200px;
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
      transform-origin: 20% 7em;
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
      width: 100%;
      height: 100vh;
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
}
</style>
