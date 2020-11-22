<template>
  <div>
    <v-card class="title_card mx-5">
      <v-row class="title_card mx-5">
        <v-toolbar-title>
          <div class="title">
            <b> CAIMIN WALSH</b>
          </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-title>
          <nuxt-link :to="'about/'">
            <v-btn>About</v-btn>
          </nuxt-link>
        </v-toolbar-title>
        <v-toolbar-title>
          <nuxt-link :to="'about/'">
            <v-btn>Instagram</v-btn></nuxt-link
          ></v-toolbar-title
        >
        <v-toolbar-title>
          <nuxt-link :to="'about/'"
            ><v-btn>CV</v-btn></nuxt-link
          ></v-toolbar-title
        >

        <!-- </v-toolbar> -->
      </v-row>
    </v-card>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<style>
.v-ripple__animation {
  display: none;
}

.v-btn:hover:before {
  background-color: transparent;
}

.title_card {
}

.title {
  font-size: 35px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.v-application--wrap {
  min-height: 100vh;
  justify-content: center;
}
</style>
