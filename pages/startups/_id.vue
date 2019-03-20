<template>
  <div>
    {{feed($route.params.id).title}}
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
