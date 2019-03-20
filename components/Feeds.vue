<template>
  <div>
    <!--Start Feeds-->
    <div v-for="feed in feeds" :key="feed.id" class="my-4">
      <nuxt-link style="text-decoration: none;" :to="feed.year+ '/' + feed.month +'/' +feed.day + '/' + feed.title.replace(/\s+/g, '-').replace(/,/g, '').toLowerCase() + '/' + feed.id">
        <FeedLayout class="hidden-sm-and-down" :imageUrl="feed.imageUrl" imgMinHeight="230px" imgMaxHeight="230px" :title="feed.title" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis cumque, nostrum ratione sit, rem itaque, necessitatibus harum ullam quaerat expedita aliquam! Corrupti recusandae deleniti, quos sed unde eveniet quam!" :source="feed.source" :date="feed.date" />
        <FeedLayout class="hidden-md-and-up" :imageUrl="feed.imageUrl" imgMinHeight="90" imgMaxHeight="" :title="feed.title" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis cumque, nostrum ratione sit, rem itaque, necessitatibus harum ullam quaerat expedita aliquam! Corrupti recusandae deleniti, quos sed unde eveniet quam!" :source="feed.source" :date="feed.date" />
      </nuxt-link>
    </div>
    <!--End Feeds-->
  </div>
</template>

<script>
import Indicator from '@/components/Indicator'
import FeedLayout from '@/components/FeedLayout'
import { mapGetters } from 'vuex'

export default {
  components:{
    Indicator,
    FeedLayout
  },
  methods:{
    onLoadFeed(id, year, month, day, title){
      title = title.replace(/\s+/g, '-').replace(/,/g, '').toLowerCase();
      this.$router.push(`/${year}/${month}/${day}/${title}/${id}`)
    }
  },
computed: mapGetters({
    feeds: 'feeds/feeds',
  })
}
</script>

<style scoped>
.border{
  border-top: 2px #EEFCFF solid;
}
.border-thin{
  border-top: 2px #EEFCFF solid;
}
</style>
