import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAcdLaH8nMV6w6rZiB4zgGiFTGlwp0WQV0",
    authDomain: "vue-firebase-1a5a9.firebaseapp.com",
    projectId: "vue-firebase-1a5a9",
    storageBucket: "vue-firebase-1a5a9.appspot.com",
    messagingSenderId: "10752784733",
    appId: "1:10752784733:web:77171b002c42661475d0b4"
  };

firebase.initializeApp(firebaseConfig)

const fStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { fStore, timestamp }


