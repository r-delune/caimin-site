<template>
  <v-row no-gutters>
    <!-- main title content -->
    <v-row
      :class="
        $vuetify.breakpoint.smAndDown ? 'mx-0 main-paragraph px-0' : 'mx-5 '
      "
    >
      <v-col
        lg="6"
        cols="auto"
        column
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'mx-0 main-paragraph pr-4'
            : 'main-paragraph pr-2 mx-0'
        "
      >
        <!-- <nuxt-content :document="page" /> -->
        {{ page.main[0].main_one }}
      </v-col>
      <v-col
        lg="6"
        cols="auto"
        column
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'mx-0 main-paragraph pt-3 pr-4'
            : 'main-paragraph  mx-0'
        "
      >
        <!-- <nuxt-content :document="page" /> -->
        {{ page.main[1].main_two }}
      </v-col>
    </v-row>
    <!-- list of posts -->
    <v-container
      fluid
      :class="$vuetify.breakpoint.smAndDown ? 'px-0' : ' px-2 mx-0'"
    >
      <v-row :class="$vuetify.breakpoint.smAndDown ? 'mx-0 px-0' : 'mx-4'">
        <v-col
          v-for="(post, $index) in posts"
          :key="`${$index}`"
          cols="auto"
          md="6"
          lg="6"
          sm="6"
          column
          :class="$vuetify.breakpoint.smAndDown ? 'mx-0 px-0' : 'mx-0'"
        >
          <!-- single post -->
          <v-hover class="my-overlay" @click.native="clickMe(post.path)">
            <template #default="{ hover }">
              <v-card :elevation="0" class="d-flex flex-column">
                <!-- image -->
                <div v-if="post.img">
                  <v-img
                    max-height="400px"
                    min-width="200px"
                    min-height="400px"
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
  /* transform: scale(1.01); */
}

.nuxt-content {
  /* display: flex; */
  /* color: #5e5e5e; */
  color: #1fb0ff;
  font-family: 'Alte Haas Grotesk';
}

.panel-text {
  font-family: 'Alte Haas Grotesk 700';
  font-size: 28px;
  color: #1fb0ff;
}

.nuxt-content p {
  /* padding: 0px 67px -1px 0px; */
  color: #1fb0ff;
  font-family: 'Alte Haas Grotesk';
  font-size: 18px;
  font-weight: 400;
}

.main-paragraph {
  color: #1fb0ff;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  line-height: 1.35em;
  font-family: 'Alte Haas Grotesk';
  font-size: 18px;
  font-weight: 400;
}
</style>
