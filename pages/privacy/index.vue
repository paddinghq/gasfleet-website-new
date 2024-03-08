<script setup>
const rectangleImg = ref("rectangle.png");
const ImgSrc1 = ref("hero.jpg");
const down = ref("down.png");
const up = ref("up.png");

const Heros = ref([
  {
    id: 11,
    img: ImgSrc1,
    rectangle: rectangleImg,
    title: "Privacy Policy",
    text: "We are committed to providing our clients with comprehensive and innovative solutions to the complex challenges facing the oil and gas industry.",
  },
]);

const items = ref([
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non erat ante ut et. Convallis eu enim diam ac. Sit semper adipiscing fermentum magna duis et in orci cursus. Ut nunc sed hac sed ac quis est. Faucibus ut nisl gravida augue feugiat pulvinar velit gravida. Auctor pulvinar diam posuere hendrerit eget molestie. Egestas dignissim sed maecenas facilisi eget morbi nulla lacus posuere. Pharetra varius tincidunt proin tristique. Ullamcorper proin ullamcorper sit viverra interdum. Adipiscing in nullam donec risus ac neque a vulputate lectus. Quis ornare porta cursus ipsum cursus amet a nibh. Semper posuere ultricies mattis fermentum vestibulum. Feugiat id neque et volutpat cursus. Ultrices sed semper egestas et justo adipiscing. In sed mauris pellentesque nec viverra id sit eget donec. Sagittis aliquet arcu sit lectus vitae non accumsan nisi. Etiam vel ut viverra quam eget amet. Amet dui sit feugiat facilisis non nunc elementum. Mattis donec mattis tristique egestas pellentesque vitae egestas.",
    imgSrc: down.value,
  },
]);

const activeIndex = ref(null);

// @ts-ignore
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
  items.value[index].imgSrc =
    activeIndex.value === index ? up.value : down.value;
};
</script>

<template>
  <div>
    <Hero :Heros="Heros" />

    <main>
      <div class="container mx-auto p-4 lg:py-16 lg:px-20 xl:px-0">
        <section>
          <div class="w-full">
            <div v-for="(item, index) in items" :key="index" class="lg:pb-14">
              <button
                @click="toggle(index)"
                :class="{ active: activeIndex === index }"
                class="cursor-pointer pb-4 flex justify-between items-center bg-white border-0 text-left w-full outline-none lg:pb-6"
              >
                <span class="font-medium text-xl">{{ item.title }}</span>
                <span class="lg:hidden"
                  ><img :src="item.imgSrc" alt="" class="w-6 h-6"
                /></span>
              </button>
              <transition name="accordion-content">
                <div
                  class="accordion-content overflow-hidden"
                  :class="
                    activeIndex === index
                      ? 'h-[32rem] transition-all duration-300 md:h-60 lg:h-full'
                      : 'h-0 transition-all duration-300 lg:h-full'
                  "
                >
                  {{ item.content }}
                </div>
              </transition>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
