<template>
  <div id="socials">
    <div class="flex flex-col justify-center items-center lg:pt-20 pt-10">
      <LazyNuxtImg :src="'/BannerPictures/PagesBanner.svg'" class="opacity-80"/>
      <p class="absolute lg:text-8xl text-4xl text-center font-bold">
        Socials
      </p>
    </div>

    <div class="flex flex-col justify-center items-center text-center lg:text-4xl text-lg font-semibold gap-24 lg:py-40 py-10 px-10">
      <div class="border-4 rounded-full px-6 py-3 transition ease-in duration-200 text-blue-500 border-blue-500 hover:text-white hover:bg-blue-400 hover:border-blue-400">
        <a href="https://discord.gg/fGufmzW" target="_blank"
          class="flex justify-center items-center lg:gap-4 gap-2">
          <LazyNuxtImg :src="'/icons/icons8-discord.svg'" class="lg:w-12 w-8"/>
          Join Our Discord
        </a>
      </div>
      
      <div class="border-4 rounded-full px-6 py-3 transition ease-in duration-200 text-fuchsia-500 border-fuchsia-500 hover:text-white hover:bg-fuchsia-400 hover:border-fuchsia-400">
        <a href="https://www.instagram.com/sjsuspartangaming" target="_blank"
          class="flex justify-center items-center lg:gap-4 gap-2">
          <LazyNuxtImg :src="'/icons/icons8-instagram.svg'" class="lg:w-12 w-8"/>
          Follow Our Instagram
        </a>
      </div>
      <div class="border-4 rounded-full px-6 py-3 transition ease-in duration-200 text-rose-500 border-rose-500 hover:text-white hover:bg-rose-400 hover:border-rose-400">
        <a href="mailto:sjsuspartangaming@gmail.com"
          class="flex justify-center items-center lg:gap-4 gap-2">
          <LazyNuxtImg :src="'/icons/icons8-mail.svg'" class="lg:w-12 w-8"/>
          Email Us Any Questions
        </a>
      </div>
      
      <div class="border-4 rounded-full px-6 py-3 transition ease-in duration-200 text-amber-500 border-amber-500 hover:text-white hover:bg-amber-400 hover:border-amber-400">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd08Gs1S8frwhcFCj0_DjjYtiZme6kCZ3omDIShwoL92vaikA/viewform"
          class="flex justify-center items-center lg:gap-4 gap-2">
          <LazyNuxtImg :src="'/icons/icons8-sign-up-64.png'" class="lg:w-12 w-8"/>
          Become an Official Member
        </a>
      </div>
    </div>
  </div>
</template>