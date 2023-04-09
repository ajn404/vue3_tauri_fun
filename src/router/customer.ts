

export const customRoute = [
    {
        path: '/',
        redirect: {
            name: 'index',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/404/notFound.vue'),
    },

]