<template>
  <v-container>
    <v-row>
      <v-col cols="6" start>
        <p class="text-sm-left">
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

      <v-col cols="6">
        <p class="text-sm-left">
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

      <v-row>
        <v-col
          v-for="(post, $index) in page"
          :key="`${$index}`"
          class="post max-w-sm rounded overflow-hidden shadow-lg flex flex-col"
          cols="6"
        >
          <v-hover>
            <template #default="{ hover }">
              <v-card class="pa-4">
                <v-img :src="require('~/assets/cork.jpg')"></v-img>
                <h3>{{ post.title }}</h3>
                <p class="text-gray-700 text-base">
                  {{ post.description }}
                </p>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <!-- <v-btn>See more info</v-btn> -->
                    <nuxt-link :to="'/pages/1-0'">
                      <v-btn :to="post.path"
                        >{{ post.id }} - See more info</v-btn
                      ></nuxt-link
                    >
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
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

.class {
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
}
</style>
