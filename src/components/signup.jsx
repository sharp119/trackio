import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState(""); // Added display name state
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password, displayName); // Pass display name to the signUp function
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-bold text-black mb-4">Sign Up</h2>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-4 rounded">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text" // Change to text type for display name
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Display Name" // Update placeholder
                            value={displayName} // Update value and onChange for display name
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Sign Up
                    </Button>
                </form>
                <div className="mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:text-blue-800">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
