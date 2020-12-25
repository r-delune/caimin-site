<template>
  <div>
    <ul v-for="(m, index) in pages" :key="index">
      <nuxt-link :to="`/page/${m.title}`">{{ m.title }}</nuxt-link>
      <p>{{ m.page }}</p>
    </ul>

    <nuxt-content :document="page" />

    <div class="blog container mx-auto">
      <section class="grid grid-cols-3 gap-4 pt-12">
        <article
          v-for="(post, $index) in page"
          :key="`${$index}`"
          class="post max-w-sm rounded overflow-hidden shadow-lg flex flex-col"
        >
          <h3>{{ post.title }}</h3>
          <p class="text-gray-700 text-base">
            {{ post.description }}
          </p>

          <footer class="p-4">
            <nuxt-link :to="post.path" class="font-bold text-xl mb-2">
              <button :to="post.path" class="btn btn-teal">
                {{ post.id }}
              </button>
            </nuxt-link>
          </footer>
        </article>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.page || 'main/home'
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
  data: () => ({
    altImage: '',
  }),
}
</script>
