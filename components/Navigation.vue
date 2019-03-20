<template>
  <nav>
    <v-toolbar flat app scroll-off-screen color="rgba(253, 255, 255, 0.8)">
      <v-btn large icon class="hidden-lg-and-up">
        <v-icon large class="gradient-text" @click="drawer = !drawer">more_vert</v-icon>
      </v-btn>
      <v-btn large icon class="hidden-lg-and-up">
        <v-icon large class="gradient-text" @click="drawer = !drawer">sort</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn large icon>
        <v-icon large class="gradient-text">search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" floating app class="colorBg">
      <v-layout column>
        <v-flex class="pa-4 ml-2 mb-3">
          <router-link style="cursor: pointer" to="/">
            <div>
              <v-img src="/img/vectors/logo-b.svg" width="100px">
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="cyan lighten-4"></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
            </div>
          </router-link>
        </v-flex>
      </v-layout>

      <v-list two-line>
        <v-list-tile class="list Startups" v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-content>
              <h1 class="grey--text display-2 text--darken-2 pl-3" style="font-family: 'Nunito';">{{link.text}}</h1>
            </v-list-tile-content>
          </v-list-tile>
       </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      links: [
        {icon: 'dashboard', text: 'Startups', route: '/startups'},
        {icon: 'folder', text: 'Apps', route: '/apps'},
        {icon: 'person', text: 'Devices', route: '/devices'},
        {icon: 'person', text: 'People', route: '/people'},
        {icon: 'person', text: 'Africa', route: '/africa'},
      ]
    }
  }
}
</script>
<style>
.v-list__tile--active{
border-left: 2px solid #F06598;
}
.v-list__tile--active h1{
  background: -webkit-linear-gradient(-120deg, #00FF4C, #00B0D4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
