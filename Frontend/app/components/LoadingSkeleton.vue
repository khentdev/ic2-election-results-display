<template>
  <section
    class="h-dvh lg:h-[calc(100dvh-65px)] grid lg:grid-cols-2 grid-cols-1 lg:divide-x divide-y divide-border-subtle antialiased bg-bg-app w-full overflow-hidden"
  >
    <div class="bg-bg-app p-6 lg:p-10 flex flex-col space-y-4">
      <div class="h-7 w-24 bg-border-subtle rounded animate-pulse"></div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full h-full"
      >
        <div
          v-for="i in 2"
          :key="`pres-${i}`"
          class="bg-component-bg h-full w-full flex flex-col items-center border border-border-subtle rounded-md overflow-hidden animate-pulse"
        >
          <div class="w-full h-full lg:h-5/4 bg-border-subtle/30">
            <div class="aspect-video w-full h-64 lg:h-full"></div>
          </div>
          <div
            class="bg-component-bg p-6 h-full max-h-72 justify-between w-full flex flex-col gap-5"
          >
            <div class="space-y-2">
              <div class="h-8 lg:h-9 bg-border-subtle rounded w-3/4"></div>
              <div class="h-5 bg-border-subtle rounded w-1/2 mt-1"></div>
            </div>
            <div class="text-left space-y-2">
              <div class="h-10 md:h-14 bg-border-subtle rounded w-1/2"></div>
              <div class="h-6 bg-border-subtle rounded w-1/4 mt-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-auto">
        <div class="h-6 w-48 bg-border-subtle rounded animate-pulse"></div>
      </div>
    </div>
    <div class="bg-bg-app p-6 lg:p-10 flex flex-col space-y-4">
      <div class="h-7 w-32 bg-border-subtle rounded animate-pulse"></div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full h-full"
      >
        <div
          v-for="i in 2"
          :key="`vp-${i}`"
          class="bg-component-bg h-full w-full flex flex-col items-center border border-border-subtle rounded-md overflow-hidden animate-pulse"
        >
          <div class="w-full h-full lg:h-5/4 bg-border-subtle/30">
            <div class="aspect-video w-full h-64 lg:h-full"></div>
          </div>
          <div
            class="bg-component-bg p-6 h-full max-h-72 justify-between w-full flex flex-col gap-5"
          >
            <div class="space-y-2">
              <div class="h-8 lg:h-9 bg-border-subtle rounded w-3/4"></div>
              <div class="h-5 bg-border-subtle rounded w-1/2 mt-1"></div>
            </div>
            <div class="text-left space-y-2">
              <div class="h-10 md:h-14 bg-border-subtle rounded w-1/2"></div>
              <div class="h-6 bg-border-subtle rounded w-1/4 mt-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-auto">
        <div class="h-6 w-48 bg-border-subtle rounded animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

