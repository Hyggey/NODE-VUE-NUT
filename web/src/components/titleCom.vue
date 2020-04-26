<!-- 首页 今日推荐 标题组件 -->
<template>
	<div class="title_box">
		<!--  -->
		<div class="center_box">
			<!-- border 框 -->
			<div class="border_box"></div>
			<!-- 顶部大字 -->
			<div class="title_top">{{title}}</div>
			<!-- 底部小字 -->
			<div class="small_text">{{introduce}}</div>
			<!-- 皇冠 -->
			<div class="crown_box" v-if="crown">
				<span class="iconfont iconhuangguan"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			title:{ // 大字标题
				type:String,
				default(){
					return '今日推荐'
				}
			},
			introduce:{ // 小字介绍
				type:String,
				default(){
					return '行业热门精品及时购'
				}
			},
			crown:{ // 皇冠
				type: Boolean,
				default(){
					return true;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.title_box{
		background:#fff;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		padding:.5rem 0;
		.center_box{
			width:13.5rem;
			padding:0.56rem;  
			position:relative;
			display: flex;
			justify-content: center;
			.border_box{
				width:100%;
				height:1.6rem;
				border:2px solid #e43a3d;
			}
			.title_top{
				position: absolute;
				top:.1rem;
				background:#fff;
				font-size: .9rem;
				color:#e43a3d;
				padding:0 1rem;
				line-height: 1rem;
			}
			.small_text{
				position: absolute;
				bottom:.12rem;
				background:#fff;
				color:#666666;
				font-size:.64rem;
				padding:0 1.5rem;
			}	
			.crown_box{
				transform-origin: 50%;
				transform: rotate(-45deg);
				position: absolute;
				top:-.3rem;
				left:0;
				color:#e43a3d;
			}
		}
	}
</style>