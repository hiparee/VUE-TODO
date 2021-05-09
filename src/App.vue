<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

import { mapState } from 'vuex'

export default {
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  computed: {
    num() {
      return this.$store.state.num;
    },
    // 위랑 아래는 동일함 vue 헬퍼 함수 
    // computed 속성으로 정의해놓으면 this.num 으로 접근이 가능함
    // mapState로도 정의해놓으면 this.num 으로 접근 가능
    // <p>{{ this.num }}</p>
    ...mapState(['num'])
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }  
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
