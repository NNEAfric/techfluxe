<template>
  <div>
    <h2>Upcoming events</h2>
        <v-card ripple flat v-for="event in events" :key="event.id" class="ma-4 white--text" style="cursor: pointer">
          <v-img :src="event.imageUrl" max-height="140px">
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
            <v-container fill-height fluid style="background-color: rgba(0, 0, 0, 0.5);">
              <v-layout fill-height row>
                <v-flex xs8 align-end flexbox>
                  <span class="title"> {{event.name}} </span> <br>
                  <span class="subheading"> <v-icon class="white--text">place</v-icon> {{event.venue}} </span>
                </v-flex>

                <v-flex xs4 align-end flexbox class="text-xs-center">
                  <span class="display-1 font-weight-bold"> {{event.day}} </span> <br>
                  <span class="headline"> {{event.month}} </span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
        </v-card>

        <div class="text-xs-center px-3">
          <V-btn depressed class="white--text text-none gradient-bg">More events</V-btn>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      events: [
          {id: 'jgk6545', imageUrl: 'https://techfluxe.netlify.com/img/events/ms.jpg', name: 'Microsoft Build', venue: 'Seattle', day: '6', month: 'may'},
          {id: 'bfdg54d', imageUrl: 'https://techfluxe.netlify.com/img/events/google.png', name: 'Google I/O', venue: 'Mountain View', day: '7', month: 'may'},
          {id: 'sj4645d', imageUrl: 'https://techfluxe.netlify.com/img/events/code.jpg', name: 'Code Conference', venue: 'Scottsdale, AZ', day: '10', month: 'June'},
        ]
    } 
  }
}
</script>

<style>

</style>
