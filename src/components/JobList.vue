<script setup>
import { onMounted, ref } from "vue";
import { postsApi, GetPosts, loader } from "../postApi";
import Loader from "../components/Loader.vue";
import DeteiledList from "./DeteiledList.vue";

const posts = postsApi;
const spinner = loader;
const deteile = ref(false);
const objectDeteile = ref(null);

const Deteils = (index, post) => {
  deteile.value = true;
  objectDeteile.value = post;
  console.log(objectDeteile.value);
};

onMounted(() => {
  GetPosts();
});
</script>

<template>
  <div>
    <Loader v-if="spinner" />
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="flex items-center flex-col gap-2 p-2"
    >
      <div
        class="
          grid grid-cols-4
          sm:grid-cols-8
          col-auto
          items-center
          relative
          w-[90%]
          rounded-lg
          bg-[#FFFFFF]
          shadow-xl
          py-[24px]
          px-[16px]
          bg-[#EFF0F5]
          sm:bg-white
        "
      >
        <div
          class="
            w-[85px]
            sm:justify-self-center
            mr-[24px]
            col-start-1 col-end-2
          "
        >
          <img class="rounded-full" src="../img/Hospital_image.svg" />
        </div>

        <div class="col-start-2 col-end-7 ml-4 sm:ml-0">
          <div class="">
            <h2
              @click="Deteils(index, post)"
              class="
                cursor-pointer
                sm:text-[20px] sm:font-bold
                text-[#3A4562]
                font-normal
              "
            >
              {{ post.title }}
            </h2>
          </div>
          <div>
            <h4 class="text-[#878D9D] pt-1">
              {{ post.name }}
            </h4>
          </div>

          <div class="flex gap-2 pt-1">
            <img src="../img/Combined_Shape.svg" />
            <h4 class="text-[#878D9D]">{{ post.address }}</h4>
          </div>
        </div>

        <div
          class="
            mx-[24px]
            col-start-2 col-end-4
            rows-start-1
            sm:col-start-7 sm:col-end-7
          "
        >
          <img src="../img/Rating.svg" />
        </div>

        <div>
          <div class="flex flex-col m-w-[138px]">
            <div class="self-end p-2">
              <img class="self-end" src="../img/Rectangle_31.svg" />
            </div>
            <div class="text-center mt-[40px] text-[#878D9D]">
              <h4>Posted 2 days ago</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="deteile" class="bg-[#FFFFFF] absolute inset-x-0 top-0 z-40">
      <div
        class="
          flex
          sm:flex-row
          flex-col
          justify-center
          text-[#3A4562]
          py-[56px]
        "
      >
        <div class="max-w-[721px] sm:mr-[60px] px-4">
          <div
            class="
              flex
              items-center
              justify-between
              flex-col
              sm:flex-row
              border-b-2
              pb-2
              mb-[39px]
            "
          >
            <h2
              class="
                text-[28px]
                px-1
                font-bold
                mb-8
                self-start
                sm:self-center sm:mb-0
              "
            >
              Job Details
            </h2>
            <div class="flex px-1 self-start sm:self-center gap-2">
              <img src="../img/Rectangle_31.svg" />
              <h4 class="text-[18px]">Save to my list</h4>
              <img src="../img/Shape_icon.svg" />
              <h4 class="text-[18px]">Share</h4>
            </div>
          </div>
          <button
            class="
              py-[18px]
              px-[30px]
              text-white
              bg-[#384564]
              rounded-lg
              mb-[32px]
            "
          >
            APPLY NOW
          </button>
          <div class="flex justify-between sm:flex-row flex-col mb-[7px]">
            <div class="max-w-[500px]">
              <h3 class="text-[24px] font-bold">
                {{ objectDeteile.title }}
              </h3>
            </div>
            <div>
              <h3 class="text-[20px]">€ {{ objectDeteile.salary }}</h3>
              <p class="text-[18px]">Brutto, per year</p>
            </div>
          </div>
          <p class="mb-[7px]">Posted 2 days ago</p>

          <h2 class="text-[18px] mb-[20px]">
            {{ objectDeteile.description }}
          </h2>
          <br />
          <h4 class="text-[20px] font-bold mb-[10px]">Responsopilities</h4>
          <h2>
            <p>
              Wellstar Medical Group, a physician-led multi-specialty group in
              Atlanta, Georgia, is currently recruiting for a BC/BE
              cardiothoracic surgeon to join their existing cardiovascular
              program. This is an opportunity to play a key role on a
              multidisciplinary team of cardiologists and surgeons.
            </p>

            <br />
            <p>
              The ideal candidate will have five or more years of experience in
              cardiac surgery. This candidate should be facile with off-pump
              revascularization, complex aortic surgery, minimally invasive
              valve and valve repair, transcatheter valve replacement, surgical
              atrial fibrillation ablation, ventricular assist device placement,
              and extra corporeal membrane oxygenation.
            </p>

            <br />
            <p>
              Wellstar is one of the largest integrated healthcare systems in
              the Southeast with 11 hospitals in Atlanta metro region. With two
              open heart programs at Kennestone Regional Medical Center and
              Atlanta Medical Center, Wellstar cardiac surgeons perform over
              1200 cardiac procedures per year. The cardiac service line is the
              only center in Georgia with the Joint Commission’s Comprehensive
              Cardiac Center certification.
            </p>
            <br />
            <h4 class="text-[20px] font-bold mb-[10px]">
              Compensation & Benefits:
            </h4>
            <h4>Our physicians enjoy a wide range of benefits, including:</h4>
            <ul class="list-disc">
              <li>Very competitive compensation package with bonuses</li>
              <li>Medical, Dental, and Vision Insurance</li>
              <li>Occurrence-based Malpractice Coverage</li>
              <li>
                Short-term and Long-term Disability Insurance and life insurance
              </li>
            </ul>
          </h2>
          <button
            class="
              py-[18px]
              px-[30px]
              text-white
              bg-[#384564]
              rounded-lg
              mt-[32px]
              mb-[66px]
            "
          >
            APPLY NOW
          </button>
          <div>
            <div>
              <h2 class="text-[32px] font-bold border-b-2 mb-[15px]">
                Additional info
              </h2>
            </div>
            <h4 class="mb-2">Employment type</h4>
            <div class="flex gap-2 text-[#55699E]">
              <div
                v-for="employment in objectDeteile.employment_type"
                :key="employment"
                class="
                  bg-blue-rgba
                  border-2 border-blue-border-rgba
                  py-[16px]
                  px-[30px]
                  rounded-lg
                  sm:font-bold
                "
              >
                {{ employment }}
              </div>
            </div>
            <h4 class="mb-2">Benefits</h4>
            <div class="flex jusify-center gap-2 mb-[66px]">
              <div
                v-for="benefits in objectDeteile.benefits"
                :key="benefits"
                class="
                  bg-yellow-rgba
                  text-[#988B49]
                  border-2 border-[#FFCF00]
                  py-[16px]
                  px-[30px]
                  rounded-lg
                  sm:font-bold
                "
              >
                {{ benefits }}
              </div>
            </div>
            <h4 class="text-[32px] font-bold border-b-2 mb-[12px]">
              Attached images
            </h4>
            <div class="flex sm:mb-[89px] mb-[24px]">
              <div
                v-for="pictures in objectDeteile.pictures"
                :key="pictures"
                class=""
              >
                <img
                  class="rounded-lg mr-2 w-[200px] h-[123px]"
                  :src="pictures"
                  alt=""
                />
              </div>
            </div>
          </div>
          <button
            class="
              flex
              justify-between
              items-center
              py-[18px]
              px-[26px]
              bg-slate-300
              text-[#384564]
              rounded-lg
              sm:mb-0
              mb-16
            "
          >
            <img class="mr-4" src="../img/Arrow.svg" />
            <h4 @click="deteile = false">RETURN TO JOB BOARD</h4>
          </button>
        </div>

        <div class="sm:p-0 p-2">
          <div
            class="bg-[#2A3047] relative rounded-lg text-[#E7EAF0] text-[20px]"
          >
            <img class="r" src="../img/Map.svg" alt="" />
            <img
              class="
                absolute
                bottom-[140px]
                left-[50px]
                text-[#D8D8D8]
                w-[26px]
                h-[36px]
              "
              src="../img/Combined_Shape.svg"
            />
            <div class="max-w-[277px] absolute top-[8px] left-[70px]">
              <h4 class="mb-2">
                Department name.
                <br />
                {{ objectDeteile.name }}
              </h4>
              <div class="flex items-baseline mb-2">
                <img class="mr-2" src="../img/Combined_Shape.svg" />
                <h4>{{ objectDeteile.address }}</h4>
              </div>
              <h4>{{ objectDeteile.phone }},</h4>
              <h4>{{ objectDeteile.email }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>