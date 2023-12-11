import SessionItem, { SessionItemProps } from "./SessionItem";

type SessionListProps = {
  sessions: SessionItemProps[];
};

function SessionList({ sessions }: SessionListProps) {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          {/* <SessionItem
            id={session.id}
            title={session.title}
            summary={session.summary}
            image={session.image}
          /> */}
          <SessionItem {...session}/>
        </li>
      ))}
    </ul>
  );
}

export default SessionList;
