<template>
  <v-container align-center fill-height>
    <v-row>
      <v-col class="text-sm-left text_color" column>
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
            <!-- {{ post }} -->
            <v-hover>
              <template #default="{ hover }">
                <v-card min-height="240" fill-height class="d-flex flex-column">
                  <!-- image -->
                  <div v-if="post.img">
                    <v-img :src="getImg(post.img)" :alt="altImage" />
                  </div>
                  <v-card-title>{{ post.title }}</v-card-title>
                  <v-card-subtitle class="flex-grow-1">
                    {{ post.description }}
                  </v-card-subtitle>
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#036358">
                      <v-btn :to="post.path" nuxt>More info </v-btn>
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
  },
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.text_color {
  /* font-size: 16px; */
  color: #1361de;
  /* font-weight: 600; */
}

.nuxt-content {
  display: flex;
}

.nuxt-content p {
  padding: 0px 0px 0px 10px;
}
</style>
