<template>
  <section
    class="h-dvh lg:h-[calc(100dvh-65px)] grid lg:grid-cols-2 grid-cols-1 lg:divide-x divide-y divide-border-subtle antialiased bg-bg-app w-full overflow-y-auto"
  >
    <!-- I'll wrap this inside template later for conditions later for video switch after interval-->
    <div class="bg-bg-app p-6 lg:p-10 flex flex-col space-y-4">
      <h1 class="text-lg text-text-low-contrast/50 uppercase font-bold">
        President
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full h-full"
      >
        <div
          class="bg-blue-300 h-full w-full flex flex-col items-center border border-border-subtle rounded-md overflow-hidden"
        >
          <div class="w-full h-full lg:h-5/4">
            <NuxtImg
              src="https://placehold.co/600x800"
              alt="Placeholder Image"
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
                Kenneth T. Cacho
              </h1>
              <p
                class="text-text-low-contrast/50 md:text-base text-sm capitalize"
              >
                Student Council
              </p>
            </div>
            <div class="text-left space-y-1">
              <h1 class="font-black text-4xl md:text-6xl text-text-accent-high">
                {{ Number(`${40}`).toLocaleString("en-US") }}
              </h1>
              <p
                class="text-text-low-contrast/50 font-bold tracking-wider text-base md:text-lg"
              >
                54%
              </p>
            </div>
          </div>
        </div>
        <div
          class="bg-blue-600 h-full w-full flex flex-col items-center border border-border-subtle rounded-md overflow-hidden"
        >
          <div class="w-full h-full lg:h-5/4">
            <NuxtImg
              src="https://placehold.co/600x800"
              alt="Placeholder Image"
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
                John Doe Justify Bugati
              </h1>
              <p
                class="text-text-low-contrast/50 md:text-base text-sm capitalize"
              >
                Student Council
              </p>
            </div>
            <div class="text-left space-y-1">
              <h1 class="font-black text-4xl md:text-6xl text-text-accent-high">
                {{ Number(`${66}`).toLocaleString("en-US") }}
              </h1>
              <p
                class="text-text-low-contrast/50 font-bold tracking-wider text-base md:text-lg"
              >
                51%
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-text-low-contrast text-sm capitalize text-right">
        Total Votes: 0
      </p>
    </div>
    <div class="bg-bg-app p-6 lg:p-10 flex flex-col space-y-4">
      <h1 class="text-lg text-text-low-contrast/50 uppercase font-bold">
        Vice President
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full h-full"
      >
        <div
          class="bg-blue-300 h-full w-full flex flex-col items-center border border-border-subtle rounded-md overflow-hidden"
        >
          <div class="w-full h-full lg:h-5/4">
            <NuxtImg
              src="https://placehold.co/600x800"
              loading="lazy"
              alt="PTCI Logo"
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
                Kenneth T. Cacho
              </h1>
              <p
                class="text-text-low-contrast/50 md:text-base text-sm capitalize"
              >
                Student Council
              </p>
            </div>
            <div class="text-left space-y-1">
              <h1 class="font-black text-4xl md:text-6xl text-text-accent-high">
                {{ Number(`${40}`).toLocaleString("en-US") }}
              </h1>
              <p
                class="text-text-low-contrast/50 font-bold tracking-wider text-base md:text-lg"
              >
                54%
              </p>
            </div>
          </div>
        </div>
        <div
          class="bg-blue-600 h-full w-full flex flex-col items-center border border-border-subtle rounded-md overflow-hidden"
        >
          <div class="w-full h-full lg:h-5/4">
            <NuxtImg
              src="https://placehold.co/600x800"
              alt="Placeholder Image"
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
                John Doe Justify Bugati
              </h1>
              <p
                class="text-text-low-contrast/50 md:text-base text-sm capitalize"
              >
                Student Council
              </p>
            </div>
            <div class="text-left space-y-1">
              <h1 class="font-black text-4xl md:text-6xl text-text-accent-high">
                {{ Number(`${66}`).toLocaleString("en-US") }}
              </h1>
              <p
                class="text-text-low-contrast/50 font-bold tracking-wider text-base md:text-lg"
              >
                51%
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-text-low-contrast text-sm capitalize text-right">
        Total Votes: 0
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  name: "home",
  path: "/home",
  layout: "default",
});
</script>
