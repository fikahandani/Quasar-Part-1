
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'custom', component: () => import('pages/Custom.vue') },
      { path: 'custom2', component: () => import('pages/Custom2.vue') },
      { path: 'slider', component: () => import('pages/Slider.vue') },
      { path: 'range', component: () => import('pages/Range.vue') },
      { path: 'timepicker', component: () => import('pages/Timepicker.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
