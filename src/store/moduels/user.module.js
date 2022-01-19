export default{
    state: () =>{
        name: 'test'
    },

    getters:{},

    mutations:{
        SET_NAME(state, name){
            state.name = name
        }
    },

    actions:{
        serverName({commit}, data){
            commit('SET_NAME', data)
        }
    }
}