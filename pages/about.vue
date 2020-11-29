<template>
  <v-container align-center fill-height>
    <v-row column wrap align-center justify="center">
      <v-col
        class="text-sm-left text_color"
        cols="12"
        xl="12"
        lg="12"
        md="12"
        sm="12"
        xs="12"
        column
      >
        <nuxt-content :document="page" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('main/about').fetch()
    return {
      page,
    }
  },
  data: () => ({
    page: '',
    altImage: '',
  }),
  methods: {
    getImg(img) {
      var path = img.split('/images/').pop()
      return `/images/${path}`
    },
  },
}
</script>

<style scoped>
.text_color {
  font-size: 16px;
  color: #1361de;
  font-weight: 600;
}
</style>
