<template>
  <div>
    <v-layout style="cursor: pointer;">
      <v-flex xs4 md6>
        <v-card flat>
          <v-img :src="imageUrl" :min-height="imgMinHeight" :max-height="imgMaxHeight"> 
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0 >
                <v-progress-circular indeterminate color="cyan lighten-4"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-card>
      </v-flex>
      <v-flex xs8 md-6>
        <div class="ml-4 pt-2 border">
          <!--Large Display-->
          <h1 class="display-1 font-weight-bold hidden-sm-and-down black--text"> {{title}} </h1>
          <!--Small Display-->
          <h1 class="hidden-md-and-up" style="font-size:4vw; line-height: 1; font-weight:700;"> {{title}} </h1>

          <p class="subheading pt-2 grey--text text--darken-4 hidden-sm-and-down"> {{text.slice(0, 145) + '...'}} </p>
          
          <!--Large Display-->
           <div class="hidden-xs-only">
              By <span class="gradient-text pr-5"> {{source}} </span>
              <Indicator colour="#EE3477" size="10"/>
              <span class=""> {{date}}</span>
           </div>
          <!--Small Display-->
           <div class="hidden-sm-and-up pt-2">
              By <span class="gradient-text"> {{source}} </span> |
              <span class=""> {{date}}</span>
           </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Indicator from '@/components/Indicator' 

export default {
  props:['imageUrl', 'imgMinHeight', 'imgMaxHeight', 'title', 'text', 'source', 'date'],
  components: {
    Indicator
  }
}
</script>

<style scoped>
.border{
  border-top: 2px #EEFCFF solid;
}
</style>
