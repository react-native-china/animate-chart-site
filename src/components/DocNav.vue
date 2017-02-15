<template>
	<nav>
		<ul>
			<li v-for="(item,key) in menulist">
				<a :href="key" v-link="{path:key}">{{ item }}</a>
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
					docs:"起步",
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

	nav{
		padding: 10px 100px 0 100px;
	}
</style>