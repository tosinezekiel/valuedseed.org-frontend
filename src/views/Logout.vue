<template>
	<div>
		Bye
	</div>
</template>

<script type="text/javascript">
	export default{
		methods:{
			init(){
				let data = [];
			     data = {
			        'id': null,
			        'name': null,
			        'token': null,
			        'role': null,
			        'status': 0
			    };
			    this.$store.commit('init',data);
			    window.location="/login";
			}
		},
		mounted(){
			this.init();
		}
	};
</script>