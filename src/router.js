// router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import DashboardView from './views/DashboardView.vue';
import ProjectView from './views/ProjectsView.vue';
import TeamView from './views/TeamView.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView 
  },
  {
    path: '/projects',
    name: 'projectsView',
    component: ProjectView
  },
  {
    path: '/team',
    name: 'teamView',
    component: TeamView
  }
];

const router = new Router({
  mode: 'history',
//   base: process.env.BASE_URL,
  routes
});

export default router;
