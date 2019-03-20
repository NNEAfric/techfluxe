<template>
  <div>
    {{feed($route.params.id).title}}
    <v-img :src="feed($route.params.id).imageUrl" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    feed: 'feeds/loadedFeed',
  })
}
</script>

<style>

</style>
