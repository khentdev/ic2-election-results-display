<template>
  <div
    class="bg-bg-app w-full h-full min-h-[calc(100dvh-65px)] flex flex-col justify-center items-center border border-border-subtle rounded-md overflow-hidden p-10"
  >
    <div
      class="bg-component-bg p-5 rounded-full mb-6 border border-border-subtle flex items-center justify-center"
    >
      <Icon
        v-if="isOffline"
        name="lucide:wifi-off"
        class="text-text-accent-low md:size-10 size-8"
      />
      <Icon
        v-else
        name="lucide:triangle-alert"
        class="text-text-accent-low md:size-10 size-8"
      />
    </div>

    <h2
      class="text-xl lg:text-3xl font-bold tracking-wider text-text-accent-high mb-3 text-center"
    >
      {{ title || (isOffline ? "You are offline" : "Something went wrong") }}
    </h2>
    <p
      class="text-text-low-contrast/70 md:text-base text-sm mb-8 text-center max-w-sm"
    >
      {{
        message ||
        (isOffline
          ? "It seems you lost your internet connection. Please check your network and try again."
          : "We encountered an unexpected error while fetching the results. Please try again.")
      }}
    </p>

    <button
      @click="refetch"
      :disabled="isRefetching"
      class="bg-solid-bg text-solid-text disabled:bg-component-bg disabled:text-text-low-contrast disabled:hover:bg-component-bg disabled:cursor-not-allowed hover:bg-solid-bg-hover active:scale-95 transition-all duration-200 font-bold py-3 px-8 rounded-md tracking-wider flex items-center gap-2 cursor-pointer"
    >
      <Icon
        name="lucide:rotate-cw"
        :class="['size-5', isRefetching ? 'animate-spin' : '']"
      />
      {{ getLabel }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  refetch: () => void;
  title?: string;
  message?: string;
  isOffline?: boolean;
  isRefetching?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  message: undefined,
  isOffline: false,
  isRefetching: false,
});

const getLabel = computed(() => {
  if (props.isOffline) return "Try Again";
  if (props.isRefetching) return "Retrying...";
  return "Retry";
});
</script>
