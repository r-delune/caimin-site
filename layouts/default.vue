<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-row class="title_card mx-5">
          <h1 class="mx-5">CAIMIN WALSH</h1>
          <v-spacer></v-spacer>

          <nuxt-link :to="'/'">
            <v-btn rounded text>Home</v-btn>
          </nuxt-link>

          <nuxt-link :to="'about/'">
            <v-btn rounded text>About</v-btn>
          </nuxt-link>

          <nuxt-link :to="'about/'">
            <v-btn rounded text>Instagram</v-btn></nuxt-link
          >
          <nuxt-link :to="'about/'"><v-btn rounded text>CV</v-btn></nuxt-link>
        </v-row>
      </v-container>
    </v-content>
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
  border-bottom: 1px solid #aaa;
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
