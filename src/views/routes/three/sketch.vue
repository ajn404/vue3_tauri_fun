<template>
    <div ref="container"></div>
</template>

<script lang="ts" setup>
import Sketch from "@/script/threeSketch";
import { ref, nextTick } from "vue";
const container = ref(null);

let sketch = new Sketch();

nextTick(() => {
    const options = {
        container: container.value
    };
    if(options.container)
    sketch.init(options);

})
</script>