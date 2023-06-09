
const blogState = [];

const blogReducers = (state = blogState,action) => {
    switch (action.type) {
        case  'ADD BLOG' : return [
            ...state, action.blog
        ]
        case 'REMOVE_BLOG' : 

        return state.filter(({id})=>{
            return id !==action.id;
        })

        case 'EDIT_BLOG' : 
        return  state.map ((blog)=>{
            if (blog.id===action.id){
                 return {...blog, ...action.updates}
            } else {
                return blog;
            }


        })
        
        case 'SET_BLOGS':
            return action.blogs;


        default : return state;

        }
}

export default blogReducers ;