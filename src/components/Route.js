import { useEffect, useState } from "react";
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const onLocationChange = () => {
    setCurrentPath(window.location.pathname);
  };
  useEffect(() => {
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  });

  // if the path in state matches the path of the component, show its contents
  return currentPath === path ? children : null;
};

export default Route;
