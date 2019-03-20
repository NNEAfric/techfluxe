<template>
  <div>
    <v-layout row class="pt-0 mt-0">
      <v-flex xs12 md9>
        <v-container fluid>
          <div>
            <Indicator class="hidden-xs-only" colour="primary" size="18" />
            <h1 class="title-text gradient-text hidden-xs-only pb-3" style="font-size: 6vw;">Startups</h1>
            <Indicator class="hidden-sm-and-up" colour="primary" size="12" />
            <h1 class="gradient-text hidden-sm-and-up pb-3" style="font-size: 15vw;">Startups</h1>
          </div>
        
          <!--Start Feeds-->
          <div v-for="feed in feeds" :key="feed.title" class="my-4" @click="onLoadFeed(feed.id)">
            <FeedLayout class="hidden-sm-and-down" :imageUrl="feed.imageUrl" imgMinHeight="230px" imgMaxHeight="230px" :title="feed.title" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis cumque, nostrum ratione sit, rem itaque, necessitatibus harum ullam quaerat expedita aliquam! Corrupti recusandae deleniti, quos sed unde eveniet quam!" :source="feed.source" :date="feed.date" />
            <FeedLayout  class="hidden-md-and-up" :imageUrl="feed.imageUrl" imgMinHeight="90" imgMaxHeight="" :title="feed.title" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis cumque, nostrum ratione sit, rem itaque, necessitatibus harum ullam quaerat expedita aliquam! Corrupti recusandae deleniti, quos sed unde eveniet quam!" :source="feed.source" :date="feed.date" />
          </div>
          <!--End Feeds-->

        </v-container>
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
  components: {
    Indicator,
    Newsletter,
    FeedLayout
  },
  methods:{
    onLoadFeed(id){
      this.$router.push(`startups/${id}`)
    }
  },
  computed: mapGetters({
    feeds: 'feeds/startups',
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
