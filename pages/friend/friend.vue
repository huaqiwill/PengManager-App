<template>
  <view class="u-page">
    <up-list @scrolltolower="scrolltolower">
      <up-list-item v-for="(item, index) in indexList" :key="index">
        <up-cell :title="`列表长度-${index + 1}`">
          <template #icon>
            <up-avatar shape="square" size="35" :src="item.url" customStyle="margin: -3px 5px -3px 0"></up-avatar>
          </template>
        </up-cell>
      </up-list-item>
    </up-list>
  </view>
</template>

<script setup>
  import {
    ref,
    reactive,
    onMounted,
  } from 'vue';

  const indexList = ref([]);
  const urls = [
    'https://cdn.uviewui.com/uview/album/1.jpg',
    'https://cdn.uviewui.com/uview/album/2.jpg',
    'https://cdn.uviewui.com/uview/album/3.jpg',
    'https://cdn.uviewui.com/uview/album/4.jpg',
    'https://cdn.uviewui.com/uview/album/5.jpg',
    'https://cdn.uviewui.com/uview/album/6.jpg',
    'https://cdn.uviewui.com/uview/album/7.jpg',
    'https://cdn.uviewui.com/uview/album/8.jpg',
    'https://cdn.uviewui.com/uview/album/9.jpg',
    'https://cdn.uviewui.com/uview/album/10.jpg',
  ];

  onMounted(() => {
    console.log(111);
    loadmore();
  })

  const scrolltolower = () => {
    loadmore();
  };

  const loadmore = () => {
    for (let i = 0; i < 30; i++) {
      indexList.value.push({
        url: urls[uni.$u.random(0, urls.length - 1)],
      });
    }
  };
</script>

<style lang="scss">

</style>