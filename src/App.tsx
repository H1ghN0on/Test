import React from "react";

import { AdaptiveContext } from "@contexts/AdaptiveContext";
import Header from "@components/Header";
import Content from "@components/Content";

function App() {
  const adaptiveContext = React.useContext(AdaptiveContext);

  const handleResize = () => {
    adaptiveContext.setContext({
      ...adaptiveContext,
      width: window.innerWidth,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Content />
    </div>
  );
}

export default App;
