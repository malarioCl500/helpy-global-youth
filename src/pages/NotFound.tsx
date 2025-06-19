
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Oops! Seite nicht gefunden
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Die Seite, die du suchst, existiert nicht oder wurde verschoben. 
          Aber keine Sorge - es gibt so viel anderes zu entdecken!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Zur Startseite
            </Button>
          </Link>
          
          <Link to="/projects">
            <Button variant="outline" className="w-full sm:w-auto">
              <Search className="h-4 w-4 mr-2" />
              Projekte entdecken
            </Button>
          </Link>
        </div>
        
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
