<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <header class="bg-white sticky top-0 z-10">
      <div class="container mx-auto max-w-7xl">
        <nav>
          <div class="flex items-center justify-between p-6">
            <nuxt-link to="/" class="inline-block p-3 text-2xl font-semibold">
              {{ $t("brand") }}
            </nuxt-link>
            <ul class="flex items-center gap-2">
              <li v-for="locale in locales" :key="locale.code">
                <button
                  @click="switchLocale(locale.code)"
                  class="
                    inline-flex
                    px-5
                    py-3
                    text-base
                    font-medium
                    text-center
                    transition
                    duration-500
                    ease-in-out
                    rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                  "
                  :class="currentLocale === locale.code ? isActive : ''"
                >
                  <img :src="locale.image" class="h-6 w-6" :alt="locale.text" />
                  <span class="ml-2">{{ locale.text }}</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main class="flex-1 overflow-y-auto">
      <Nuxt class="container mx-auto max-w-7xl" />
    </main>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
  data() {
    return {
      currentLocale: this.$i18n.locale,
      locales: [
        {
          code: "pt-br",
          text: "Brazil",
          image: require("~/assets/images/flags/br.svg"),
        },
        {
          code: "en",
          text: "English",
          image: require("~/assets/images/flags/us.svg"),
        },
      ],
    };
  },
  computed: {
    isActive() {
      return "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";
    },
  },
  methods: {
    switchLocale(locale) {
      this.currentLocale = locale;
      this.$i18n.setLocale(locale);
    },
  },
};
</script>