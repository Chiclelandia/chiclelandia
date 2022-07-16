<template>
  <div>

    <section class="w-full h-screen gaming-header">
      <div class="w-full h-full flex flex-row items-center text-center justify-center bg-gray-800 bg-opacity-40">

        <div class="">
          <div class="flex flex-row justify-center mt-16">
            <div class="bg-gray-700 py-6 px-8 flex flex-col rounded-lg">
              <div class="flex flex-row justify-center relative -mb-16">
                <img class="relative -top-20" src="../assets/images/logo.png" height="128" width="128" alt="">
              </div>
              <div class="py-2">
                <h1 class="text-white text-xl font-bold">Entra a nuestro Discord</h1>
                <p class="text-gray-200 ">Únete ahora a la mejor comunidad de videojuegos en español</p>
              </div>

              <DiscordJoinButton></DiscordJoinButton>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import DiscordJoinButton from '~/components/DiscordJoinButton.vue'

export default Vue.extend({
  name: "IndexPage",
  components: { DiscordJoinButton }
})
</script>

<style lang="scss" scoped>
.gaming-header {
  background-image: url(~assets/images/header-gaming.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
