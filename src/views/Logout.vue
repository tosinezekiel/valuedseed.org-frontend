<template>
	<div>
		Bye
	</div>
</template>

<script type="text/javascript">
	export default{
		methods:{
			init(){
				let currentObj = this;
				let data = [];
			     data = {
			        'id': null,
			        'name': null,
			        'token': null,
			        'role': null,
			        'status': 0
			    };
			    const auth = 'Bearer '+ this.$store.getters.isLogged;
			    this.$http({ 
			    	method: 'POST',
			    	'url': 'http://api.valuedseed.org/api/logout',
			    	"headers":{
			    		'Authorization': auth
			    	}
			    }).then(response => {      
			    	console.log(response);
			    });

			    	this.$store.commit('init',data);
			    	this.$store.commit('upload_image',null);
			    	window.location="/login";
			    currentObj.$cookies.remove('vs_authenticated');
			}
		},
		mounted(){
			this.init();
		}
	};
</script>