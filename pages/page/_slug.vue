<template>
  <v-container>
    <v-card :color="'red'" flat>
      <!-- <v-card outlined> -->
      <v-row>
        <v-col :class="{ 'page-border': !$vuetify.breakpoint.mobile }">
          <v-card-text class="title_color">
            {{ page.title }}
          </v-card-text>
          <v-card-text>
            <nuxt-content :document="page" />
          </v-card-text>
          <v-spacer></v-spacer>

          <v-btn
            v-if="$vuetify.breakpoint.smAndUp"
            class="btn-link"
            text
            :to="'/'"
          >
            <v-icon left> mdi-arrow-left </v-icon>
            Back
          </v-btn>
        </v-col>

        <v-col cols="auto" md="6" lg="6" sm="12" xs="12">
          <v-card :color="'red'" flat height="620px">
            <div
              v-scroll="onScroll"
              :class="{ scroller: $vuetify.breakpoint.mdAndUp }"
            >
              <!-- display all videos if the exist -->
              <div v-if="page.video">
                <v-col v-for="(video, index) in page.video" :key="`${index}`">
                  <Video :video="video.video_id"></Video>
                  <v-card-text>
                    <div>Video Description text not done yet</div>
                  </v-card-text>
                </v-col>
              </div>

              <v-col v-for="(post, index) in page.images" :key="`${index}`">
                <div v-if="page.img">
                  <expandable-image
                    class="image"
                    :src="getImg(post.img)"
                    :alt="altImage"
                  ></expandable-image>
                  <v-card-text>
                    <div class="description">{{ post.description }}</div>
                  </v-card-text>
                  <v-divider></v-divider>
                </div>
              </v-col>

              <div v-if="page.soundcloud">
                <v-col
                  v-for="(post, index) in page.soundcloud"
                  :key="`${index}`"
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

              <v-divider></v-divider>
            </div>

            <!-- <v-card-text>
              <v-list>
                <div v-for="(post, index) in 4" :key="`${index}`">
                  <v-list-tile>
                    <v-list-tile-content>
                      <div>{{ index }}</div>
                    </v-list-tile-content>
                  </v-list-tile>
                </div>
              </v-list>
            </v-card-text> -->
          </v-card>

          <v-btn
            v-if="!$vuetify.breakpoint.smAndUp"
            depressed
            class="btn-link"
            text
            :to="'/'"
          >
            <v-icon left> mdi-arrow-left </v-icon>
            Back
          </v-btn>
          <!-- display all audio link if the exist -->
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-list-item>
          <v-list-item-content> -->
        <!-- back button -->
        <!-- <v-list-item-title class="title_color"> -->
        <!-- <nuxt-link :to="'/'"> -->

        <!-- </v-list-item-title> -->

        <!-- <v-btn
              v-if="showBtn"
              color="primary"
              fab
              large
              dark
              fixed
              bottom
              right
              @click="scrollTo('table')"
            >
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn> -->
        <!-- </v-list-item-content>
        </v-list-item> -->
      </v-row>
    </v-card>
  </v-container>
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
    showBtn: false,
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

    getPos(id) {
      try {
        return this.$refs[id][0].offsetTop
      } catch (e) {
        return 0
      }
    },
    scrollTo(id) {
      try {
        window.scrollTo({
          top: this.getPos(id) + 100,
          behavior: 'smooth',
        })
      } catch (e) {
        console.log('Error scrollTo', e)
      }
    },
    onScroll() {
      // const topSection = this.page.sections[0].id
      // this.showBtn = window.scrollY > this.getPos(topSection)
    },
  },
}
</script>
<style>
.expandable-image {
  transition: 1.6s opacity;
}

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

.btn-link a {
  text-decoration: none;
}

a {
  text-decoration: none;
}

.v-btn:not(.v-btn--round).v-size--default {
  text-decoration: none;
}

.title_color {
  color: #1fb0ff;
  font-size: xx-large;
  font-weight: bold;
}

image {
  width: 195%;
  height: 300px;
}

html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.v-card {
  display: flex !important;
  flex-direction: column;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: #fff7fd;
}

.v-card-text {
  background-color: #fff7fd;
}

.description {
  /* padding: 5px;
  color: grey;
  font-size: 16px; */
  padding: 0px 67px -1px 0px;
  /* font-family: 'Alte Haas Grotesk 700'; */
  font-size: 14px;
}

.scroller {
  flex-grow: 1;
  overflow: auto;
  /* overflow: hidden !important; */
}

.page-border {
  border-right-style: outset;
  border-color: #99d6f7;
}

::-webkit-scrollbar {
  width: 1em;
  background: #fff7fd;
  display: inline !important;
}
</style>
