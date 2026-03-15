<template>
  <LoadingSkeleton v-if="isPending" />
  <ErrorWithRetry
    v-else-if="isError || isBothError"
    :refetch="refetch"
    :is-offline="isOffline"
    :is-refetching="isRefetching"
  />
  <section
    v-else
    class="h-dvh lg:h-[calc(100dvh-65px)] grid lg:grid-cols-2 grid-cols-1 lg:divide-x divide-y divide-border-subtle antialiased bg-bg-app w-full overflow-y-auto"
  >
    <!-- I'll wrap this inside template later for conditions later for video switch after interval if needed-->
    <div class="bg-bg-app p-6 lg:p-10 flex flex-col space-y-4">
      <h1 class="text-lg text-text-low-contrast/50 uppercase font-bold">
        President
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full h-full"
      >
        <CandidateCard
          v-for="(val, i) in getPresidentsData"
          :key="val.cand_id"
          :candidate="val"
          :index="i"
        />
      </div>
      <p
        class="text-text-low-contrast/50 capitalize flex items-center gap-2 mt-2 justify-end text-right"
      >
        <span>Total Votes:</span>
        {{
          getPresidentsData
            .reduce((acc, val) => acc + val.vote_count, 0)
            .toLocaleString("en-US")
        }}
      </p>
    </div>
    <div class="bg-bg-app p-6 lg:p-10 flex flex-col space-y-4">
      <h1 class="text-lg text-text-low-contrast/50 uppercase font-bold">
        Vice President
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full h-full"
      >
        <CandidateCard
          v-for="(val, i) in getVicePresidentsData"
          :key="val.cand_id"
          :candidate="val"
          :index="i"
        />
      </div>
      <p
        class="text-text-low-contrast/50 capitalize flex items-center mt-2 gap-2 justify-end text-right"
      >
        <span>Total Votes:</span>
        {{ formatVoteCount(getVicePresidentsData) }}
      </p>
    </div>
  </section>
  <SyncIndicator :is-refetching="isRefetchingInBackground" />
</template>
<script setup lang="ts">
definePageMeta({
  name: "home-results",
  path: "/results",
  layout: "default",
});
const formatVoteCount = computed(() => (data: VoteResponseDTO["data"]) => {
  return data
    .reduce((acc, val) => acc + val.vote_count, 0)
    .toLocaleString("en-US");
});

const {
  getPresidentsData,
  getVicePresidentsData,
  isError,
  isBothError,
  isPending,
  refetch,
  isRefetching,
  isRefetchingInBackground,
  isOffline,
} = useVotes();
</script>
