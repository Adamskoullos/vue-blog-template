import { ref } from '@vue/reactivity'

const getPosts = () => {
    
    const posts = ref([]);
    const error = ref(null);
    const uri = 'http://localhost:3000/posts';

    const load = async () => {
      try{
        let data = await fetch(uri)
        if(!data.ok){
          throw Error('No data available');
        }
        posts.value = await data.json();
      }
      catch(err){
        error.value = err.message; 
        console.log(error.value);
      }
    }

    return { posts, error, load }
}

export default getPosts

