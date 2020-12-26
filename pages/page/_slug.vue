<template>
  <v-container>
    <v-card :color="'red'" flat>
      <v-row>
        <!-- post text w/ border-->
        <v-col :class="{ 'page-border': $vuetify.breakpoint.mdAndUp }">
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

        <!-- page media section  -->
        <v-col cols="auto" md="6" lg="6" sm="12" xs="12">
          <v-card
            :class="{ 'fade-window': $vuetify.breakpoint.smAndUp }"
            flat
            height="620px"
          >
            <div
              id="my-window"
              :ref="'my-window'"
              :class="{ scroller: $vuetify.breakpoint.mdAndUp }"
            >
              <!-- display all videos if the exist -->
              <div v-if="page.video">
                <v-col
                  v-for="(video, index) in page.video"
                  :ref="'video' + index"
                  :key="`${index}`"
                >
                  <Video :video="video.video_id"></Video>
                  <v-card-text>
                    <div>Video Description text not done yet</div>
                  </v-card-text>
                </v-col>
              </div>

              <!-- display explandable image -->
              <v-col v-for="(post, index) in page.images" :key="`${index}`">
                <div v-if="page.img">
                  <expandable-image
                    :ref="'image' + index"
                    class="image"
                    :src="getImg(post.img)"
                    :alt="altImage"
                  ></expandable-image>

                  <div class="description">{{ post.description }}</div>

                  <v-divider></v-divider>
                </div>
              </v-col>

              <!-- display soundcloud content -->
              <div v-if="page.soundcloud">
                <v-col
                  v-for="(post, index) in page.soundcloud"
                  :key="`${index}`"
                >
                  <iframe
                    :ref="'audio' + index"
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
          </v-card>
        </v-col>
      </v-row>

      <!-- scroll button -->
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          v-if="showBtn && !invert_arrow"
          color="#1fb0ff;"
          fab
          small
          dark
          fixed
          bottom
          right
          @click="scrollTo('down')"
        >
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>

        <v-btn
          v-if="showBtn && invert_arrow"
          color="#1fb0ff;"
          fab
          small
          dark
          fixed
          bottom
          right
          @click="scrollTo('up')"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
      </div>
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
    showBtn: true,
    curr_ref: 0,
    current_pos: 0,
    invert_arrow: false,
  }),
  methods: {
    // get correct image
    getImg(img) {
      var path = img.split('/images/').pop()
      return `/images/${path}`
    },
    // scroll to correct section
    scrollTo(direction) {
      try {
        let a = this.$el.querySelector('#my-window')

        let comp
        if (this.invert_arrow === false) {
          console.log('moving down')
          comp = this.current_pos + 370
        } else {
          console.log('moving up')
          comp = this.current_pos - 370
        }

        a.scrollTo({
          top: comp,
          behavior: 'smooth',
        })
        this.current_pos = comp

        // console.log('SCROLLED HEIGHT', a.scrollHeight)
        console.log('SCROLLED POS', this.current_pos)

        if (direction === 'up') {
          console.log('direction is up')

          if (this.current_pos <= 0) {
            console.log(
              'going up direction changed - ',
              (a.scrollHeight + 100) / 2
            )
            this.invert_arrow = false
          } else if (this.current_pos < (a.scrollHeight + 100) / 2) {
            console.log(
              'going up scroll height not reached!height - ',
              (a.scrollHeight + 100) / 2
            )
            this.invert_arrow = true
          }
        } else {
          console.log('direction is down')
          if (this.current_pos > (a.scrollHeight + 100) / 2) {
            console.log(
              'going down scroll height reached!height - ',
              (a.scrollHeight + 100) / 2
            )
            this.invert_arrow = true
          } else {
            console.log(
              'going down  scroll height not reached ivett false!',
              a.scrollHeight / 2
            )
            this.invert_arrow = false
          }
        }
      } catch (e) {
        console.log('Error scrollTo', e)
      }
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
  transition-duration: 460ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.btn-link a {
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
.page-border {
  border-right-style: outset;
  border-color: #99d6f7;
}

.description {
  padding: 0px 67px -1px 0px;
  font-size: 14px;
}

.v-card {
  display: flex !important;
  flex-direction: column;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: #fff7fd;
}

.scroller {
  flex-grow: 1;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 1em;
  background: #fff7fd;
  display: inline !important;
}

.fade-window:after {
  content: '';
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    #fff7fd 90%
  );
  width: 100%;
  height: 4em;
}
</style>
