<script lang="ts" setup>
import { h } from 'vue';

import { useVtk } from '@/script/composition';

useVtk()

</script>

<script lang="ts">
export default {
    render() {
        return h('div', { class: 'view' })
    }
}

</script>