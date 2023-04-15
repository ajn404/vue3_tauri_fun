<template>
  <el-autocomplete v-model="key" :fetch-suggestions="querySearch"
    class="search-input sticky top-0 block z-50 opacity-20 w-1/2" clearable placeholder="搜索ctr+k" ref="search"
    @select="handleSelect">
    <template #default="{ item }">
      <div class="value text-purple-300">{{ item.name }}</div>
      <span class="des">{{ item.path }}</span>
    </template>
  </el-autocomplete>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref, reactive } from 'vue';
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
      suggestLinks.name.toLowerCase().trim().indexOf(queryString.toLowerCase().trim()) !== -1
    );
  };
};
const store = useStore();
onMounted(() => {
  if (search.value && store.menu) {
    search.value.focus();
  }

  addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'k' && search.value) {
      search.value.focus();
    }
  });
});

router.afterEach((to, from) => {
  if (search.value && store.menu) {
    search.value.focus();
    key.value = to.name?.toString() || '';
  }
});
</script>