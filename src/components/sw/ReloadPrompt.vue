<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { needRefresh, offlineReady, updateServiceWorker } = useRegisterSW({
  onRegistered(registration) {
    console.log('[SW]: registered successful!')

    registration && setInterval(async () => await registration.update(), 10_000)
  },
  onRegisterError(error) {
    console.log('[SW]: registered failed with following errors - ', error)
  },
  onNeedRefresh() {
    console.log('[SW]: need refresh.')
  },
  onOfflineReady() {
    console.log('[SW]: offline ready.')
  }
})

const close = () => {
  needRefresh.value = false
  offlineReady.value = false
}
</script>

<template>
  <div
    v-if="offlineReady || needRefresh"
    class="border border-solid border-[#8885] m-4 text-left p-3 right-0 bottom-0 z-1 fixed"
    role="alert"
  >
    <div class="mb-2">
      <span v-if="offlineReady">App ready to work offline</span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <button
      v-if="needRefresh"
      class="bg-transparent border border-solid rounded-sm outline-none border-[#8885] mr-2 py-3px px-10px"
      @click="updateServiceWorker()"
    >
      Reload
    </button>
    <button
      class="bg-transparent border border-solid rounded-sm outline-none border-[#8885] py-3px px-10px"
      @click="close"
    >
      Close
    </button>
  </div>
</template>
