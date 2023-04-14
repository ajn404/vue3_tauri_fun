import { provide } from 'vue';

export const cast_url = `${import.meta.env.BASE_URL}data/casts`;

export const setProvide = () => {
  provide('cast_url', cast_url);
};
