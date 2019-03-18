<template>
  <div>
    <v-card flat class="ma-3 pa-1 gradient-bg">
          <v-form>
            <v-card flat>
              <v-card-title class="pb-0">
                <div class="text-xs-center">
                  <h1 class="gradient-text display-1 font-weight-bold">TechFluxe Daily</h1>
                  <p class="subheading py-2">Sign up for our daily newsletter to get the top tech news stories delivered to your inbox.</p>
                </div>
              </v-card-title>
              <v-card-text class="pt-0">
                <v-text-field
                  outline
                  background-color="dark"
                  label="Your email"
                ></v-text-field>

              <div class=" text-xs-center">
                <V-btn large depressed type="submit" class="white--text text-none gradient-bg">Subscribe</V-btn>
              </div>

              </v-card-text>
            </v-card>
          </v-form>
      </v-card> 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
