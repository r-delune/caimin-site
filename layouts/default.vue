<template>
  <div>
    <v-container
      fluid
      :class="$vuetify.breakpoint.smAndDown ? 'mx-0' : 'mx-3 test4'"
    >
      <v-row
        class="title_card"
        :class="$vuetify.breakpoint.smAndDown ? 'mx-1' : 'mx-5'"
      >
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'center-menu ' : 'right-menu'"
          cols="auto"
          class="site_name pa-2"
        >
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'margin-small ' : ''"
            class="margin"
            @click="goHome()"
          >
            CAIMIN WALSH
          </div></v-col
        >
        <v-spacer v-if="!$vuetify.breakpoint.smAndDown"></v-spacer>

        <v-col
          class="menu-items"
          :class="$vuetify.breakpoint.smAndDown ? 'center-menu' : 'right-menu'"
        >
          <div
            class="my-button"
            color="#1361de"
            text
            nuxt
            :to="'/'"
            @click="goToPage('/')"
          >
            Home
          </div>
          <div
            class="my-button"
            color="#1361de"
            text
            nuxt
            @click="goToLink('www.instagram.com')"
          >
            Instagram
          </div>
          <div
            class="my-button"
            color="#1361de"
            text
            nuxt
            @click="goToPage('cv')"
          >
            CV
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-main>
      <v-container
        fluid
        :class="$vuetify.breakpoint.smAndDown ? 'mx-1' : 'mx-3'"
      >
        <nuxt />
      </v-container>
    </v-main>
  </div>
</template>
<script>
export default {
  methods: {
    goHome() {
      console.log('going fome')
      this.$router.push({
        path: '/',
      })
    },
    goToLink(url) {
      console.log('going too link ', url)

      window.open(url)
    },
    goToPage(url) {
      console.log('going too page ', url)

      this.$router.push({
        path: url,
      })
    },
  },
}
</script>

<style>
body {
  font-family: 'Alte Haas Grotesk';
  background-color: #fff7fd;
}

.theme--light.v-card {
  background-color: #fff7fd;
}

.title_card {
  border-bottom: 2px solid #aaa;
  border-color: #1fb0ff;
  padding: 25px 0px 0px 0px;
}

.menu-items {
  display: flex;
  align-self: flex-end;
  font-family: 'Alte Haas Grotesk 700';
  color: #1fb0ff;
  text-transform: capitalize;
  font-size: 23px;
}

.my-button {
  padding: 25px 10px 0px;
  cursor: pointer;
}

.my-button:hover {
  color: #ffa1e0;
  -webkit-transition: color 0.2s ease-out;
  -moz-transition: color 0.2s ease-out;
  -o-transition: color 0.2s ease-out;
  -ms-transition: color 0.2s ease-out;
  transition: color 0.2s ease-out;
  cursor: pointer;
}

.site_name {
  color: #1fb0ff;
  font-size: 46px;
  font-family: 'Alte Haas Grotesk 700';
}

.site_name:hover {
  color: #ffa1e0;
  -webkit-transition: color 0.2s ease-out;
  -moz-transition: color 0.2s ease-out;
  -o-transition: color 0.2s ease-out;
  -ms-transition: color 0.2s ease-out;
  transition: color 0.2s ease-out;
  cursor: pointer;
}

.image-blurred-edge {
  box-shadow: 10px 0 8px 8px pink inset;
}

.center-menu {
  justify-content: space-around;
  margin: auto;
}

.right-menu {
  justify-content: right;
  display: contents;
}

.margin {
  margin: auto;
}

.margin-small {
  display: table-caption;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
