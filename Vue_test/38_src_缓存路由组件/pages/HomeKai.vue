<template>
    <div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<keep-alive include="NewsKai">
				<!-- <keep-alive :include='["NewsKai","MessageKai"]'> 通过数组形式，可以写多个-->
				<!-- <keep-alive include> 不设置参数，意思为可以缓存全部-->
				
				<router-view></router-view>
			</keep-alive>
			
		</div>
	</div>
</template>

<script>
    export default {
        name:'HomeKai',
    }
</script>

<style>

</style>