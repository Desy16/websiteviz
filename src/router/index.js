import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'

const NAME_APP = 'WEBSITEVIZ';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home - ' + NAME_APP
        }
    },
    {
        path: '/nbcsport/degree',
        name: 'Degree',
        // route level code-splitting
        // this generates a separate chunk (nbcsport.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "degree" */ '../views/nbcsport/Degree.vue'),
        meta: {
            title: 'NbcSport degree - ' + NAME_APP
        }
    },
    {
        path: '/nbcsport/pagerank',
        name: 'PageRank',
        // route level code-splitting
        // this generates a separate chunk (nbcsport.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "pagerank" */ '../views/nbcsport/PageRank.vue'),
        meta: {
            title: 'NbcSport pagerank - ' + NAME_APP
        }
    },
    {
        path: '/nbcsport/closeness',
        name: 'closeness',
        // route level code-splitting
        // this generates a separate chunk (nbcsport.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "closeness" */ '../views/nbcsport/Closeness.vue'),
        meta: {
            title: 'NbcSport closeness - ' + NAME_APP
        }
    },
    {
        path: '/nbcsport/betweenness',
        name: 'betweenness',
        // route level code-splitting
        // this generates a separate chunk (nbcsport.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "betweenness" */ '../views/nbcsport/Betweenness.vue'),
        meta: {
            title: 'NbcSport betweenness - ' + NAME_APP
        }
    },
    {
        path: '/bbcsport',
        name: 'BbcSport',
        // route level code-splitting
        // this generates a separate chunk (bbcsport.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "bbcsport" */ '../views/bbcsport/BbcSport.vue'),
        meta: {
            title: 'BbcSport - ' + NAME_APP
        }
    },
    {
        path: '/skysport',
        name: 'SkySport',
        // route level code-splitting
        // this generates a separate chunk (skysport.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "skysport" */ '../views/skysports/SkySport.vue'),
        meta: {
            title: 'SkySport - ' + NAME_APP
        }
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/About.vue'),
        meta: {
            title: 'About - ' + NAME_APP
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.afterEach((to, from) => {
    document.title = to.meta.title;
});

export default router;
