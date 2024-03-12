<script setup>
import { projects } from "@/store/projects";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const ImgSrc1 = ref("hero.jpg");
const rectangleImg = ref("s.project-rectangle.png");

const router = useRouter();
const projectId = ref(router.currentRoute.value.params.id);

const project = computed(() =>
  projects.find((project) => project.id === parseInt(projectId.value))
);

const Heros = ref([
  {
    id: 2,
    img: ImgSrc1,
    rectangle: rectangleImg,
    title: computed(
      () =>
        `Spurline Gas Pipeline Construction to Apex Industries ${
          project.value ? project.value.id : ""
        }`
    ),
    text: "We are committed to providing our clients with comprehensive and innovative solutions to the complex challenges facing the oil and gas industry.",
  },
]);
</script>

<template>
  <div>
    <Hero :Heros="Heros" />

    <div class="py-5 px-6 lg:py-16 lg:px-10 xl:px-0">
      <div class="container mx-auto">
        <div class="flex justify-between">
          <h1
            class="text-[#205FAD] text-xl font-oswald font-semibold leading-10 tracking-tighter md:text-2xl lg:text-4xl"
          >
            Spurline Gas Pipeline Construction to Apex Industries
          </h1>
          <p
            class="px-2 py-2.5 h-fit text-white rounded-md font-semibold text-xs tracking-[0.25em]"
            :class="
              project.status === 'ONGOING' ? 'bg-amber-6=700' : 'bg-green-800'
            "
          >
            {{ project.status }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-5 md:mt-8 lg:hidden">
          <div class="flex justify-between">
            <h1 class="text-[#333333] sans font-bold mb-2">Date Completed</h1>
            <p class="text-[#333333] text-end">2024</p>
          </div>
          <div class="flex justify-between">
            <h1 class="text-[#333333] sans font-bold mb-2">Client</h1>
            <p class="text-[#333333] text-end">
              Nigerian Nathional Petroleum <br />
              Corporation (NNPC)
            </p>
          </div>
          <div class="flex justify-between">
            <h1 class="text-[#333333] sans font-bold mb-2">Location</h1>
            <p class="text-[#333333] text-end">Lagos, Nigeria</p>
          </div>
          <div class="flex justify-between">
            <h1 class="text-[#333333] sans font-bold mb-2">Service</h1>
            <p class="text-[#333333] text-end">Natural Gas Distribution</p>
          </div>
          <div class="flex justify-between">
            <h1 class="text-[#333333] sans font-bold mb-2">
              Project <br />
              Scope
            </h1>
            <p class="text-[#333333] text-end">
              Engineering, Procurement, <br />
              Construction, Testing and Commissioning, PMS <br />
              Installation, Civil Work & CP
            </p>
          </div>
        </div>

        <div class="hidden grid-cols-5 gap-6 mt-8 lg:grid">
          <div class="">
            <h1 class="text-[#333333] font-bold mb-2">Client</h1>
            <p class="text-[#333333]">
              Nigerian Nathional Petroleum Corporation (NNPC)
            </p>
          </div>
          <div class="">
            <h1 class="text-[#333333] font-bold mb-2">Service</h1>
            <p class="text-[#333333]">Natural Gas Distribution</p>
          </div>
          <div class="">
            <h1 class="text-[#333333] font-bold mb-2">Date Completed</h1>
            <p class="text-[#333333]">2024</p>
          </div>
          <div class="">
            <h1 class="text-[#333333] font-bold mb-2">Location</h1>
            <p class="text-[#333333]">Lagos, Nigeria</p>
          </div>
          <div class="">
            <h1 class="text-[#333333] font-bold mb-2">Project Scope</h1>
            <p class="text-[#333333]">
              Engineering, Procurement, Construction, Testing and Commissioning,
              PMS Installation, Civil Work & CP
            </p>
          </div>
        </div>

        <hr class="border my-5 border-[#b3b3b3] lg:my-10" />

        <div class="flex flex-col-reverse lg:flex-row w-full gap-6 lg:gap-10">
          <div class="w-full lg:w-[70%]">
            <h1
              class="text-[#205FAD] font-oswald text-xl font-semibold leading-10 tracking-tighter md:text-2xl lg:text-[32px]"
            >
              Project Overview
            </h1>
            <p class="text-[#333333] mt-6">
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
              <br />
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
          <div class="w-full lg:w-[349px] lg:h-[480.92px]">
            <NuxtImg
              class="w-full h-full object-cover"
              alt="single-project-image"
              src="/single.png"
            />
          </div>
        </div>

        <div>
          <div class="my-5 lg:my-10">
            <h1
              class="text-[#205FAD] font-oswald text-xl font-semibold leading-10 tracking-tighter md:text-2xl lg:text-[32px]"
            >
              Project Timeline
            </h1>
            <div></div>
          </div>
          <div class="hidden sm:grid sm:grid-cols-3 gap-5 my-10">
            <NuxtImg
              class="h-[300px] w-full object-cover"
              alt="single-project-image"
              src="/singleProject1.jpeg"
            />
            <NuxtImg
              class="h-[300px] w-full object-cover"
              alt="single-project-image"
              src="/singleProject2.jpeg"
            />
            <NuxtImg
              class="h-[300px] w-full object-cover"
              alt="single-project-image"
              src="/singleProject3.jpeg"
            />
          </div>
        </div>

        <div class="mt-2 lg:mb-16">
          <h1
            class="text-[#205FAD] font-oswald text-xl font-semibold leading-10 tracking-tighter md:text-2xl lg:text-[32px]"
          >
            Project Highlights
          </h1>
          <p class="text-[#333333] mt-2 text-lg md:mt-4 lg:mt-10">
            The Delta oil field development project was a complex and
            challenging project that required innovative solutions and best
            practices. Some of the project highlights are:
          </p>
          <ul class="lg:mt-4">
            <li class="text-[#333333]">
              <div class="flex items-center gap-2 lg:gap-3">
                <img src="/checkmark.png" alt="" class="w-[20px] h-[20px]" />
                <p>
                  The project was completed on time and on budget, despite the
                  technical, operational, and logistical challenges of working
                  in deep water and remote areas.
                </p>
              </div>
            </li>
            <li class="text-[#333333] ">
              <div class="flex items-center gap-2 my-2 lg:gap-3">
                <img src="/checkmark.png" alt="" class="w-[20px] h-[20px]" />
                <p>
                  The project achieved a world-class safety record, with no
                  fatalities, no lost-time injuries, and no major environmental
                  incidents.
                </p>
              </div>
            </li>
            <li class="text-[#333333]">
              <div class="flex items-center gap-2 lg:gap-3">
                <img src="/checkmark.png" alt="" class="w-[20px] h-[20px]" />
                <p>
                  The project used cutting-edge technology and equipment, such
                  as the FPSO, which is the largest and most advanced vessel of
                  its kind in Africa, and the subsea systems, which are designed
                  to withstand high pressure and temperature conditions.
                </p>
              </div>
            </li>
            <li class="text-[#333333]">
              <div class="flex items-center gap-2 my-2 lg:gap-3">
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
            <li class="text-[#333333]">
              <div class="flex items-center gap-2 lg:gap-3">
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

        <div class="pt-6 md:pt-10 lg:pt-16">
          <h1
            class="text-[#205FAD] font-oswald text-xl font-semibold leading-10 tracking-tighter mb-5 md:text-2xl lg:mb-8 lg:text-[32px]"
          >
            See Other Projects
          </h1>
          <div class="grid grid-cols-1 w-full gap-4 lg:grid-cols-2 lg:gap-8">
            <div class="rounded-xl relative h-[320px] lg:w-[456px] xl:w-full">
              <NuxtImg
                class="h-full w-full filter brightness-[0.6] relative object-cover rounded-xl"
                src="project.jpeg"
                alt="rectangle"
              />
              <div class="w-289 h-34 absolute bottom-0 p-4 text-white">
                <h4
                  class="font-oswald font-bold text-white text-[28px] leading-8 tracking-wider"
                >
                  {{ project.name }} {{ project.id }}
                </h4>
                <div class="mt-4">
                  <p
                    class="sans text-white font-semibold leading-8 tracking-wider"
                  >
                    <Icon
                      name="material-symbols:arrow-circle-left-outline"
                      color="white"
                      size="32"
                      class="cursor-pointer"
                    />
                    View previous project
                  </p>
                </div>
              </div>
              <p
                class="absolute left-[20px] top-[20px] text-center text-white bg-[#005E24] w-[100px] p-1 rounded-lg"
              >
                COMPLETED
              </p>
            </div>

            <div class="rounded-xl relative h-[320px] lg:w-[456px] xl:w-full">
              <NuxtImg
                class="h-full w-full filter brightness-[0.6] relative object-cover rounded-xl"
                src="project.jpeg"
                alt="rectangle"
              />
              <div class="w-full text-end h-34 absolute bottom-0 p-4 text-white">
                <h4
                  class="font-oswald font-bold text-white text-[28px] leading-8 tracking-wider"
                >
                  {{ project.name }} {{ project.id }}
                </h4>
                <div class="mt-4">
                  <p
                    class="sans text-white font-semibold leading-8 tracking-wider"
                  >
                    View previous project
                    <Icon
                      name="material-symbols:arrow-circle-right-outline"
                      color="white"
                      size="32"
                      class="cursor-pointer"
                    />
                  </p>
                </div>
              </div>
              <p
                class="absolute left-[20px] top-[20px] text-white bg-[#005E24] w-[100px] p-1 rounded-lg"
              >
                COMPLETED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
