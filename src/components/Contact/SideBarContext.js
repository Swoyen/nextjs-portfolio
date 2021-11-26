import { createContext, useEffect, useState } from "react";

export const SideBarContext = createContext();

export const SideBarProvider = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const disableScroll = () => {
    document.body.classList.add("stop-scrolling");
  };

  const enableScroll = () => {
    document.body.classList.remove("stop-scrolling");
  };

  useEffect(() => {
    if (isVisible) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isVisible]);

  return (
    <SideBarContext.Provider value={[isVisible, setIsVisible]}>
      {props.children}
    </SideBarContext.Provider>
  );
};
