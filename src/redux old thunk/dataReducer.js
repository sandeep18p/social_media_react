import { FETCH_REQUEST_LOAD, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from "./actionTypes";

const initialState={
  loading:false,
  posts:[],
  error:null
}

const dataReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_REQUEST_LOAD:
            return {...state,loading:true,error:null}
        case FETCH_REQUEST_SUCCESS:
            return {...state,loading:false,posts:action.payload}
        case FETCH_REQUEST_FAILURE:
            return {...state,loading:false,error:action.payload}
        default:
            return state            

    }
}

export default dataReducer;