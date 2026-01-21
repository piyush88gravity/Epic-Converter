import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top instantly when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Ensures no delay
    });

    if (typeof window.WOW === "function") {
      const wow = new window.WOW();
      wow.init();
    }
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;