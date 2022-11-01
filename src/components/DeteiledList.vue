<script setup>
import { ref } from "vue";
const deteile = ref(false);
</script>

<template>
  <div class="bg-[#FFFFFF] absolute inset-x-0 top-0 z-40">
    <div class="flex justify-center text-[#3A4562] py-[56px]">
      <div class="max-w-[721px] mr-[60px]">
        <div
          class="flex items-center justify-between border-b-2 pb-2 mb-[39px]"
        >
          <h2 class="text-[28px] font-bold">Job Details</h2>
          <div class="flex gap-2">
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
        <div class="flex mb-[7px]">
          <div class="max-w-[500px]">
            <h3 class="text-[24px] text-bold">
              rbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
              Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
              Fachärztin für Arbeitsmedizin (m/w/d)
            </h3>
          </div>
          <div>
            <h3 class="text-[20px]">€ 54 000—60 000</h3>
            <p class="text-[18px]">Brutto, per year</p>
          </div>
        </div>
        <p class="mb-[7px]">Posted 2 days ago</p>

        <h2 class="text-[18px] mb-[20px]">
          At WellStar, we all share common goals. That’s what makes us so
          successful – and such an integral part of our communities. We want the
          same things, for our organization, for our patients, and for our
          colleagues. As the most integrated healthcare provider in Georgia,
          this means we pride ourselves on investing in the communities that we
          serve. We continue to provide innovative care models, focused on
          improving quality and access to healthcare.
        </h2>
        <br />
        <h4 class="text-[20px] font-bold mb-[10px]">Responsopilities</h4>
        <h2>
          <p>
            Wellstar Medical Group, a physician-led multi-specialty group in
            Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
            surgeon to join their existing cardiovascular program. This is an
            opportunity to play a key role on a multidisciplinary team of
            cardiologists and surgeons.
          </p>

          <br />
          <p>
            The ideal candidate will have five or more years of experience in
            cardiac surgery. This candidate should be facile with off-pump
            revascularization, complex aortic surgery, minimally invasive valve
            and valve repair, transcatheter valve replacement, surgical atrial
            fibrillation ablation, ventricular assist device placement, and
            extra corporeal membrane oxygenation.
          </p>

          <br />
          <p>
            Wellstar is one of the largest integrated healthcare systems in the
            Southeast with 11 hospitals in Atlanta metro region. With two open
            heart programs at Kennestone Regional Medical Center and Atlanta
            Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac
            procedures per year. The cardiac service line is the only center in
            Georgia with the Joint Commission’s Comprehensive Cardiac Center
            certification.
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
              class="
                bg-blue-rgba
                border-2 border-blue-border-rgba
                py-[16px]
                px-[30px]
                rounded-lg
                font-bold
              "
            >
              Full time
            </div>
            <div
              class="
                bg-blue-rgba
                border-2 border-blue-border-rgba
                py-[16px]
                px-[30px]
                rounded-lg
                font-bold
              "
            >
              Part time
            </div>
            <div
              class="
                bg-blue-rgba
                border-2 border-blue-border-rgba
                py-[16px]
                px-[30px]
                rounded-lg
                font-bold
              "
            >
              Temporary
            </div>
          </div>
          <h4 class="mb-2">Benefits</h4>
          <div class="flex gap-2 mb-[66px]">
            <div
              class="
                bg-yellow-rgba
                text-[#988B49]
                border-2 border-[#FFCF00]
                py-[16px]
                px-[30px]
                rounded-lg
                font-bold
              "
            >
              Full time
            </div>
            <div
              class="
                bg-yellow-rgba
                text-[#988B49]
                border-2 border-[#FFCF00]
                py-[16px]
                px-[30px]
                rounded-lg
                font-bold
              "
            >
              Part time
            </div>
            <div
              class="
                bg-yellow-rgba
                text-[#988B49]
                border-2 border-[#FFCF00]
                py-[16px]
                px-[30px]
                rounded-lg
                font-bold
              "
            >
              Temporary
            </div>
          </div>
          <h4 class="text-[32px] font-bold border-b-2 mb-[12px]">
            Attached images
          </h4>
          <div class="mb-[89px]">
            <div>
              <img class="rounded-lg mr-2" src="../img/Bitmap.svg" alt="" />
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
          "
        >
          <img class="mr-4" src="../img/Arrow.svg" />
          <h4 @click="deteile">RETURN TO JOB BOARD</h4>
        </button>
      </div>

      <div>
        <div class="bg-[#2A3047] relative text-[#E7EAF0] text-[20px]">
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
              Department name.University
              <br />
              Hospital Giessen.
            </h4>
            <div class="flex items-baseline mb-2">
              <img class="mr-2" src="../img/Combined_Shape.svg" />
              <h4>AKH Wien, 1090 Wien, Währinger Gürtel 18-20</h4>
            </div>
            <h4>+43 (01) 40400-12090,</h4>
            <h4>post_akh_diz@akhwien.at</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
</style>