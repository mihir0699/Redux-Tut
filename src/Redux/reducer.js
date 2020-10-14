const intital_state = {
    blogs:[]
}

export const Reducer =(state = intital_state, action)=>{
    switch(action.type){
        case "DATA_LOADED":
            return{
                ...state
            }
        case "BLOG_ADDED":{
            return{
                ...state,
                blogs : [...state.blogs, action.payload]
            }
        }
        case "BLOG_REMOVED":
            let x = state.blogs;
            let y = []
            x.forEach((blog)=>{
                if(blog.id!==action.payload)
                y.push(blog);
            })
            return{
                ...state,
                blogs: y
            }
        default:
            return state
    }
}