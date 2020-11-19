const state = {
    people: [
        {
            id:1,
            name:"Max",
            age: 39,
            gender: "male"
        },
        {
            id:2,
            name: "Kelly",
            age: 39,
            gender: "female"
        }, 
        {
            id:3,
            name:"Naomi", 
            age: 14,
            gender: "female"
        }, 
        {
            id:4,
            name:"Carl", 
            age: 9,
            gender: "male"
        }
    ]
}; 

const getters = {
    menInFamily: state => {
        return state.people.filter(person => person.gender === "male")
    },
    allPeople: (state) => state.people
};

const mutations = {};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
}