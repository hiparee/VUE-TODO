import Vue from 'vue'
import Vuex from 'vuex'

//use는 vue의 플러그인 기능 vue모든 영역에 기능을 추가하고싶을때 글로벌로
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {

          try {
            arr.push( JSON.parse( localStorage.getItem(localStorage.key(i)) ) );  
          } catch (error) {
            console.log( error );
          }
        }
      }
    }

    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload ) {
      console.log( payload.index );
      state.todoItems.splice(payload.index, 1);
      localStorage.removeItem(payload.todoItem.item);
    },
    toggleOneItem(state, payload) {
      payload.todoItem.completed = !payload.todoItem.completed;
      
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      state.todoItems = [];
      localStorage.clear();
    }
  },
}); 