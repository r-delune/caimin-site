<template>
  <v-container>
    <v-row>
      <!-- main title content -->
      <v-col column>
        <nuxt-content :document="page" />
      </v-col>
      <!-- list of posts -->
      <v-container>
        <v-row>
          <v-col
            v-for="(post, $index) in posts"
            :key="`${$index}`"
            cols="auto"
            md="6"
            lg="6"
            sm="6"
            column
          >
            <!-- single post -->
            <v-hover class="my-overlay" @click.native="clickMe(post.path)">
              <template #default="{ hover }">
                <v-card :elevation="0" class="d-flex flex-column">
                  <!-- image -->
                  <div v-if="post.img">
                    <v-img
                      :max-height="'380px'"
                      :src="getImg(post.img)"
                      :alt="altImage"
                    />
                  </div>
                  <!-- overlay -->
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      class="my-overlay"
                      color="#036358"
                      @click.native="clickMe(post.path)"
                    >
                      <div class="panel-text">{{ post.title }}</div>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData({ $content }) {
    const page = await $content('main/index').fetch()
    const posts = await $content('page').fetch()
    return {
      page,
      posts,
    }
  },
  data: () => ({
    page: '',
    altImage: '',
  }),
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  methods: {
    // get the correct image path
    getImg(img) {
      var path = img.split('/images/').pop()
      return `/images/${path}`
    },
    // go to path todo: inline
    clickMe(path) {
      this.$router.push({
        path: path,
      })
    },
  },
}
</script>

<style>
.my-overlay {
  cursor: pointer;
}

.my-overlay:hover {
  cursor: pointer;
  transform: scale(1.01);
}

.nuxt-content {
  /* display: flex; */
  /* color: #5e5e5e; */
}

.panel-text {
  font-family: 'Alte Haas Grotesk 700';
  font-size: 28px;
}

.nuxt-content p {
  padding: 0px 67px -1px 0px;
}
</style>
