<script setup>
const rectangleImg = ref("rectangle.png");
const ImgSrc1 = ref("hero.jpg");

const Heros = ref([
  {
    id: 8,
    img: ImgSrc1,
    rectangle: rectangleImg,
    title: "Our Brand",
    text: "At Gasfleet Engineering, we are committed to excellence in engineering solutions for the energy sector. Our brand reflects our dedication to innovation, reliability, and sustainability in all aspects of our work.",
  },
]);
</script>

<template>
  <div>
    <Hero :Heros="Heros" />

    <main>
      <div class="container my-10 px-6 lg:my-20 xl:py-0 xl:mx-auto xl:px-0">
        <section>
          <div>
            <h2
              class="font-semibold text-2xl text-blue-700 lg:text-4xl xl:text-[40px]"
            >
              Gasfleet: The Future of Oil and Gas Engineering
            </h2>
            <p class="mt-4">
              Gasfleet is a leading oil and gas engineering company that
              provides innovative solutions for the energy sector. We are
              passionate about delivering excellence, sustainability, and value
              to our clients and stakeholders. Our brand reflects our dedication
              to innovation, excellence, and sustainability in all aspects of
              our work. This brand guide serves as a reference for maintaining
              consistency and integrity in our visual and messaging identity.
            </p>
          </div>
          <div class="my-6 lg:my-20">
            <h2
              class="font-semibold text-2xl text-blue-700 lg:text-4xl xl:text-[40px]"
            >
              Our Brand Story
            </h2>
            <div class="flex flex-col mt-4 gap-4 lg:flex-row">
              <p>
                Gasfleet was founded in 2010 by a groudiv of engineers who
                shared a vision of transforming the oil and gas industry with
                cutting-edge technology and engineering expertise. Since then,
                we have grown to become a trusted partner for some of the
                world’s largest energy companies, working on projects across
                Africa, Asia, Europe, and the Americas.
              </p>
              <p>
                Our mission is to create a positive impact on the environment
                and society by developing and implementing efficient, safe, and
                reliable oil and gas engineering solutions. We believe that oil
                and gas can be a source of clean and affordable energy for the
                future, if managed responsibly and sustainably.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <h2
                class="font-semibold text-2xl text-blue-700 lg:text-4xl xl:text-[40px]"
              >
                Our Brand Values
              </h2>
              <p class="my-4">
                At Gasfleet, we are guided by three core values that define who
                we are and how we work:
              </p>
            </div>
            <div class="flex flex-col gap-6 lg:flex-row">
              <div>
                <h3 class="font-medium text-xl">Innovation</h3>
                <p class="mt-2">
                  We embrace change and challenge ourselves to find new and
                  better ways of doing things. We invest in research and
                  development, and leverage the latest technology and best
                  practices in our field.
                </p>
              </div>
              <div>
                <h3 class="font-medium text-xl">Excellence</h3>
                <p class="mt-2">
                  We strive for the highest standards of quality and performance
                  in everything we do. We deliver on our promises and exceed our
                  clients’ expectations. We are committed to continuous
                  improvement and learning.
                </p>
              </div>
              <div>
                <h3 class="font-medium text-xl">Sustainability</h3>
                <p class="mt-2">
                  We care about the environment and the communities we operate
                  in. We design and execute our projects with minimal
                  environmental impact and maximum social benefit. We adhere to
                  the highest ethical and safety standards in our industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="my-6 lg:my-20">
            <div>
              <h2
                class="font-semibold text-2xl text-blue-700 lg:text-4xl xl:text-[40px]"
              >
                Logo
              </h2>
              <div class="mt-2 flex flex-col justify-between lg:flex-row">
                <div class="flex lg:w-1/3">
                  <div
                    class="flex items-center border-r-4 border-black pr-4 mr-3"
                  >
                    <img
                      src="../../public/image/colored.png"
                      alt="colored-logo"
                      class="lg:h-full"
                    />
                  </div>
                  <div>
                    <img
                      src="../../public/image/Gasfleet-LTD.png"
                      alt="Gasfleet-limited"
                      class="lg:h-full"
                    />
                  </div>
                </div>
                <div class="mt-8 lg:w-3/4">
                  <p>
                    The logo consists of two elements: the wordmark and the
                    symbol. The wordmark is the name of the company in a custom
                    font (Oswald font), and the symbol is a stylized
                    representation of a gas flame. The logo design is simple,
                    modern, and memorable. It conveys the idea of energy,
                    innovation, and excellence. The logo design is also scalable
                    and adaptable, as it can be used in different sizes, colors,
                    and backgrounds.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-6 lg:mt-20">
              <h2
                class="font-semibold text-2xl text-blue-700 lg:text-4xl xl:text-[40px]"
              >
                Fonts
              </h2>
              <div>
                <div class="flex items-center">
                  <p class="mr-2 oswald font-semibold text-[56px]">Aa</p>
                  <p class="oswald text-sm uppercase">
                    Our primary font is Oswald, a modern and geometric
                    sans-serif typeface. We use it for headings, titles, and
                    display text.
                  </p>
                </div>
                <div class="flex items-center mt-4">
                  <p class="mr-2 sans font-semibold text-[56px]">Aa</p>
                  <p class="sans text-sm uppercase">
                    Our secondary font is Open Sans, a humanist and versatile
                    sans-serif typeface. We use it for body text, captions, and
                    small print.
                  </p>
                </div>
              </div>
              <p class="mt-4">
                Oswald and Open Sans are both available on Google Fonts and can
                be downloaded for free. Alternatively, you can use Arial as a
                substitute font when Oswald or Open Sans are not available.
              </p>
            </div>
            <div class="my-6">
              <h2
                class="font-semibold text-2xl text-blue-700 lg:text-4xl xl:text-[40px]"
              >
                Color Palette
              </h2>
              <p class="mt-4">
                Our primary color is cobalt blue, a vibrant and energetic shade
                of blue that reflects our innovation and excellence. Our
                secondary color is turquoise blue, a fresh and lively shade of
                blue that complements our primary color and adds contrast and
                interest. Our tertiary colors are gray, cream, jet black, and
                slate grey, which are neutral and versatile colors that can be
                used for backgrounds, borders, and text.
              </p>
              <div
                class="my-6 grid grid-cols-2 gap-4 justify-center items-center md:grid-cols-3 lg:gap-6 lg:grid-cols-6"
              >
                <div
                  class="h-[92px] bg-[#205FAD] text-white flex flex-col items-center justify-center text-sm p-4 rounded-md lg:w-[137.33px] lg:h-36"
                >
                  <p>Cobalt Blue</p>
                  <p class="mt-1">#205FAD</p>
                  <p>32, 95, 173</p>
                </div>
                <div
                  class="h-[92px] bg-[#06AED5] text-white flex flex-col items-center justify-center text-sm p-4 rounded-md lg:w-[137.33px] lg:h-[168px]"
                >
                  <p>Turquoise blue</p>
                  <p class="mt-1">#06AED5</p>
                  <p>6, 174, 213</p>
                </div>
                <div
                  class="h-[92px] bg-[#F1F1F1] text-black flex flex-col items-center justify-center text-sm p-4 rounded-md lg:w-[137.33px] lg:h-36"
                >
                  <p>Gray</p>
                  <p class="mt-1">#F1F1F1</p>
                  <p>241, 241, 241</p>
                </div>
                <div
                  class="h-[92px] bg-[#FFF1D0] text-black flex flex-col items-center justify-center text-sm p-4 rounded-md lg:w-[137.33px] lg:h-[168px]"
                >
                  <p>Cream</p>
                  <p class="mt-1">#FFF1D0</p>
                  <p>255, 241, 208</p>
                </div>
                <div
                  class="h-[92px] bg-[#262626] text-white flex flex-col items-center justify-center text-sm p-4 rounded-md lg:w-[137.33px] lg:h-36"
                >
                  <p>Jet black</p>
                  <p class="mt-1">#262626</p>
                  <p>38, 38, 38</p>
                </div>
                <div
                  class="h-[92px] bg-[#333333] text-white flex flex-col items-center justify-center text-sm p-4 rounded-md lg:w-[137.33px] lg:h-[168px]"
                >
                  <p>Slate grey</p>
                  <p class="mt-1">#333333</p>
                  <p>51, 51, 51</p>
                </div>
              </div>
              <p>
                The Gasfleet Engineering brand guide serves as a blueprint for
                maintaining consistency and coherence across all brand
                touchpoints. By adhering to these guidelines, we ensure that our
                brand identity remains strong, recognizable, and aligned with
                our values and objectives. For further inquiries or assistance,
                please contact our marketing department at
                Gasfleetengineering[Contact Information]
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>