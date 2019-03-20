<template>
  <v-container>
    

    <v-card flat class="colorBg">
      <v-card-title>
        <h1 style="font-size: 5vw; line-height: 0.9;">{{feed($route.params.id).title}}</h1>
      </v-card-title>
      <v-img :src="feed($route.params.id).imageUrl" contain/>
      <v-card-text>
        
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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

</style>
