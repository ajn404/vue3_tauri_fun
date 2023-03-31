<template>
  <div class="view">


    <article>

      <figure>
        <blockquote cite="https://animxyz.com/">
          <p>
            AnimXYZ uses CSS Variables under the hood to modify a core @keyframes
            animation. These xyz-variables determine the timing and the values of
            the element properties that will be animated such as opacity and
            transform. Each value will be animated to and from depending on whether
            the element is animating in or out.
          </p>
          <p>
            Instead of having to write keyframes for every unique animation, you
            just tell the one animation what to do. Here is a simplified version of
            whats going on behind the scenes:
          </p>
        </blockquote>
        <figcaption>—docs editor<cite>animxyz</cite></figcaption>
      </figure>

    </article>

    <footer></footer>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.view {
  background-color: #fff;
  align-content: center;
  display: grid;
  place-items: center;

  blockquote {
    margin: 0;

    p {
      padding: 15px;
      background: #eee;
      border-radius: 50px;
      margin: 2em 0 ;
      &::before {
        content: '\201C';
      }

      &::after {
        content: '\201D';
      }
    }


  }

  figcaption {
    margin: 2em;
    text-align: right;
  }



}
</style>
