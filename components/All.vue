<script setup>
import { projects } from "../store/projects";
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-10 p-10">
      <div v-for="(project, id) in projects" :key="id" class="cursor-pointer">
        <NuxtLink :to="`/projects/${project.id}`">
          <div class="h-[320px] relative">
            <NuxtImg
              :src="project.NuxtImg"
              :alt="project.alt"
              class="w-full h-full rounded-xl"
            />
            <p
              class="px-2 py-2.5 text-white rounded-md font-semibold text-xs absolute top-4 left-4 tracking-[0.25em]"
              :class="
                project.status === 'ONGOING' ? 'bg-yellow-700' : 'bg-green-800'
              "
            >
              {{ project.status }}
            </p>
          </div>

          <div class="my-6">
            <h2 class="text-2xl font-bold">
              {{ project.name }} <span>{{ project.id }}</span>
            </h2>
            <p class="mt-1">{{ project.year }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="flex justify-center my-10">
      <button
        class="py-2 px-4 text-black border-2 text-xl rounded-xl hover:bg-blue-300 transition-all cursor-pointer"
      >
        Load More
      </button>
    </div>
  </div>
</template>
