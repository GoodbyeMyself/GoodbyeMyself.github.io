export default {
	created () {
		let Base64 = require('js-base64').Base64;
		const user = this.$storage.get('user') ? Base64.decode(this.$storage.get('user')) : undefined;
		this.user = user ? JSON.parse(user) : {};
	}
};
