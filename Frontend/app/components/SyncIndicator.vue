<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-4 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-4 opacity-0"
  >
    <div
      v-if="isRefetching"
      class="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 flex items-center gap-2 bg-component-bg border border-border-subtle text-text-low-contrast px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg z-50"
    >
      <Icon
        name="lucide:loader-2"
        class="size-4 animate-spin text-text-accent-high"
      />
      <span>Syncing Results</span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  isRefetching: boolean;
}>();
</script>
