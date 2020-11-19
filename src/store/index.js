import { createStore } from "vuex";
import food from './modules/food';
import people from './modules/people'
import todos from './modules/todos'

export default createStore({
  modules: {
    food,
    people, 
    todos
  }
});
