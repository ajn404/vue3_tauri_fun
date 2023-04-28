<template>
    <XyzTransition appear :xyz="`fade stagger-1 duration-10`" mode="out">
        <el-progress type="dashboard" :percentage="props.percent" :color="colors" class="fixed top-1/2 left-1/2"
            v-show="percent && percent < 100" />
    </XyzTransition>
</template>

<script lang="ts" setup>
import type { ProgressColor } from 'element-plus';
export interface Props {
    percent: number;
    colors: ProgressColor[];
}
const props = withDefaults(defineProps<Props>(), {
    colors: () => [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
    ],
});
</script>
