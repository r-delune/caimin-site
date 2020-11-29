<template>
  <div>
    <div>
      <vimeo-player
        ref="player"
        :video-id="null"
        :autoplay="true"
        :video-url="`https://player.vimeo.com/video/${video}?dnt=1`"
        @ready="onReady"
      ></vimeo-player>
      <!-- unmute button -->
      <v-row class="d-flex justify-center mb-6">
        <v-btn @click="mute"
          ><v-icon>{{ !muted ? 'mdi-speaker' : 'mdi-speaker-off' }} </v-icon>
          {{ !muted ? 'Mute' : 'Unmute' }}
        </v-btn>
      </v-row>
    </div>
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
    options: {
      muted: true,
      autoplay: true,
    },
  }),
  mounted() {
    this.mute()
  },
  methods: {
    onReady() {
      this.playerReady = true
    },
    play() {
      this.$refs.player.play()
    },
    pause() {
      this.$refs.player.pause()
    },
    mute() {
      if (!this.muted) {
        this.muted = true
        this.$refs.player.mute()
      } else {
        this.muted = false
        this.$refs.player.unmute()
      }
    },
  },
}
</script>
<style scoped>
.clearfix {
  box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
}
.blur-box {
  z-index: 9999999;
  background-color: white;
  box-shadow: 0 0 11px 12px white;
  backdrop-filter: blur(26px);
  /* padding: 88px 5px 56px 6px; */
}

.blur-box-inner {
  z-index: 99999999;
  /* background-color: white; */
  box-shadow: inset 0 0 9px 9px white;
  -webkit-backdrop-filter: blur(26px);
  /* backdrop-filter: blur(26px); */
  margin: 0px 0px 14px;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
