<script setup>
import { projects } from "@/store/projects"
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const projectId = ref(router.currentRoute.value.params.id);

const project = computed(() => projects.find(project => project.id === parseInt(projectId.value)));
</script>

<template>
  <div>
    <div class="relative bg-[#f1f1f1]">
      <NuxtImg
        class="w-full filter brightness-[0.3] relative h-[467px]"
        alt="ourteam-image"
        src="/hero.jpg"
      />
      <NuxtImg
        class="absolute top-[43%] left-36 transform -translate-x-1/2 -translate-y-1/2 w-[157px] h-[247px]"
        src="/rectangle.png"
        alt="rectangle"
      />
      <div
        class="text-white absolute top-[44%] left-[40%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="font-bold mt-5 text-5xl">
          Spurline Gas Pipeline Construction to Apex Industries <span>{{ project.id }}</span>
        </h1>
        <p class="text-[1.2rem]">
          We are committed to providing our clients with comprehensive and
          innovative <br />
          solutions to the complex challenges facing the oil and gas industry.
        </p>
      </div>
    </div>
    <div class="p-20">
      <div>
        <div class="flex justify-between">
          <h1
            class="text-[#205FAD] font-oswald text-4xl font-semibold leading-10 tracking-tighter"
          >
            Spurline Gas Pipeline Construction to Apex Industries
          </h1>
          <p>completed</p>
        </div>
        <div class="grid grid-cols-5 my-5">
          <div class="">
            <h1 class="text-[#333333] font-semibold mb-2">Client</h1>
            <p class="text-[#333333]">
              Nigerian Nathional Petroleum Corporation (NNPC)
            </p>
          </div>
          <div class="">
            <h1 class="text-[#333333] font-semibold mb-2">Service</h1>
            <p class="text-[#333333]">Natural Gas Distribution</p>
          </div>
          <div class="">
            <h1 class="text-[#333333] font-semibold mb-2">Date Completed</h1>
            <p class="text-[#333333]">2024</p>
          </div>
          <div class="">
            <h1 class="text-[#333333] font-semibold mb-2">Location</h1>
            <p class="text-[#333333]">Lagos, Nigeria</p>
          </div>
          <div class="">
            <h1 class="text-[#333333] font-semibold mb-2">Project Scope</h1>
            <p class="text-[#333333]">
              Engineering, Procurement, Construction, Testing and Commissioning,
              PMS Installation, Civil Work & CP
            </p>
          </div>
        </div>
        <hr class="border-2 my-3 border-[#333333]" />

        <div class="flex flex-row w-full gap-10 my-10">
          <div class="w-[70%]">
            <h1
              class="text-[#205FAD] font-oswald text-4xl font-semibold leading-10 tracking-tighter"
            >
              Project Overview
            </h1>
            <p class="text-[#333333] mt-3 text-md">
              The Delta oil field is one of the largest offshore fields in
              Nigeria, located in the deep waters of the Gulf of Guinea. The
              field was discovered in 2010 and has an estimated reserve of 1.2
              billion barrels of oil equivalent. The field development project
              was launched in 2015 and completed in 2023, with a production
              capacity of 200,000 barrels per day. <br />
              The project involved the drilling of 20 wells, the installation of
              a floating production, storage, and offloading (FPSO) vessel, and
              the laying of subsea pipelines and umbilicals. The project also
              included the construction of an onshore gas processing plant and a
              power plant to supply electricity to the FPSO and the nearby
              communities. <br />
              The project was executed by a consortium of international and
              local companies, led by our company as the main contractor. The
              project was supported by the Nigerian government, the Nigerian
              National Petroleum Corporation (NNPC), and the local communities.
              <br /> <br>
              The project objectives were to:
            </p>
            <ul class="list-disc ml-10">
              <li class="text-[#333333]">
                Develop the Delta oil field in a safe, efficient, and
                environmentally friendly manner.
              </li>
              <li class="text-[#333333]">
                Maximize the recovery of oil and gas from the field and optimize
                the production performance.
              </li>
              <li class="text-[#333333]">
                Enhance the local content and capacity development of the
                Nigerian oil and gas industry.
              </li>
              <li class="text-[#333333]">
                Create value for our clients, stakeholders, and the Nigerian
                economy.
              </li>
            </ul>
          </div>
          <div class="w-[30%]">
            <NuxtImg
              class="w-full h-full object-cover"
              alt="single-project-image"
              src="/single.png"
            />
          </div>
        </div>
        <div>
          <div>
            <h1
              class="text-[#205FAD] font-oswald text-4xl font-semibold leading-10 tracking-tighter"
            >
              Project Timeline
            </h1>
          </div>
          <div class="grid grid-cols-3 gap-5 my-10">
            <NuxtImg
              class="h-[300px] w-full"
              alt="single-project-image"
              src="/singleProject1.jpeg"
            />
            <NuxtImg
              class="h-[300px] w-full"
              alt="single-project-image"
              src="/singleProject2.jpeg"
            />
            <NuxtImg
              class="h-[300px] w-full"
              alt="single-project-image"
              src="/singleProject3.jpeg"
            />
          </div>
        </div>
        <div>
          <h1
            class="text-[#205FAD] font-oswald text-4xl font-semibold leading-10 tracking-tighter"
          >
            Project Highlights
          </h1>
          <p class="text-[#333333] mt-3 text-md">
            The Delta oil field development project was a complex and
            challenging project that required innovative solutions and best
            practices. Some of the project highlights are:
          </p>
          <ul>
            <li class="text-[#333333] mt-3 text-md">
              <div class="flex items-center gap-5">
                <img src="/checkmark.png" alt="" class="w-[20px] h-[20px]" />
                <p>
                  The project was completed on time and on budget, despite the
                  technical, operational, and logistical challenges of working
                  in deep water and remote areas.
                </p>
              </div>
            </li>
            <li class="text-[#333333] mt-3 text-md">
              <div class="flex items-center gap-5">
                <img src="/checkmark.png" alt="" class="w-[20px] h-[20px]" />
                <p>
                  The project achieved a world-class safety record, with no
                  fatalities, no lost-time injuries, and no major environmental
                  incidents.
                </p>
              </div>
            </li>
            <li class="text-[#333333] mt-3 text-md">
              <div class="flex items-center gap-5">
                <img src="/checkmark.png" alt="" class="w-[20px] h-[20px]" />
                <p>
                  The project used cutting-edge technology and equipment, such
                  as the FPSO, which is the largest and most advanced vessel of
                  its kind in Africa, and the subsea systems, which are designed
                  to withstand high pressure and temperature conditions.
                </p>
              </div>
            </li>
            <li class="text-[#333333] mt-3 text-md">
              <div class="flex items-center gap-5">
                <img src="/checkmark.png" alt="" class="w-[20px] h-[20px]" />
                <p>
                  The project contributed to the local content and capacity
                  development of the Nigerian oil and gas industry, by creating
                  over 10,000 direct and indirect jobs, training over 2,000
                  local workers, and awarding over 70% of the contracts to local
                  suppliers and contractors.
                </p>
              </div>
            </li>
            <li class="text-[#333333] mt-3 text-md">
              <div class="flex items-center gap-5">
                <img src="/checkmark.png" alt="" class="w-[20px] h-[20px]" />
                <p>
                  The project delivered social and economic benefits to the
                  Nigerian economy and the local communities, by generating over
                  $10 billion in revenue, paying over $2 billion in taxes and
                  royalties, and providing over 100 MW of electricity, clean
                  water, health care, and education facilities.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-10">
          <h1
            class="text-[#205FAD] font-oswald text-4xl font-semibold leading-10 tracking-tighter my-5"
          >
            See Other Projects
          </h1>
          <div class="grid grid-cols-2 w-full gap-10">
            <div
              class="bg-cover bg-center h-[400px] relative"
              style="background-image: url('/project.jpeg');"
            >
              <div class="w-289 h-34 absolute bottom-0 left-0 p-8 text-white">
                <h4
                  class="font-oswald font-semibold text-white text-3xl leading-8 tracking-wider"
                >
                {{ project.name }} {{ project.id }}
                </h4>
                <div class="mt-4">
                  <p
                    class="font-oswald text-white text-xl leading-8 tracking-wider"
                  >
                    View previous project
                  </p>
                </div>
              </div>
            </div>
            <div
              class="bg-cover bg-center h-[400px] relative"
              style="background-image: url('/project.jpeg');"
            >
              <div class="w-289 h-34 absolute bottom-0 left-0 p-8 text-white">
                <h4
                  class="font-oswald font-semibold text-white text-3xl leading-8 tracking-wider"
                >
                  {{ project.name }} {{ project.id }}
                </h4>
                <div class="mt-4">
                  <p
                    class="font-oswald text-white text-xl leading-8 tracking-wider"
                  >
                    View previous project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
