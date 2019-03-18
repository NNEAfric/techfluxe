<template>
  <v-app class="colorBg">
    <Navigation/>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      
    }
  }
}
</script>
<style>
.gradient-bg{
    background-image: linear-gradient(-120deg, #00FF4C, #00B0D4);
  }
  .gradient-text{
    background: -webkit-linear-gradient(-120deg, #00FF4C, #00B0D4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  }
</style>
