import { createStore } from "vuex";
import User from './moduels/user.module'

const store = createStore({
    namespaced:true,
    
    modules:{
        User,
    }
})

export default store