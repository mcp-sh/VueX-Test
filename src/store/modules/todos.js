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
    }
};

const mutations = {
    populateTodos(state, todos) {
        state.todos = todos
    }
};

const actions = {
    async getTodos({ commit }) {
        const response = await axios.get('http://localhost:3000/todos');
        console.log(response.data)
        commit('populateTodos', response.data)
    }
};


export default {
    state,
    getters,
    mutations,
    actions
}