import {createRouter, createWebHistory} from 'vue-router'
// import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue';
import New from '../views/New.vue';
import Show from '../views/Show.vue';
import Edit from '../views/Edit.vue';

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/',
        redirect: '/tasks'
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: Tasks
    },
    {
        path: '/tasks/new',
        name: 'new-task',
        component: New
    },
    {
        path: '/tasks/:id',
        name: 'show',
        component: Show
    },
    {
        path: '/tasks/:id/edit',
        name: 'edit',
        component: Edit
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active',
    routes
})

export default router
