const state = {
    food: [
        {
        id: 11,
        name: "Lasagna", 
        rating: 5
        },
        {
        id: 12,
        name: "Pizza", 
        rating: 5
        },
        {
        id: 13,
        name: "Stinky Tofu", 
        rating: 1
        },
        {
        id: 14,
        name: "Carbonara", 
        rating: 2
        },
        {
        id: 15,
        name: "Cheesburger", 
        rating: 4
        }
    ]
};

const getters = {
  highlyRated : state => {
      return state.food.filter(food => food.rating >= 3)
  },
  allFood: state => {
      return state.food
  }
};

const mutations = {};

const actions = {};

export default {
    state, 
    getters, 
    mutations, 
    actions
}