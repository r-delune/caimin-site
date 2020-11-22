<template>
  <div :id="page.id" :class="'page__' + page.id">
    hello
    <!-- <nuxt-content :document="page" /> -->
    {{ page }}
    <article v-if="page">
      <nuxt-content class="text-gray-800" :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'Page',
  // Dynamically create this page based on contents on component folder
  async asyncData({ $content, params, error }) {
    const slug = params.page
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({
          statusCode: 404,
          message: 'Page ' + slug + '' + err.message,
        })
      })
    return {
      page,
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: this.$vuetify.breakpoint.mobile ? 'mobile-font' : 'normal-font',
      },
    }
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
