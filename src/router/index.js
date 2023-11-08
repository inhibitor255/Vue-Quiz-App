import { createRouter, createWebHistory } from "vue-router";
import QuizView from "../views/QuizView.vue";
import QuizRoomView from "../views/QuizRoomView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "quiz",
      path: "/",
      component: QuizView,
    },
    {
      name: "quiz-room",
      path: "/quiz-room/:id",
      component: QuizRoomView,
    },
  ],
});

export default router;
