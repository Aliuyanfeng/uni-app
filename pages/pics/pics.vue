<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view :class="active===index?'active':''" v-for="(item,index) in cates" @click="leftClickHandler(index,item.id)">{{item.title}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-for="(item,index) in secondData" :key="index">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 2,
				secondData: []
			}
		},
		methods: {
			async getPicsCate() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				// console.log(res)
				this.cates = res.data.message
				this.leftClickHandler(0,this.cates[0].id)
			},
			async leftClickHandler(index, id) {
				// console.log(index, id)
				this.active = index
				const res = await this.$myRequest({
					url: "/api/getimages/" + id
				})
				console.log(res)
				this.secondData = res.data.message
				// console.log(this.secondData)
			},
			previewImg(current){
				const urls = this.secondData.map(item =>{
					return item.img_url
				})
				// console.log(urls)
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getPicsCate()
			// this.leftClickHandler()
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				font-size: 30rpx;
				text-align: center;
				border-top: 1px solid #eee;
			}

			.active {
				background-color: $shop-color;
				color: #fff;
			}
		}

		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;

			.item {
				image {
					width: 530rpx;
					height: 530rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}

	}
</style>
