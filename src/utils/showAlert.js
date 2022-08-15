import { DELAY_ALERT } from "./copy";

export const getAlert = (setAlert, setMessageAlert) => {
  const showAlert = (message) => {
    setAlert(true);
    setMessageAlert(message);
    setTimeout(() => {
      setAlert(false);
    }, DELAY_ALERT);
  };
  return { showAlert };
};
