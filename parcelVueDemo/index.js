import Vue from "./vue.js";
import App from "./app.vue";

const app = window.addEventListener('load',() =>{
	new Vue({
		"el": "#vueapp",
		name: app,
		components: {App},
		template: `<App/>`
	})
})

export default app ;