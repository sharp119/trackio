import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { FcGoogle } from "react-icons/fc";
import { BiHide, BiShow } from "react-icons/bi";
import Logo from "../assets/logo.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
                <img src={Logo} alt="Track.io Logo" className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-black mb-4">Log In to Track.io</h2>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-4 rounded">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col text-left">
                        <label className="text-black font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex flex-col text-left">
                        <label className="text-black font-medium mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 cursor-pointer"
                            >
                                {showPassword ? <BiShow size="20px" /> : <BiHide size="20px" />}
                            </span>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Log In
                    </Button>
                </form>
                <div className="my-4 flex items-center">
                    <div className="w-1/2 border-b border-gray-300"></div>
                    <p className="mx-2 text-gray-500 font-medium">or</p>
                    <div className="w-1/2 border-b border-gray-300"></div>
                </div>
                <Button
                    className="text-black w-full  font-medium bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-lg mx-2"
                    onClick={handleGoogleSignIn}
                >
                    <div className="flex items-center justify-center">
                        <FcGoogle className="mr-2" size="24px" /> Sign in with Google
                    </div>
                </Button>
                <div className="text-center mt-4">
                    Dont have an account?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
