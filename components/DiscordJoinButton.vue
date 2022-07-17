<template>
  <div class="bg-gray-600 mt-4 p-4 rounded-md">
    <div class="flex flex-col md:flex-row items-center" v-if="!$fetchState.pending">
      <div class="flex flex-row items-center">
        <img :src="`https://cdn.discordapp.com/icons/${discordServer.guild.id}/${discordServer.guild.icon}.png`"
          width="48" alt="">
        <div class="flex flex-col ml-4 text-left">
          <span class="text-gray-100 font-bold">{{ discordServer.guild.name }}</span>
          <span class="text-gray-300 flex flex-row space-x-4">
            <span>
              <span class="inline-flex bg-green-400 w-2 h-2 rounded-full mb-0.5"></span>
              {{ discordServer.approximate_presence_count }} Conectados
            </span>
            <span>
              <span class="inline-flex bg-gray-400 w-2 h-2 rounded-full mb-0.5"></span>
              {{ discordServer.approximate_member_count }} Miembros
            </span>
          </span>
        </div>
      </div>
      <a :href="`https://discordapp.com/invite/${discordServer.code}`" target="_blank"
        class="transition-colors duration-500 w-full md:w-auto md:ml-auto bg-blue-500 hover:bg-blue-700 text-white justify-center font-bold mt-2 md:my-auto py-2 px-4 rounded flex">Entrar</a>
    </div>
  </div>
</template>
<!--
  :src="`https://cdn.discordapp.com/icons/${this.discordServer.guild.id}/${this.guild.icon}.jpg`"
-->
<script>
export default {
  data: () => ({
    discordServer: {}
  }),
  async fetch() {
    this.discordServer = await (await this.$axios.get('https://discordapp.com/api/v6/invite/YmSKDMkt9z?with_counts=true')).data
  },
  fetchOnServer: false,
}
</script>

<style>
</style>
