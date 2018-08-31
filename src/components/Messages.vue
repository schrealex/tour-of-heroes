<template>
  <div>
    Message Service
    <div v-if="messageService.messages.length">

      <h2>Messages</h2>
      <button class="clear" v-on:click="messageService.clear()">clear</button>
      <div v-for='message of messageService.messages'>{{ message }}</div>

    </div>
  </div>
</template>

<script>
	import MessageService from '../service/MessageService';

	export default {
		name: 'Messages',
		data() {
			return {
				messageService: MessageService
			};
		}
	};
</script>

<style scoped>
  h2 {
    color: red;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }

  body {
    margin: 2em;
  }

  body, input[text], button {
    color: crimson;
    font-family: Cambria, Georgia;
  }

  button.clear {
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: auto;
  }

  button.clear {
    color: #888;
    margin-bottom: 12px;
  }
</style>
