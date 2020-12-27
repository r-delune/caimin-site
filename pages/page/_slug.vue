<template>
  <v-container
    fluid
    :class="$vuetify.breakpoint.smAndDown ? 'test mx-0 px-0' : 'mx-0 px-0'"
  >
    <v-card
      flat
      :class="!$vuetify.breakpoint.smAndDown ? 'x-5 px-0 pt-0 pa-4' : ''"
    >
      <v-row
        :class="!$vuetify.breakpoint.smAndDown ? 'mx-5 px-5 pt-0' : 'mx-0 px-0'"
      >
        <!-- post text w/ border-->
        <v-col
          class="pt-0"
          :class="!$vuetify.breakpoint.smAndDown ? 'page-border ' : 'mx-0 px-0'"
        >
          <div class="title_color px-1 pa-0 pt-0">{{ page.title }}</div>
          <div class="px-1 pt-0 pr-4">
            <nuxt-content :document="page" />

            <v-spacer></v-spacer>
          </div>

          <div class="pa-0 pt-3 px-0">
            <v-btn
              v-if="!$vuetify.breakpoint.smAndDown"
              class="btn-link color pt-2"
              text
              :to="'/'"
            >
              <v-icon left> mdi-arrow-left </v-icon>
              Back
            </v-btn>
          </div>
        </v-col>

        <!-- page media section  -->
        <v-col
          :class="
            !$vuetify.breakpoint.smAndDown ? 'pa-1 pl-4 pt-4 main-cols' : 'mx-5'
          "
          cols="auto"
          md="6"
          lg="6"
          sm="12"
          xs="12"
        >
          <v-card
            flat
            :class="
              !$vuetify.breakpoint.smAndDown ? 'fade-window pa-0' : 'mx-0 px-0'
            "
            height="620px"
          >
            <div
              id="my-window"
              :ref="'my-window'"
              :class="{ scroller: !$vuetify.breakpoint.smAndDown }"
            >
              <!-- display all videos if the exist -->
              <div v-if="page.video">
                <v-col
                  v-for="(video, index) in page.video"
                  :ref="'video' + index"
                  :key="`${index}`"
                  :class="
                    !$vuetify.breakpoint.smAndDown ? '' : 'mx-0 px-1 pt-3'
                  "
                >
                  <Video :video="video.video_id"></Video>

                  <div class="color description pt-2">
                    {{ video.description }}
                  </div>
                </v-col>
              </div>

              <!-- display explandable image -->
              <v-col
                v-for="(post, index) in page.images"
                :key="`${index}`"
                :class="!$vuetify.breakpoint.smAndDown ? 'pt-3' : 'mx-0 px-1'"
              >
                <div v-if="post.img">
                  <expandable-image
                    :ref="'image' + index"
                    class="image"
                    max-width="200px"
                    :src="getImg(post.img)"
                    :alt="altImage"
                  ></expandable-image>

                  <div v-if="post.description" class="color description pt-2">
                    {{ post.description }}
                  </div>

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
                    width="90%"
                    height="166"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    :src="post.link"
                  ></iframe>
                </v-col>
                <div class="color description pt-2">
                  {{ post }}
                </div>
                <v-divider></v-divider>
              </div>
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
    const slug = params.slug
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
  text-decoration: underline;
  font-family: 'Alte Haas Grotesk 700';
  font-size: 23px;
  padding: 12px;
}

image {
  width: 200%;
  height: 300px;
}

.page-border {
  border-right-style: outset;
  border-color: #1fb0ff9c;
  border-width: 2px;

  /* background-color: #fff7fd; */
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  background-color: #fff7fd;
}

.description {
  padding: 30px 67px -1px 0px;
  font-size: 15px;
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

.main-cols {
  background-color: #fff7fd;
}

.fade-window {
  background-color: #fff7fd;
  padding: 0px 30px;
}

.color {
  color: #1fb0ff !important;
  font-family: 'Alte Haas Grotesk';
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

.nuxt-content p {
  color: #1fb0ff;
  font-family: 'Alte Haas Grotesk';
  font-size: 18px;
  letter-spacing: 0.03em;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  line-height: 1.35em;
  font-family: 'Alte Haas Grotesk';
  font-size: 18px;
  font-weight: 400;
  /* padding: 0px 67px -1px 0px; */
}
</style>
