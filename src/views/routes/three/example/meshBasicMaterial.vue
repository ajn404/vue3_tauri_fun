<template>
    <div class="view">
        <div class="container" ref="container"></div>
        <div class="absolute left-1 w-1/5 top-0">
            <el-radio-group v-model="selectMaterial" size="large">
                <el-radio v-for="mat in slectMaterial" :key="mat" :label="mat" />
            </el-radio-group>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import { useMeshBasicMaterial, type selectMaterial } from './useMeshBasicMaterial'
const container: Ref<HTMLElement | null> = ref(null);
const selectMaterial: Ref<selectMaterial> = ref('MeshToonMaterial')
useMeshBasicMaterial(container, selectMaterial);

const slectMaterial = ['MeshBasicMaterial'
    , 'MeshLambertMaterial'
    , 'MeshMatcapMaterial'
    , 'MeshPhongMaterial'
    , 'MeshToonMaterial'
    , 'MeshStandardMaterial'
    , 'MeshPhysicalMaterial'
    , 'MeshDepthMaterial'
    , 'MeshNormalMaterial'
    , 'LineBasicMaterial'];
</script>