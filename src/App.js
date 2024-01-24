import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from './firebase'
const style ={
  bg:`h-screen w-screen  bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`
}

function App() {

  const [user]=useAuthState(auth);
  return (
   <div className={style.bg}>
    {!user ?<LoginPage/> :<HomePage/>}

   </div>
  );
}

export default App;
