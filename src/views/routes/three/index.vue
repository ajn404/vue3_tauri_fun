<template>
    <div class="view">
        <div class="container" ref="container">
        </div>
    </div>
</template>

<script lang="ts" setup>
import Sketch from "@/script/threeSketch";
import { ref, watch } from "vue";
const container = ref(null);
let sketch = new Sketch();
watch(
    () => container.value,
    () => {
        const options = {
            container: container.value
        };
        if (options.container) sketch.init(options);
    }
)

</script>

<style lang="scss">
.view {
    position: absolute;
    left: 0;
    top: 0;
}
</style>