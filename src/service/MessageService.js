export default {
	messages: [],
	add(message) {
		this.messages.push(message);
	},
	clear() {
		this.messages = [];
	}
};
