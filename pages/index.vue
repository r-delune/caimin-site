<template>
  <v-container>
    <v-row>
      <v-col column>
        <nuxt-content :document="page" />
      </v-col>

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
            <!-- <span class="blur-box-inner"> </span> -->

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

                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      class="my-overlay"
                      color="#036358"
                      @click.native="clickMe(post.path)"
                    >
                      <!-- {{ post }} -->
                      <div class="panel-text">{{ post.title }}</div>
                      <!-- <v-btn :to="post.path" text nuxt>{{ post.title }}</v-btn> -->
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
    getImg(img) {
      var path = img.split('/images/').pop()
      return `/images/${path}`
    },
    clickMe(path) {
      console.log('click me', path)

      console.log('going fome')
      this.$router.push({
        path: path,
      })
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 400ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.text_color {
  color: #1fb0ff;
}

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
  /* color: grey;
  font-size: 16px; */
  padding: 0px 67px -1px 0px;
  /* font-family: 'Alte Haas Grotesk 700'; */
}
</style>
