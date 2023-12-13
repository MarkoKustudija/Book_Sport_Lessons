// import { useState } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import UpcomingSessions from "../sessions/UpcomingSessions";
import Button from "../ui/Button";

function MainHeader() {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  const showUpcomingSessions = () => {
    setUpcomingSessionsVisible(true);
  };


  const hideUpcomingSession = () => {
    setUpcomingSessionsVisible(false);
  }
  return (
    <>
      {upcomingSessionsVisible && (
        <UpcomingSessions onClose={ hideUpcomingSession}/>
      )}
      <header id="main-header">
        <NavLink to="/">
          <h1>Learn Sports </h1>
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
