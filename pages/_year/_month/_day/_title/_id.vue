<template>
  <v-layout row>
    <v-flex xs12 md9>
      <v-container fluid>
        <v-card flat class="colorBg">
          <v-card-title class="px-0 mx-0">
            <h1 class="hidden-xs-only" style="font-size: 64px; line-height: 1; width:100%;">{{feed($route.params.id).title}}</h1>
            <h1 class="hidden-sm-and-up" style="font-size: 48px; line-height: 1; width:100%;">{{feed($route.params.id).title}}</h1>
          </v-card-title>

          <v-card flat>
            <v-img :src="feed($route.params.id).imageUrl" contain>
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0 >
                  <v-progress-circular indeterminate color="cyan lighten-4"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>

          <v-card-text class="px-0">
            <p class="black--text" style="font-size: 18px; width: 100%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequuntur saepe inventore est nam quas, earum ratione sit aliquid quibusdam ullam esse. Assumenda nemo culpa atque libero soluta asperiores quod! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos porro sed eaque, omnis odio vel, repudiandae blanditiis obcaecati quo aliquid impedit placeat excepturi ratione dolores? Maiores ipsam optio eaque maxime.</p>
          </v-card-text>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  transition: 'bounce',
  data () {
    return {
      feedTitle: 'Hello'
    }
  },
  head() {
    return {
      title: this.feedTitle,
      meta: [
        { name: 'keywords', content: 'TechFluxe, apps news, software news, apps news in africa, best tech news in africa' },
        { hid: 'description', name: 'description', content: 'Apps news, apps news in africa' },
        { property: 'og:site_name', content: 'TechFluxe' },
        { property: 'og:og:site', content: 'tecfluxe.com' },
        { property: 'og:title', content: 'Category: Apps' },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '/img/feeds/f1.png' },
        { property: 'og:url', content: 'https://techfluxe.netlify.com/apps/' },
        { property: 'og:type', content: 'article' },
      ]
    }
  },
  computed: mapGetters({
    feed: 'feeds/loadedFeed',
  })
}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .3s;
}
@keyframes bounce-in {
  0% { transform: scale(.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes bounce-out {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(.9); opacity: 0; }
}

</style>
