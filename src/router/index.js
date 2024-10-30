import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductView from '@/views/ProductView.vue'
import OperationStrengthView from '@/views/OperationStrengthView.vue'
import GalleryView from '@/views/GalleryView.vue'
import ProductionFacilityView from '@/views/ProductionFacilityView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProductDetails from '@/components/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/product/product-details',
      name: 'product-details',
      component: ProductDetails,
    },
    {
      path: '/operation-strength',
      name: 'operation-strength',
      component: OperationStrengthView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/production-facility',
      name: 'production-facility',
      component: ProductionFacilityView,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ],
})

export default router
