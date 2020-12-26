<template>
  <div>
    <youtube
      ref="youtube"
      width="100%"
      :video-id="videoId"
      @playing="playing"
    ></youtube>
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
