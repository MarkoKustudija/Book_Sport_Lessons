import { useEffect, useRef } from "react";
import Modal, { ModalHandler } from "../ui/Modal";
import { useSessionsContext } from "../../store/sessions-context";
import UpcomingSession from "./UpcomingSession";
import Button from "../ui/Button";

type UpcomingSessionsProps = {
  onClose: () => void;
};

function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandler>(null);

  const sessionsCtx = useSessionsContext();
  console.log(sessionsCtx);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleCancelSession = (sessionId: string) => {
    sessionsCtx.cancelSession(sessionId);
  };

  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions</p>}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
}

export default UpcomingSessions;
