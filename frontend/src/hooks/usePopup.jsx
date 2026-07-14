import { useContext } from "react";
import { PopupProvider } from "../context/popupContext";

export const usePopup = () => {
  const context = useContext(PopupProvider);

  if (!context) {
    throw new Error("usePopUp must be used withtin PopUpProvider");
  }

  return context;
};
