import { useState } from "react";
import { LoginForm } from "../components/admin/LoginForm";
import { JobManagement } from "../components/admin/JobManagement";

const AdminCareer=()=> {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="min-h-screen bg-background py-12 px-4 mt-[10%]">
      <div className="max-w-4xl mx-auto">
        {!isAuth ? (
          <div className="flex justify-center">
            <LoginForm setIsAuth={setIsAuth}/>
          </div>
        ) : (
          <JobManagement />
        )}
      </div>
    </div>
  );
}
export default AdminCareer