import { useState } from "react";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import {FadeLoader} from "react-spinners"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function LoginForm({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const[loading,setLoading]=useState(false)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    if (email === "career@admin.com" && password === "admin2468") {
      toast.success("Successfully Login!", {
        position: "top-right",
      });
      setLoading(true)
      setTimeout(() => {
        
        setIsAuth(true); // Notify the parent component
      }, 2000);
    } else {
      toast.error("Enter correct email or password!", {
        position: "top-right",
      });
    }
    setEmail(""); // Clear the email state
    setPassword(""); // Clear the password state
  };

  return (
    <>
    {loading?
    <p><FadeLoader
  color="#2e64b5"
  height={20}
  margin={2}
  speedMultiplier={2}
  width={6}
/></p>
    :
    <Card className="w-full max-w-md p-6 space-y-4 mt-[10%]">
    
      <h2 className="text-2xl font-bold text-center text-blue-900">Admin Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={email} // Bind state to the input
            onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
          <Input
            type="password"
            placeholder="Password"
            value={password} // Bind state to the input
            onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
        </div>
        <button
          type="submit"
          className="w-[40%] py-2 text-white bg-blue-900 rounded-lg mx-[30%]"
          >
          Login
        </button>
        
      </form>
    </Card>}
    <ToastContainer autoClose={2000} />
          </>
  );
}
