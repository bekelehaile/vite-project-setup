import { createStore } from "vuex";
import user from './moduels/user.module'

const store = createStore({
    namespaced:true,
    
    modules:{
        user,
    }
})

export default store