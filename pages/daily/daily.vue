<template>
	<view class="container">
		<text class="btn btn-primary mb-2 mt-2" @click="createDailyPage">添加日常</text>
		<view class="card">
			<view class="h1">名称</view>
			<img class="h-100" src="" alt="">
			<view class="d-flex justify-content-between">
				<text>早餐</text>
				<text>2024年5月1日 22:43</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	const createDailyPage = () => {
		uni.navigateTo({
			url: '/pages/daily/createDaily'
		})
	}
</script>

<style lang="scss">

</style>