<template>
  <span>
    <v-fade-transition>
      <v-avatar 
      :color="colour"
      :style="{
        animationDuration: animationDuration
      }"
      class="mb-1 v-avatar--metronome"
      :size="size"
      ></v-avatar>
    </v-fade-transition>
  </span>
</template>

<script>
export default {
  props:['size', 'colour'],
  computed: {
    animationDuration () {
        return `${60 / 50}s`
      }
  }
}
</script>

<style>
@keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>
