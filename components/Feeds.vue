<template>
  <div>
    <v-layout class="my-4 hidden-xs-only" row v-for="feed in feeds" :key="feed.title" style="cursor: pointer">
            <v-flex xs4 md6>
              <v-card hover flat>
                <v-img :src="feed.imageUrl" min-height="230px" max-height="230px"> 
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="cyan lighten-4"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
            <v-flex xs8 md-6>
              <div class="ml-4 pt-2 border">
                <h5 class="display-1 font-weight-black"> {{feed.title}} </h5>
                <p class="subheading pt-2 grey--text text--darken-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequuntur iure voluptas temporibus! At earum itaque ratione impedit blanditiis magni similique! Exercitationem ex facilis architecto omnis tempore quibusdam blanditiis voluptatem. </p>
                 By <span class="gradient-text pr-5"> {{feed.source}} </span>
                 <Indicator colour="#EE3477" size="10"/>
                 <span class=""> {{feed.date}}</span>
              </div>
            </v-flex>
          </v-layout>

          <v-layout class="my-4 hidden-sm-and-up mx-0 px-0" row wrap v-for="feed in feeds" :key="feed.id" style="cursor: pointer">
            
            <v-flex xs4>
              <v-card flat>
                <v-img :src="feed.imageUrl" min-height="90px" max-height="100px">
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="cyan lighten-4"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <div class="ml-2 pt-1 border-thin">
                <h5 class="pb-1"> {{feed.title.slice(0, 85) + "..."}} </h5>
                 <span class="caption">By</span> <span class="gradient-text caption"> {{feed.source}} </span> |
                 <span class="caption"> {{feed.date}}</span>
              </div>
            </v-flex>
          </v-layout>
  </div>
</template>

<script>
import Indicator from '@/components/Indicator'
import { mapGetters } from 'vuex'

export default {
  components:{
    Indicator
  },
computed: mapGetters({
    feeds: 'feeds/feeds',
  })
}
</script>

<style>

</style>
