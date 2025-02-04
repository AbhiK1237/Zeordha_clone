import { signInWithGooglePopup } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const router = useNavigate();
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    router("/");
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default Login;
