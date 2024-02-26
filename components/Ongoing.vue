<script setup>
import { projects } from "../store/projects";
</script>

<template>
  <div class="grid grid-cols-3 gap-10 p-10">
    <div v-for="(project, id) in projects" :key="id" class="cursor-pointer" :class="project.status === 'COMPLETED' ? 'hidden' : 'block'">
      <NuxtLink :to="`/projects/${project.id}`">
        <NuxtImg :src="project.NuxtImg" :alt="project.alt" class="w-full" />
        <div class="my-6">
          <h2 class="text-2xl font-bold">
            {{ project.name }} <span>{{ project.id }}</span>
          </h2>
          <p class="mt-1">{{ project.year }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
