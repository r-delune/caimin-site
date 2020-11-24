<template>
  <div :id="page.id" :class="'page__' + page.id">
    <!-- hello

    {{ page }} -->

    <v-container>
      <v-card outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1 title_color">
              <v-icon> mdi-arrow-left </v-icon>
              <v-btn :to="'/'" rounded text> Back </v-btn>
            </v-list-item-title>

            <!-- <div class="overline mb-4">Projects</div> -->
            <v-list-item-title class="headline mb-1 title_color">
              {{ page[0].title }}
            </v-list-item-title>
            <v-list-item-subtitle> </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>
        <v-row>
          <v-col cols="6">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-card-text>
                Back The Museum of Mythological Water Beasts (2017–) is a
                multi-year project bringing together artists and communities to
                learn about the River Shannon. In 2021, a programme of River
                Residencies will connect artists with rural communities who live
                and work along the river in Cavan, Clare, Limerick and
                Tipperary, to create new artistic projects. The River
                Residencies are a collaborative initiative led by Limerick
                Culture and Arts Office and Ormston House in partnership with
                Cavan Arts Office, Clare Arts Office and Tipperary Arts Office,
                co-funded by the Arts Council of Ireland through An Invitation
                to Collaboration. The River Residencies are co-curated by Caimin
                Walsh and Mary Conlon from Ormston House.
              </v-card-text>
            </div>
          </v-col>
          <v-col v-for="(post, $index) in 1" :key="`${$index}`" cols="6">
            <v-img :src="require('~/assets/cork.jpg')"></v-img>
          </v-col>
        </v-row>
        <!-- <v-card-actions>
          <v-btn :to="'/'" outlined rounded text> Button </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Page',
  // Dynamically create this page based on contents on component folder
  async asyncData({ $content, params, error }) {
    const slug = params.page
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({
          statusCode: 404,
          message: 'Page ' + slug + '' + err.message,
        })
      })
    return {
      page,
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: this.$vuetify.breakpoint.mobile ? 'mobile-font' : 'normal-font',
      },
    }
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.title_color {
  color: #1361de;
  color: #1361de;
  font-size: xx-large;
  font-weight: bold;
}
</style>
