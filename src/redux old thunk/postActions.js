import { FETCH_REQUEST_LOAD, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from "./actionTypes";

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_REQUEST_LOAD });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
    //   console.log(1);
    //   console.log(data);
    if(!data.length){
        throw new Error("Something went wrong! Try again.")
    }

    data=data.map((item)=>{
        item.img = `https://picsum.photos/200?random=${item.id}`;
        return item;
    })
     

      dispatch({ type: FETCH_REQUEST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_REQUEST_FAILURE, payload: error.message });
    }
  };
};
