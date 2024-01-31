import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from "../views/ProductView.vue";
import ShoppingCartView from "../views/ShoppingCartView.vue";
import SuccessView from "../views/SuccessView.vue";
import ChoosePaymentView from "../views/ChoosePaymentView.vue";
import TransferView from "../views/TransferView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/product/:id",
    props: true,
    name: "product",
    component: ProductView,
  },

  {
    path: "/cart",
    name: "shopping",
    component: ShoppingCartView,
  },

  {
    path: "/success",
    name: "success",
    component: SuccessView,
  },
  {
    path: "/payment",
    name: "payment",
    component: ChoosePaymentView,
  },
  {
    path: "/transfer",
    name: "transfer",
    component: TransferView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
