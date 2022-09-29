<template>
  <section class="py-10">
    <div class="grid sm:grid-cols-2 gap-6" v-if="!$fetchState.pending">
      <nuxt-link
        v-for="planet in planets"
        :key="planet.slug"
        :to="`/planet/${planet.slug}`"
        class="
          group
          h-80
          flex
          items-end
          bg-gray-100
          rounded-lg
          overflow-hidden
          shadow-lg
          relative
          p-4
        "
      >
        <img
          :src="planet.image"
          loading="lazy"
          :alt="planet.slug"
          class="
            w-full
            h-full
            object-cover object-center
            absolute
            inset-0
            group-hover:scale-110
            transition
            duration-200
          "
        />

        <div
          class="
            bg-gradient-to-t
            from-gray-800
            via-transparent
            to-transparent
            opacity-50
            absolute
            inset-0
            pointer-events-none
          "
        ></div>

        <div class="flex flex-col relative">
          <span class="text-gray-300">{{
            planet.radius ?? planet.distanceFromSun
          }}</span>
          <span class="text-white text-lg lg:text-xl font-semibold">
            {{ $t(planet.slug) }}
          </span>
        </div>
      </nuxt-link>
    </div>

    <Loader v-else />
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      planets: [],
    };
  },
  async fetch() {
    this.planets = await this.$axios.$get();
  },
  head() {
    const lang = this.$i18n.locale;
    return {
      title: lang === "pt-br" ? "Nuxt Planetas" : "Nuxt Planets",
    };
  },
};
</script>
