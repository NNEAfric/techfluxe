<template>
  <div>
    <v-layout row class="pt-0 mt-0">
      <v-flex xs12 md9>
        <v-container fluid>
          <div>
            <Indicator class="hidden-xs-only" colour="primary" size="18" />
            <h1 class="title-text gradient-text hidden-xs-only pb-3" style="font-size: 6vw;">People</h1>
            <Indicator class="hidden-sm-and-up" colour="primary" size="12" />
            <h1 class="gradient-text hidden-sm-and-up pb-3" style="font-size: 15vw;">People</h1>
          </div>
        
          <!--Start Feeds-->
          <div v-for="feed in feeds" :key="feed.id" class="my-4">
            <nuxt-link style="text-decoration: none;" :to="feed.year+ '/' + feed.month +'/' +feed.day + '/' + feed.title.replace(/\s+/g, '-').replace(/,/g, '').toLowerCase() + '/' + feed.id">
              <FeedLayout class="hidden-sm-and-down" :imageUrl="feed.imageUrl" imgMinHeight="230px" imgMaxHeight="230px" :title="feed.title" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis cumque, nostrum ratione sit, rem itaque, necessitatibus harum ullam quaerat expedita aliquam! Corrupti recusandae deleniti, quos sed unde eveniet quam!" :source="feed.source" :date="feed.date" />
              <FeedLayout class="hidden-md-and-up" :imageUrl="feed.imageUrl" imgMinHeight="90" imgMaxHeight="" :title="feed.title" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis cumque, nostrum ratione sit, rem itaque, necessitatibus harum ullam quaerat expedita aliquam! Corrupti recusandae deleniti, quos sed unde eveniet quam!" :source="feed.source" :date="feed.date" />
            </nuxt-link>
          </div>
          <!--End Feeds-->

        </v-container>
      </v-flex>
      <v-flex xs12 md3 class="hidden-sm-and-down">
        <Newsletter/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Indicator from '@/components/Indicator'
import Newsletter from '@/components/Newsletter'
import FeedLayout from '@/components/FeedLayout'
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'People | Techfluxe',
      meta: [
        { name: 'keywords', content: 'TechFluxe, people in tech, technology heroes, tech CEOs, tech startups founders' },
        { hid: 'description', name: 'description', content: 'Leaders in technology news, people in technology' },
        { property: 'og:site_name', content: 'TechFluxe' },
        { property: 'og:og:site', content: 'tecfluxe.com' },
        { property: 'og:title', content: 'Category: People' },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '/img/feeds/f1.png' },
        { property: 'og:url', content: 'https://techfluxe.netlify.com/people/' },
        { property: 'og:type', content: 'article' },
      ]
    }
  },
  components: {
    Indicator,
    Newsletter,
    FeedLayout
  },
  methods:{
    onLoadFeed(id, year, month, day, title){
      title = title.replace(/\s+/g, '-').replace(/,/g, '').toLowerCase();
      this.$router.push(`/${year}/${month}/${day}/${title}/${id}`)
    }
  },
  computed: mapGetters({
    feeds: 'feeds/people',
  })
}
</script>

<style scoped>
h1 {
  
}
.title-text {
  font-size: 5vw;
  line-height: 0.9;
}
</style>
