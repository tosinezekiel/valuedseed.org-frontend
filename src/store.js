import Vue from  'vue'
import Vuex from 'vuex'
// import VueCookies from 'vue-cookies'
Vue.use(Vuex)
// import createPersistedState from "vuex-persistedstate"
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({

	plugins: [createPersistedState()],
	state:{
		cart:[],
		id: null,
		token: null,
		name: null,
		role: null,
		email: null,
		profile_img: null,
		isSignedin: false,
		cart_count: 0
	}, 
	getters:{
		getProducts:state =>{
			return state.cart;
		},
		isLogged: state => state.token,
		userName: state => state.name,
		userRole: state => state.role,
		userEmail: state => state.email,
		userID: state => state.id, 
		profile_img: state => state.profile_img,
		isAuth: state => state.isSignedin,
		cart_count: state => state.cart_count,
	},
	mutations:{
		init(state, data){
			state.id = data.id;
			state.token = data.token;
			state.name = data.name;
			state.role = data.role;
			state.email = data.email;
			state.isSignedin = data.status;
		}
	},
	actions:{
		// getImage(context, payload){

		// }
	}
}) 