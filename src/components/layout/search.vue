<template>
    <el-autocomplete v-model="key" :fetch-suggestions="querySearch"
        class="search-input fixed top-1 block z-50 opacity-50 translate-x-1/2 " clearable placeholder="搜索ctr+k" ref="search"
        @select="handleSelect">
        <template #default="{ item }">
            <div class="value text-purple-300">{{ item.name }}</div>
            <span class="des">{{ item.path }}</span>
        </template>
    </el-autocomplete>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref, reactive, onBeforeUnmount } from 'vue';
import type {
    AutocompleteFetchSuggestionsCallback,
    AutocompleteInstance,
} from 'element-plus';
import { autoRoutes, type autoRoute } from '@/router';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores';

const handleSelect = async (item: any) => {
    routeClick(item);
};

const routes = reactive(autoRoutes);
const router = useRouter();
const key = ref('');
const search: Ref<null | AutocompleteInstance> = ref(null);
const routeClick = async (route: autoRoute) => {
    await router.push({
        name: route.name,
        path: route.path,
    });
    key.value = route.name;
};
const querySearch = (
    queryString: string,
    cb: AutocompleteFetchSuggestionsCallback
) => {
    const results = queryString
        ? routes.filter(createFilter(queryString))
        : routes;
    cb(results);
};

const createFilter = (queryString: string) => {
    return (suggestLinks: autoRoute) => {
        return (
            suggestLinks.path
                .toLowerCase()
                .trim()
                .indexOf(queryString.toLowerCase().trim()) !== -1
        );
    };
};
const store = useStore();
const keydown = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.key === 'Meta') && e.key === 'k' && search.value) {
        search.value.focus();
    }
}
onMounted(() => {
    if (search.value && store.menu) {
        search.value.focus();
    }
    addEventListener('keydown', keydown);
});

onBeforeUnmount(() => {
    removeEventListener('keydown', keydown)
}),

    router.afterEach((to, from) => {
        if (search.value && store.menu) {
            search.value.focus();
            key.value = to.name?.toString() || '';
        }
    });
</script>

<style lang="scss" scoped>
:deep(.el-autocomplete-suggestion) {
    width: 100vw !important;

    li {
        display: flex !important;
        justify-content: space-between !important;
    }
}
</style>
