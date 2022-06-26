<template>
  <div class="flex flex-row justify-center mt-16">
    <div class="bg-gray-700 py-6 px-8 flex flex-col rounded-lg">
      <div class="flex flex-row justify-center relative -mb-16">
        <img class="relative -top-20" src="../assets/images/logo.png" height="128" width="128" alt="">
      </div>
      <div class="flex flex-row justify-center">
        <p class="text-gray-200 ">Únete ahora a la mejor comunidad de videojuegos en español</p>
      </div>

      <DiscordJoinButton></DiscordJoinButton>
    </div>
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
