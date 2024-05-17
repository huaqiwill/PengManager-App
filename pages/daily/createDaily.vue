<template>
	<view class="container">
		<view class="mt-2">
			<view class="mb-2 mt-2">标题</view>
			<input class="form-control" type="text" placeholder="请输入标题" />
		</view>
		<view class="mt-2">
			<view class="mb-2 mt-2">图片</view>
			<input type="file"  />
		</view>
		<view class="mt-2">
			<view class="mb-2 mt-2">备注</view>
			<textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
		</view>
		<view class="mt-2">
			
		</view>
		<view class="mt-2">
			<button class="btn btn-primary w-100">保存</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue';

	const show = ref(false)

	const userInfo = reactive({
		name: '',
		date: ''
	})

	const rules = reactive({

	})

	// 使用 reactive 创建响应式状态  
	const state = reactive({
		showSex: false,
		model1: {
			userInfo: {
				name: 'uview-plus UI',
				sex: '',
			},
		},
		actions: [{
				name: '男'
			},
			{
				name: '女'
			},
			{
				name: '保密'
			},
		],
		rules: {
			'userInfo.name': {
				type: 'string',
				required: true,
				message: '请填写姓名',
				trigger: ['blur', 'change'],
			},
			'userInfo.sex': {
				type: 'string',
				max: 1,
				required: true,
				message: '请选择男或女',
				trigger: ['blur', 'change'],
			},
		},
		radio: '',
		switchVal: false,
	});

	// 使用 ref 创建响应式引用  
	const formRef = ref(null);

	// 定义方法  
	function sexSelect(e) {
		state.model1.userInfo.sex = e.name;
		if (formRef.value) {
			formRef.value.validateField('userInfo.sex');
		}
	}
</script>

<style>
</style>