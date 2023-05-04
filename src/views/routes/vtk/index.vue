
<!-- <template>
    <div class="view">
        <div class="container" ref="container"></div>
    </div>
</template> -->

<script lang="ts" async setup>
import { ref, h, type Ref } from 'vue';
import { useVtk } from '@/script/composition';
const container: Ref<HTMLElement | null> = ref(null);
useVtk(container);
</script>
<script lang="ts">
export default {
    render() {
        return h('div',
            { class: 'view' },
            [h('div', {
                class: 'container',
                ref: 'container'
            })])
    }
}
</script>