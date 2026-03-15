<template>
  <header
    class="top-0 sticky h-16 py-8 flex items-center justify-center bg-bg-panel border-b border-b-border-subtle z-50"
  >
    <div class="flex items-center gap-6 px-6 md:px-10 justify-between w-full">
      <NuxtImg
        src="/PTCI-logo.png"
        alt="PTCI Logo"
        :preload="{ fetchPriority: 'high' }"
        class="w-12 md:w-14 h-full object-cover"
      />
      <h1
        class="text-lg font-bold text-text-accent-high tracking-wide text-center md:block hidden"
      >
        Palawan Technological College - 2026 Student Council Election Results
      </h1>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <div class="size-2 bg-red-500 rounded-full animate-pulse"></div>
          <p class="text-sm text-text-accent-high">Live</p>
        </div>
        <button
          @click="toggleMode"
          class="rounded-2xl size-8 transition-colors duration-200 flex flex-col items-center justify-center hover:bg-accent-component-bg-hover"
        >
          <Transition
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            enter-active-class="transition-opacity duration-100 ease-in absolute"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            leave-active-class="transition-opacity duration-100 ease-in absolute"
          >
            <Icon
              key="sun"
              name="lucide:sun-dim"
              v-if="isDark"
              class="size-6 text-text-accent-high"
            />
            <Icon
              key="moon"
              name="lucide:moon"
              v-else
              class="size-6 text-text-accent-high"
            />
          </Transition>
        </button>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
const mode = useColorMode();

const toggleMode = () => {
  mode.preference = mode.preference === "dark" ? "light" : "dark";
};
const isDark = computed(() => mode.preference === "dark");
</script>
