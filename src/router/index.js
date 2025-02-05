import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductView from '@/views/ProductView.vue'
import OperationStrengthView from '@/views/OperationStrengthView.vue'
import GalleryView from '@/views/GalleryView.vue'
import ProductionFacilityView from '@/views/ProductionFacilityView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
// import WovenDetails from '@/components/ProductDetails/WovenDetails.vue'
import WovenView from '@/views/ProductDetailsView/WovenView.vue'
import CottonPrintingLabels from '@/views/ProductDetailsView/CottonPrintingLabelsView.vue'
import StickersView from '@/views/ProductDetailsView/StickersView.vue'
import SatinPrintingView from '@/views/ProductDetailsView/SatinPrintingView.vue'
import ScreenPrintView from '@/views/ProductDetailsView/ScreenPrintView.vue'
import HangTagsView from '@/views/ProductDetailsView/HangTagsView.vue'
import HangTagStringView from '@/views/ProductDetailsView/HangTagStringView.vue'
import SewingThreadsView from '@/views/ProductDetailsView/SewingThreadsView.vue'
import PolyBagView from '@/views/ProductDetailsView/PolyBagView.vue'
import GumTapeView from '@/views/ProductDetailsView/GumTapeView.vue'
import SilicaGelView from '@/views/ProductDetailsView/SilicaGelView.vue'
import CartonView from '@/views/ProductDetailsView/CartonView.vue'

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

    // product details start
    {
      path: '/product/woven-labels',
      name: 'woven-details',
      component: WovenView,
    },
    {
      path: '/product/cotton-printing-labels',
      name: 'cotton-printed-labels',
      component: CottonPrintingLabels,
    },
    {
      path: '/product/stickers',
      name: 'stickers',
      component: StickersView,
    },
    {
      path: '/product/satin-printing-labels',
      name: 'satin-printing',
      component: SatinPrintingView,
    },
    {
      path: '/product/screen-print-label',
      name: 'screen-print',
      component: ScreenPrintView,
    },
    {
      path: '/product/hang-tag',
      name: 'hang-tag',
      component: HangTagsView,
    },
    {
      path: '/product/hang-tag-string',
      name: 'hang-tag-string',
      component: HangTagStringView,
    },
    {
      path: '/product/sewing-thread',
      name: 'sewing-threads',
      component: SewingThreadsView,
    },
    {
      path: '/product/poly-bag',
      name: 'poly-bag',
      component: PolyBagView,
    },
    {
      path: '/product/gum-tape',
      name: 'gum-tape',
      component: GumTapeView,
    },
    {
      path: '/product/silica-gel',
      name: 'silica-gel',
      component: SilicaGelView,
    },
    {
      path: '/product/carton',
      name: 'carton',
      component: CartonView,
    },
    // Product details end
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
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      // Smooth scrolling to saved position or top
      if (savedPosition) {
        window.scrollTo({ top: savedPosition.top, behavior: 'smooth' });
        resolve(savedPosition);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        resolve({ top: 0 });
      }
    });
  }
})

export default router
