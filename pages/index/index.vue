<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :circular="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,i) in navs" :key="i" @click="navItemClick(item.path)">
				<view :class="item.icon">
				</view>
				<text>{{item.title}}</text>
			</view>

		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goodsList :goods="goods" @goodsItemClick="goGoodsDetail"></goodsList>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [{
					icon: "iconfont icon-ziyuan",
					title: '黑马超市',
					path: '/pages/goods/goods'
				}, {
					icon: "iconfont icon-guanyuwomen",
					title: '联系我们',
					path: '/pages/contact/contact'
				}, {
					icon: "iconfont icon-tupian",
					title: '社区图片',
					path: '/pages/pics/pics'
				}, {
					icon: "iconfont icon-shipin",
					title: '学习视频',
					path: '/pages/videos/videos'
				}, ]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		components: {
			goodsList
		},
		methods: {
			//获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})

				this.swipers = res.data.message
			},
			//获取商品
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
			},
			//导航点击
			navItemClick(path) {
				console.log(path)
				uni.navigateTo({
					url: path
				})
			},
			//跳转到导航商品详情
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #FFFFFF;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot_goods {
			background-color: #eee;
			overflow: hidden;
			margin-top: 20rpx;

			.tit {
				height: 100rpx;
				line-height: 100rpx;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background-color: #FFFFFF;
				margin: 10rpx 0;
			}


		}
	}
</style>
