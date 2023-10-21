import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // sign in user in firebase
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate("/"); // redirect user to home page after successful sign in
            })
            .catch(error => {
                console.error(error);
                toast(error.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    // sign in with google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.error(error);
                toast(error.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-10">Log in to your account</h1>
                        <p>Welcome back! Sign in to your account</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white hover:text-black bg-[#ff7700]">Log In</button>
                            </div>
                        </form>
                        <div className="flex items-center justify-center gap-2 mb-8 cursor-pointer">
                            <BsGoogle className="text-[#ff7700]"></BsGoogle>
                            <p onClick={handleGoogleSignIn}>Log in with <span className="font-bold text-[#ff7700]">Google</span></p>
                        </div>
                    </div>
                    <p className="px-8 pb-4">New here? Please <Link className="text-[#ff7700] font-bold" to="/register">Register</Link></p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;