import { useState } from "react";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import {FadeLoader} from "react-spinners"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function LoginForm({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
 const[loading,setLoading]=useState(false)
 const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    const endpoint = isUpdatePassword ? "https://mls-b.vercel.app/admin/update-password" : "https://mls-b.vercel.app/admin/login";
    const payload = isUpdatePassword
      ? { email, currentPassword: password, newPassword }
      : { email, password };
  
    try {
      const response = await fetch(`${endpoint}`, {
        method: isUpdatePassword ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Action successful!");
        if (isUpdatePassword){
          setIsUpdatePassword(false); 
        }
        if (!isUpdatePassword){
          localStorage.setItem("isAuth", "true");
          setIsAuth(true); 
        } 
      } else {
        toast.error(data.message || "An error occurred");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
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
    
      <h2 className="text-2xl font-bold text-center text-blue-900">{isUpdatePassword ? "Update Password" : "Admin Login"}</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
      {!isUpdatePassword && (
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Input
            type="password"
            placeholder="Password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
        </div>
      )}
      {isUpdatePassword && (
           <div className="space-y-2">
            <Input type="email" placeholder="Email"  value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Current Password" value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
            <Input type="password" placeholder="New Password" value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)}/>
          </div>
        )}
        <button
          type="submit"
          className="w-[40%] py-2 text-white bg-blue-900 rounded-lg mx-[30%]"
          >
          {isUpdatePassword ? "Update Password" : "Login"}
        </button>
      </form>
        <button
        onClick={() => setIsUpdatePassword(!isUpdatePassword)}
        className="text-blue-900 hover:underline text-sm w-full text-center"
      >
    {isUpdatePassword ? "Back to Login" : "Update Password"}
 </button>
    </Card>}
    <ToastContainer autoClose={2000} />
          </>
  );
}
