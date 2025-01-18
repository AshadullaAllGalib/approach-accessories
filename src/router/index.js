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

import PrintedLabelView from '@/views/ProductDetailsView/PrintedLabelView.vue'
import HangTagsView from '@/views/ProductDetailsView/HangTagsView.vue'
import GarmentTapeView from '@/views/ProductDetailsView/GarmentTapeView.vue'
import LeatherPatchView from '@/views/ProductDetailsView/LeatherPatchView.vue'
import HangTagStringView from '@/views/ProductDetailsView/HangTagStringView.vue'
import ThermalStickerView from '@/views/ProductDetailsView/ThermalStickerView.vue'
import WovenPatchView from '@/views/ProductDetailsView/WovenPatchView.vue'
import PhotoInlayView from '@/views/ProductDetailsView/PhotoInlayView.vue'
import BrandRollView from '@/views/ProductDetailsView/CottonPrintingLabelsView.vue'
import DrawStringView from '@/views/ProductDetailsView/DrawStringView.vue'

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
      name: 'hang-details',
      component: HangTagsView,
    },
    {
      path: '/product/satin-printing-labels',
      name: 'garment-details',
      component: GarmentTapeView,
    },
    {
      path: '/product/screen-print-label',
      name: 'leather-details',
      component: LeatherPatchView,
    },
    {
      path: '/product/hang-tag',
      name: 'hangtag-details',
      component: HangTagStringView,
    },
    {
      path: '/product/hang-tag-string',
      name: 'thermal-details',
      component: ThermalStickerView,
    },
    {
      path: '/product/sewing-thread',
      name: 'patch-details',
      component: WovenPatchView,
    },
    {
      path: '/product/poly-bag',
      name: 'photo-details',
      component: PhotoInlayView,
    },
    {
      path: '/product/gum-tape',
      name: 'brand-details',
      component: BrandRollView,
    },
    {
      path: '/product/silica-gel',
      name: 'draw-details',
      component: DrawStringView,
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
