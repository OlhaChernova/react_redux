import type { RoutePage } from "./types";
import Home from "pages/Home/Home";
import Lesson17 from "lessons/Lesson17/Lesson17";
import RandomJokes from "components/RandomJokes/RandomJokes";
import Homework17 from "homeworks/Homework17/Homework17";

export const routesData: RoutePage[] = [
  { path: "/", element: <Home /> },
  { path: "/lesson17", element: <Lesson17 /> },
  { path: "/homework17", element: <Homework17 /> },
  { path: "/lesson18", element: <RandomJokes /> },
  { path: "*", element: "Page not found" },
];
