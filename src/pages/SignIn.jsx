import { FcGoogle } from "react-icons/fc";
import { FaSignOutAlt } from "react-icons/fa";
import { ImAppleinc } from "react-icons/im";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/novaSlice";
import { ToastContainer, toast } from 'react-toastify';


function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate('/')
        }, 1500)
      }).catch((error) => {
        console.error(error.message);
      });
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser())
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const userInfo = useSelector((state) => state.novamart.userInfo);
  return (
    <div className="w-full">
      <div className=' border-[1px] flex flex-col items-center justify-center w-[80%] lg:w-1/4 text-center mx-auto gap-4 my-10 py-8 rounded-md border-gray-400 box'>
        <div>

          {
            userInfo ? <p className=" font-bold font-sans">Sign out from NovaMart</p>
              : <p className=" font-bold font-sans">Sign in to NovaMart</p>
          }
          {
            userInfo ? <p className="text-gray-600 text-sm py-2">Thanks for shopping with us</p>
              : <p className="text-gray-600 text-sm py-2">sign in to pick up where you left off</p>
          }

        </div>

        {
          userInfo ?
            <div className="flex">
              <div onClick={handleLogout} className="flex transition-colors duration-500 hover:active:bg-gray-500 items-center gap-2 border-[1px] border-gray-400 px-12 py-1 bg-slate-800 hover:text-slate-900 text-white rounded-lg box cursor-pointer hover:bg-gray-200">
                <p>Sign Out</p>
                <FaSignOutAlt />
              </div>
            </div>
            :
            <div onClick={handleGoogleLogin} className="flex transition-colors duration-500 hover:active:bg-gray-500 items-center gap-2 border-[1px] border-gray-400 px-12 py-1 rounded-lg text-gray-600 box cursor-pointer hover:bg-gray-200">
              <FcGoogle />
              <p>Sign in with Google</p>
            </div>
        }

      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default SignIn