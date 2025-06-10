import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-medium metallic-text text-slate-200">404</h1>
        <p className="text-xl text-slate-200 mb-4">Oops! Page not found</p>
        <button className="px-8 py-4 bg-slate-800 text-slate-200 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
        <Link to="/" >
          Return to Home
        </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
