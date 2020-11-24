import axios from 'axios';

const state = {
    todos: [
        // {
        //     id: 1,
        //     title: "Get shit done",
        //     completed: false
        // },
        // {
        //     id: 2,
        //     title: "Get more shit done",
        //     completed: false
        // },
        // {
        //     id: 3,
        //     title: "Relax",
        //     completed: true
        // }
    ]
};

const getters = {
    allTodos : state => {
        return state.todos
    },
    openTodos: state => state.todos.filter(todo => todo.completed === false)
};

const mutations = {
    populateTodos(state, todos) {
        state.todos = todos
    },
    newTodo(state, todo) {
        state.todos.unshift(todo)
    },
    deleteTodo(state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id)
    },
    finishTodo(state, id) {
        const index = state.todos.findIndex(todo => todo.id === id)
        state.todos[index].completed = true;
        console.log(state.todos[index].title)
    }

};

const actions = {
    async getTodos({ commit }) {
        const response = await axios.get('http://localhost:3000/todos');
        // console.log(response.data)
        commit('populateTodos', response.data)
    },
    async addTodo({ commit }, payload) {
        const response = await axios.post('http://localhost:3000/todos', {title: payload, completed: false});
        commit('newTodo', response.data)
    },
    async removeTodo({commit}, id) {
        await axios.delete(`http://localhost:3000/todos/${id}`)
        commit('deleteTodo', id)
    },
    async completeTodo({commit}, id) {
        await axios.patch(`http://localhost:3000/todos/${id}`, {completed: true})
        commit('finishTodo', id)
    }
};


export default {
    state,
    getters,
    mutations,
    actions
}