<template>
  <div>
    <!-- <vimeo-player
      ref="player"
      :video-id="null"
      :autoplay="true"
      :video-url="`https://player.vimeo.com/video/${video}?dnt=1`"
      @ready="onReady"
    ></vimeo-player> -->
    <!-- 
    <vimeo-player
      ref="player"
      :video-id="null"
      :autoplay="true"
      :video-url="`https://player.vimeo.com/video/${video}?dnt=1`"
      @ready="onReady"
    ></vimeo-player> -->

    <youtube
      ref="youtube"
      width="100%"
      :video-id="videoId"
      @playing="playing"
    ></youtube>

    <!-- unmute button -->
    <!-- <v-row class="d-flex justify-center mb-6">
      <v-btn @click="mute"
        ><v-icon>{{ !muted ? 'mdi-speaker' : 'mdi-speaker-off' }} </v-icon>
        {{ !muted ? 'Mute' : 'Unmute' }}
      </v-btn>
    </v-row> -->
  </div>
</template>

<script>
export default {
  name: 'ReponsiveVideo',
  props: {
    video: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    muted: false,
    videoId: 'lG0Ys-2d4MA',
    options: {
      muted: true,
      autoplay: true,
    },
  }),
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('we are watching!!!')
    },
  },
}
</script>
<style scoped>
.clearfix {
  box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
}
</style>
