const {intializeApp} from "firebase/app"
const {getAuth,GoogleAuthProvider} from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyAW1PPU8V_IFfhUvX9BttQgzxk9aaCkBNc",
    authDomain: "todo-app-ecd96.firebaseapp.com",
    projectId: "todo-app-ecd96",
    storageBucket: "todo-app-ecd96.appspot.com",
    messagingSenderId: "949216469652",
    appId: "1:949216469652:web:fc20160fecb5c0b550ca81",
    measurementId: "G-GDM6NFQKR0"
  };

  intializeApp(firebaseConfig);
  const auth=getAuth();
  const provider =new GoogleAuthProvider();
  export {auth,provider}