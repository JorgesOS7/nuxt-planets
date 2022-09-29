<template>
  <section class="py-5">
    <div
      class="container px-5 py-10 mx-auto flex flex-col bg-white rounded-2xl"
    >
      <header class="pb-4">
        <div>
          <nav>
            <nuxt-link to="/" class="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span class="ml-2 text-xl">{{ $t("goBack") }}</span>
            </nuxt-link>
          </nav>
        </div>
      </header>
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg max-h-96 overflow-hidden">
          <img
            :alt="planet.slug"
            class="object-cover object-center h-full w-full"
            :src="planet.image"
          />
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-normal text-gray-900 text-4xl mb-4">
                {{ $t(planet.slug) }}
              </h2>
              <h2 class="font-light text-gray-900 text-xl">
                {{ planet.radius ?? planet.distanceFromSun }}
              </h2>
              <div class="w-12 h-0.5 bg-indigo-500 rounded mt-1"></div>
            </div>
          </div>
          <div
            class="
              sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l
              border-gray-200
              sm:border-t-0
              border-t
              mt-4
              pt-4
              sm:mt-0
              text-center
              sm:text-left
            "
          >
            <p class="leading-relaxed text-lg">
              {{ planet.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlanetPage",
  data() {
    return {
      planet: null,
    };
  },
  async asyncData({ params, error, redirect, $axios }) {
    if (!params.slug) {
      return redirect("/");
    }
    try {
      const planet = await $axios.$get(`/${params.slug}`);

      return { planet };
    } catch (err) {
      console.error(err.response);
      if (err.response) {
        const { status: statusCode, data } = err.response;
        return error({ statusCode, message: data.message });
      }
      error({ statusCode: 500, message: `An error ocurred in ${params.slug}` });
    }
  },
  head() {
    const { title, image, description, slug } = this.planet;
    return {
      title: title,
      meta: [
        { hid: "og-type", property: "og:type", content: "website" },
        { hid: "og-title", property: "og:title", content: title },
        { hid: "og-desc", property: "og:description", content: description },
        { hid: "og-image", property: "og:image", content: image },
        {
          hid: "og-url",
          property: "og:url",
          content: `https://nuxt-planets.surge.sh/planet/${slug}`,
        },
        { hid: "t-type", name: "twitter:card", content: image },
      ],
    };
  },
};
</script>