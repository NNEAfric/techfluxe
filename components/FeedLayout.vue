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
          <div class="display-1 font-weight-bold hidden-sm-and-down black--text" v-html="title"></div>
          <!--Small Display-->
          <div class="hidden-md-and-up black--text" style="font-size:4vw; line-height: 1; font-weight:700;" v-html="title"></div>

          <div class="subheading pt-2 grey--text text--darken-4 hidden-sm-and-down" v-html="text.slice(0, 145) + '...'"></div>
          
          <!--Large Display-->
           <div class="hidden-xs-only">
             <span class="grey--text text--darken-2">By</span> <span class="gradient-text pr-5"> {{source}} </span>
              <Indicator colour="#EE3477" size="10"/>
              <span class="grey--text text--darken-2"> {{date}}</span>
           </div>
          <!--Small Display-->
           <div class="hidden-sm-and-up pt-2">
              <span class="grey--text text--darken-2 caption">By</span> <span class="gradient-text caption"> {{source}} </span>
              <span class="grey--text text--darken-2 caption">| {{date}}</span>
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
