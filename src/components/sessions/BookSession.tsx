import { FormEvent, useEffect, useRef } from "react";
import Button from "../ui/Button";
import Modal, { ModalHandler } from "../ui/Modal";
import { Session, useSessionsContext } from "../../store/sessions-context";
import Input from "../ui/Input";

type BookSessionProps = {
  session: Session;
  onDone: () => void;
};

function BookSession({ session, onDone }: BookSessionProps) {
  const sessionCtx = useSessionsContext();

  const modal = useRef<ModalHandler>(null);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    // to do Session ctx
    sessionCtx.bookSession(session);
    // e.currentTarget.reset();
    onDone();
  };
  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmitForm}>
        {/* <label>Yuor Name</label>
          <input id="name" name="name" type="text" required />
          <label>Your email</label>
          <input id="email" name="email" type="email" required /> */}
        <Input id="name" label="Your Name" name="name" type="text" required />
        <Input
          id="email"
          label="Your Email"
          name="email"
          type="email"
          required
        />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button> Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}

export default BookSession;
