import { FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundPage=()=> {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 text-blue-900 p-6">
            <FileQuestion className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-blue-900">
            Page not found
          </h1>
          <p className="text-gray-700 max-w-[500px]">
            Sorry, we couldn't find the page you're looking for. The page might have been deleted or does not exist.
          </p>
        </div>

        <button className="bg-blue-900 text-white px-3 py-2 rounded-lg">
          <Link to="/">
            Return Home
          </Link>
        </button>
      </div>
    </div>
  );
}
export default NotFoundPage