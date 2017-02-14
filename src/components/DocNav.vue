<template>
	<nav>
		<ul>
			<li v-for="item in menulist">
				<a href="good" v-link="{path:'good'}">{{ item }}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name:"wh-header",      
		data(){
			return {
				menulist:{
					index:"首页",
					usage:"起步",
					usage:"文档"
				}
			}
		}
	}
</script>

<style scoped>
	a{
		font-weight: bolder;
		color: #029df9;
		font-size: 20px;
		text-decoration:none;
	}

	ul,li{
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav > ul{
		display: flex;
	}

	nav > ul > li {
		flex:1;
	}
</style>