import { ref } from '@vue/reactivity'

const getPost = (id) => {
    
    const post = ref([]);
    const error = ref(null);
    const uri = 'http://localhost:3000/posts/' + id;

    const load = async () => {
      try{
        let data = await fetch(uri)
        if(!data.ok){
          throw Error('This post does not exist');
        }
        post.value = await data.json();
      }
      catch(err){
        error.value = err.message; 
        console.log(error.value);
      }
    }

    return { post, error, load }
}

export default getPost


