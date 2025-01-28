import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./Modal";
import userflow from "userflow.js";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const closeModalWindow = () => {
    setOpenModal(false);
  };

    useEffect(() => {
      userflow.init(import.meta.env.VITE_USERFLOW_ENV_ID);
      userflow.identify("randomdemomail@gmail.com", {
        name: "Dailog Modal Test User",
        email: "randomdemomail@gmail.com",
      });
  }, []);


  return (
    <>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>

      <Modal isOpen={openModal} closeModal={closeModalWindow} children />
    </>
  );
}

export default App;
