<template>
  <v-container align-center fill-height>
    <v-row column wrap align-center justify="center">
      <v-col xl="6" lg="6" md="12" sm="12" xs="12" fluid>
        <p class="text-sm-left text_color">
          Walsh is curator and events organiser from Limerick, Ireland. He holds
          a BA in Fine Art from Limerick School of Art and Design (2009 - 2013).
          He is a former visual arts curator of The Belltable Arts Centre (2014)
          and former venue technician at The Triskel Arts Centre, Cork (2015).
          He has worked for a number of festivals in management and technical
          capacities including; Body & Soul Festival, Prima Volta Music and Arts
          Festival, Sounds From a Safe Harbour, Cork Film Festival, Féile na
          Gréine and Make a Move Festival. He is a founding member of music
          collectives Prima Volta and Limerick Noise Collective.
        </p></v-col
      >

      <v-col xl="6" lg="6" md="12" sm="12" xs="12">
        <p class="text-sm-left text_color">
          He is chairperson of the board of directors of spacecraft artists
          studios, a non-profit contemporary art studio in Limerick city. In
          2019 he founded the non-profit initiative Anywhere Projects, promoting
          art and music in unconventional spaces. He was selected as part of the
          MAC Curatorial Directions programme 2019 in Belfast, New York and
          Philadelphia. Caimin Walsh currently works as Projects Curator at
          Ormston House (est. 2011) a cultural resource centre in the heart of
          Limerick city.
        </p>
      </v-col>

      <v-container>
        <v-row>
          <v-col
            v-for="(post, $index) in page"
            :key="`${$index}`"
            cols="auto"
            md="6"
            lg="6"
            sm="12"
          >
            <!-- {{ $index }}{{ post.title }} -->
            <v-hover>
              <template #default="{ hover }">
                <v-card fill-height class="d-flex flex-column">
                  <v-img
                    height="500"
                    :src="require('~/assets/images/' + post.img)"
                  ></v-img>
                  <v-card-title>{{ post.title }}</v-card-title>
                  <v-card-subtitle class="flex-grow-1">
                    {{ post.description }}
                  </v-card-subtitle>
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#036358">
                      <!-- <v-btn>See more info</v-btn> -->

                      <v-btn :to="post.path" nuxt
                        >More info {{ post.path }}</v-btn
                      >
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('page').fetch()
    return {
      page,
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
/* 
.v-application--wrap {
  min-height: 100vh;
  justify-content: center;
} */

/* .class {
  .list-complete-item {
    width: 400px;
    height: 300px;
    display: inline-block;
  }
  .list-complete-item a {
    display: inline-block;
    position: relative;
    width: 400px;
    height: 300px;
  }
  .list-complete-item a .image {
    display: block;
    width: 100%;
    height: auto;
  }
  .list-complete-item a .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #008cba;
  }
  .list-complete-item a:hover .overlay {
    opacity: 1;
  }
  .list-complete-item a .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
} */

.text_color {
  font-size: 16px;
  color: #1361de;
  font-weight: 600;
}
</style>
