import { Outlet } from "react-router-dom";
import MainHeader from "../components/navigation/MainHeader";
import SessionsContextProvider from "../store/sessions-context";

function RootElement() {
  return (
    <SessionsContextProvider>
      <main>
        <MainHeader />
      </main>
      <Outlet />
    </SessionsContextProvider>
  );
}

export default RootElement;
