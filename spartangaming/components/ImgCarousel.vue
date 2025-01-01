<script setup lang="ts">
  const items = [
    '/BannerPictures/BannerPicture1.png',
    '/BannerPictures/BannerPicture2.png',
    '/BannerPictures/BannerPicture3.png',
    '/BannerPictures/BannerPicture4.png',
    '/BannerPictures/BannerPicture5.png',
    '/BannerPictures/BannerPicture6.png',
    '/BannerPictures/BannerPicture7.png',
    '/BannerPictures/BannerPicture8.png',
    '/BannerPictures/BannerPicture9.png',
    '/BannerPictures/BannerPicture10.png',
    '/BannerPictures/BannerPicture11.png',
    '/BannerPictures/BannerPicture12.png',
    '/BannerPictures/BannerPicture13.png',
    '/BannerPictures/BannerPicture14.png',
    '/BannerPictures/BannerPicture15.png',
    '/BannerPictures/BannerPicture16.png'
  ]

  const carouselRef = ref()

  onMounted(() => {
    setInterval(() => {
      if (!carouselRef.value) return

      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0)
      }

      carouselRef.value.next()
    }, 3000)
  })
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden"
  >
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
</template>