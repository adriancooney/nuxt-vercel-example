console.log("NUXT CONFIG", process.env);

export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  runtimeConfig: {
    POSTGRES_URL: process.env.POSTGRES_URL,
  },
});
