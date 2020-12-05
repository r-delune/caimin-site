<template>
  <div>
    <v-main>
      <v-container>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-row
            no-gutters
            :color="hover ? 'blue' : 'red'"
            class="title_card mx-2 pa-4"
            align-end
            fill-height
            ustify-space-between
          >
            <v-col cols="6">
              <span><h2>CAIMIN WALSH</h2></span></v-col
            >
            <v-spacer></v-spacer>
            <v-col cols="6">
              <v-btn small nuxt :to="'/'" text>Home</v-btn>
              <v-btn small nuxt :to="'/about'" text>About</v-btn>
              <v-btn small nuxt :to="'/about'" text>Instagram</v-btn>
              <v-btn small nuxt :to="'/cv'" text>CV</v-btn>
            </v-col>
          </v-row>
        </v-hover>
      </v-container>
    </v-main>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Alte Haas Grotesk';
}

.v-ripple__animation {
  display: none;
}

.v-btn:hover:before {
  background-color: transparent;
}

.title_card {
  border-bottom: 1px solid #aaa;
  padding: 70px 0px 0px 0px;
  font-family: 'Alte Haas Grotesk 700';
  color: #1361de;
  font-size: 25px;
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

.hover {
  color: black;
}
</style>
