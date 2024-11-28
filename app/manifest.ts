import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "To-Do App",
    short_name: "To-Do",
    description: "Keep track of your daily tasks with ease!",
    start_url: "https://omar-aj.github.io/todo-app",
    display: "standalone",
    background_color: "#f5f5f5",
    theme_color: "#525252",
    icons: [
      {
        src: "/favicons/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicons/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
