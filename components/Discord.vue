<template>
  <div class="bg-gray-600 mt-4 p-4 rounded-md">
    <div class="flex flex-col md:flex-row items-center" v-if="status === 'success'">
      <div class="flex flex-row items-center">
        <img :src="`https://cdn.discordapp.com/icons/${data!.guild.id}/${data!.guild.icon}.png`" width="48" alt="">
        <div class="flex flex-col ml-4 text-left">
          <span class="text-gray-100 font-bold">{{ data!.guild.name }}</span>
          <span class="text-gray-300 flex flex-row space-x-4">
            <span>
              <span class="inline-flex bg-green-400 w-2 h-2 rounded-full mb-0.5"></span>
              {{ data!.approximate_presence_count }} Conectados
            </span>
            <span>
              <span class="inline-flex bg-gray-400 w-2 h-2 rounded-full mb-0.5"></span>
              {{ data!.approximate_member_count }} Miembros
            </span>
          </span>
        </div>
      </div>
      <a :href="`https://discordapp.com/invite/${data!.code}`" target="_blank"
        class="transition-colors duration-500 w-full md:w-auto md:ml-auto bg-blue-500 hover:bg-blue-700 text-white justify-center font-bold mt-2 md:my-auto py-2 px-4 rounded flex">Entrar</a>
    </div>

    <div v-else class="flex flex-col md:flex-row items-center animate-pulse">
      <div class="flex flex-row items-center">
        <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div class="ml-4 w-72 text-left">
          <div class="bg-gray-300 h-4 rounded w-2/5 mb-0.5"></div>
          <div class="bg-gray-300 h-4 rounded w-4/5 mb-0.5"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { DiscordResponseData } from '~/types/discord/discordResponseData';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const { id } = props

const { status, data } = useFetch<DiscordResponseData>(`https://discordapp.com/api/v6/invite/${id}?with_counts=true`, {
  lazy: true,
  server: false
})
</script>

<style></style>
