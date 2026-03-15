<template>
  <div
    class="bg-bg-app h-full w-full flex flex-col items-center border border-border-subtle rounded-md overflow-hidden"
  >
    <div class="w-full h-full lg:h-5/4">
      <NuxtImg
        src="https://placehold.co/600x600"
        alt="Placeholder Image"
        :preload="{ fetchPriority: 'low' }"
        class="aspect-video object-cover w-full h-64 lg:h-full"
      ></NuxtImg>
    </div>
    <div
      class="bg-component-bg p-6 h-full max-h-72 justify-between w-full flex flex-col gap-5"
    >
      <div class="space-y-1">
        <h1
          class="text-xl lg:text-3xl font-bold wrap-break-word tracking-wider text-text-accent-high capitalize"
        >
          Candidate {{ index + 1 }}
        </h1>
        <p class="text-text-low-contrast/50 md:text-base text-sm capitalize">
          {{ nomineeType }}
        </p>
      </div>
      <div class="text-left space-y-2 w-full mt-auto">
        <h1
          class="font-black text-4xl md:text-6xl text-text-accent-high leading-none tabular-nums"
        >
          {{ Math.round(animatedVoteCount).toLocaleString("en-US") }}
        </h1>

        <div class="w-full pt-2">
          <div class="flex justify-between items-center mb-1">
            <span
              class="text-xs uppercase tracking-wider font-semibold text-text-low-contrast/50"
              >Votes Cast</span
            >
            <span
              class="text-text-accent-high font-bold tracking-wider text-base md:text-lg tabular-nums"
            >
              {{ animatedPercentage.toFixed(2) }}%
            </span>
          </div>
          <div
            class="w-full bg-border-subtle rounded-full h-2.5 overflow-hidden"
          >
            <div
              class="bg-solid-bg h-full rounded-full transition-all duration-1000 ease-out"
              :style="{ width: `${animatedPercentage}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TransitionPresets } from "@vueuse/core";
import type { AnonymousCardVoteProps } from "~/api/types";

const props = defineProps<AnonymousCardVoteProps>();

const voteCountSource = computed(() => props.candidate.vote_count);
const percentageSource = computed(() => Number(props.candidate.percentage));

const animatedVoteCount = useTransition(voteCountSource, {
  duration: 1000,
  transition: TransitionPresets.easeOutCubic,
});

const animatedPercentage = useTransition(percentageSource, {
  duration: 1000,
  transition: TransitionPresets.easeOutCubic,
});
</script>
