<template>
  <div :id="page.id" :class="'page__' + page.id">
    <v-container>
      <v-card outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <!-- back button -->
            <v-list-item-title class="headline mb-1 title_color">
              <nuxt-link :to="'/'">
                <v-icon> mdi-arrow-left </v-icon>
                <v-btn text nuxt> Back </v-btn></nuxt-link
              >
            </v-list-item-title>
            <!-- page title -->
            <v-list-item-title class="headline mb-1 title_color">
              {{ page.title }}
            </v-list-item-title>
            <v-list-item-subtitle> {{ page.description }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>
        <v-row>
          <!-- main content -->
          <v-col cols="auto" md="6" lg="6" sm="12" xs="12">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-card-text>
                <nuxt-content :document="page" />
              </v-card-text>
            </div>
          </v-col>
          <v-col v-for="(post, index) in 1" :key="`${index}`" cols="6">
            <!-- image -->
            <div v-if="page.img">
              <v-img class="image" :src="getImg(page.img)" :alt="altImage" />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto" md="6" lg="6" sm="12" xs="12">
            <!-- display all audio link if the exist -->
            <v-list-item-content>
              <div v-if="page.soundcloud">
                <v-col
                  v-for="(post, index) in page.soundcloud"
                  :key="`${index}`"
                  cols="6"
                >
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    :src="post.link"
                  ></iframe>
                </v-col>
              </div>
            </v-list-item-content>
            <!-- display all videos if the exist -->
            <v-list-item-content>
              <div v-if="page.video">
                <v-col
                  v-for="(video, index) in page.video"
                  :key="`${index}`"
                  cols="6"
                >
                  <Video :video="video.video_id"></Video>
                </v-col>
              </div>
            </v-list-item-content>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Page',
  // Dynamically create this page based on contents on component folder
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'home'
    const page = await $content('page/' + slug)
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
  head() {
    return {
      htmlAttrs: {
        class: this.$vuetify.breakpoint.mobile ? 'mobile-font' : 'normal-font',
      },
    }
  },
  methods: {
    getImg(img) {
      var path = img.split('/images/').pop()
      return `/images/${path}`
    },
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

.title_color {
  color: #1361de;
  color: #1361de;
  font-size: xx-large;
  font-weight: bold;
}

image {
  width: 100%;
  height: 300px;
}
</style>
