import { ref } from '@vue/reactivity'
import { fStore } from '../firebase/config'

const getPost = (id) => {
    
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
      try{
        const res = await fStore.collection('posts').doc(id).get()
        
        if(!res.exists){
          throw Error('That post does not exist')
        }
        
        post.value = { ...res.data(), id: res.id }
      }
      catch(err){
        error.value = err.message; 
        console.log(error.value);
      }
    }

    return { post, error, load }
}

export default getPost




