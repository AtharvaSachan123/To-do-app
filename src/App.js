import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from './firebase'


function App() {

  const [user]=useAuthState(auth);
  return (
   <div >
    {!user ?<LoginPage/> :<HomePage/>}

   </div>
  );
}

export default App;
