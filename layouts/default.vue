<template>
  <div>
    <v-main>
      <v-container>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-row
            no-gutters
            :color="hover ? 'blue' : 'red'"
            class="title_card mx-2"
            align-end
            fill-height
          >
            <v-col cols="9">
              <span><h2>CAIMIN WALSH</h2></span></v-col
            >

            <v-col cols="auto">
              <v-spacer></v-spacer>
              <!-- <v-btn small nuxt :to="'/'" text>Home</v-btn> -->
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
  padding: 76px 0px 0px 0px;
  font-family: 'Alte Haas Grotesk 700';
  color: #1361de;
  font-size: 45px;
  font-size: 3rem;
  /* font-size: 16px; */
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
