<template>
  <article class="principle twelve">
    <div class="shape">
      <div class="container">
        <span class="item one"></span>
        <span class="item two"></span>
        <span class="item three"></span>
        <span class="item four"><slot name="four"> </slot> </span>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.twelve .shape {
  background: none;
  border: none;
  perspective: 400px;
  perspective-origin: center;
}

.twelve .shape .container {
  animation: show-container 8s infinite cubic-bezier(0.6, -0.44, 0.37, 1.44);
  transform-style: preserve-3d;
  width: 100px;
  height: 100px;
  border: 1em solid #fff;
  background: #2d97db;
  position: relative;
}

.twelve .item {
  background-color: #1f7bb6;
  position: absolute;
}

.twelve .item.one {
  animation: show-text 8s 0.1s infinite ease-out;
  height: 6%;
  width: 30%;
  top: 15%;
  left: 25%;
}

.twelve .item.two {
  animation: show-text 8s 0.2s infinite ease-out;
  height: 6%;
  width: 20%;
  top: 30%;
  left: 25%;
}

.twelve .item.three {
  animation: show-text 8s 0.3s infinite ease-out;
  height: 6%;
  width: 50%;
  top: 45%;
  left: 25%;
}

.twelve .item.four {
  animation: show-button 8s infinite cubic-bezier(0.64, -0.36, 0.1, 1.43);
  height: 20%;
  width: 40%;
  top: 65%;
  left: 30%;
}

@keyframes show-container {
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  10% {
    opacity: 1;
    transform: none;
    width: 100px;
    height: 100px;
  }
  15%,
  90% {
    width: 300px;
    height: 300px;
    transform: translate(-100px, -100px);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotateX(-90deg);
    width: 100px;
    height: 100px;
  }
}

@keyframes show-text {
  0%,
  15% {
    transform: translateY(1em);
    opacity: 0;
  }
  20%,
  85% {
    opacity: 1;
    transform: none;
  }
  88%,
  100% {
    opacity: 0;
    transform: translateY(-1em);
    animation-timing-function: cubic-bezier(0.64, -0.36, 0.1, 1.43);
  }
}

@keyframes show-button {
  0%,
  25% {
    transform: scale(0);
    opacity: 0;
  }
  35%,
  80% {
    transform: none;
    opacity: 1;
  }
  90%,
  100% {
    opacity: 0;
    transform: scale(0);
  }
}

.principle {
  position: relative;
}

.shape {
  background: #2d97db;
  border: 1em solid #fff;
  width: 400px;
  display: block;
  height: 400px;
  position: absolute;
  top: calc(20% - 2em);
  left: calc(50% - 2em);
}
</style>
