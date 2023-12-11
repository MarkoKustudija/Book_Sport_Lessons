import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

export type ModalHandler = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};
const Modal = forwardRef<ModalHandler, ModalProps>(
  ({ children, onClose }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          if (dialog.current) {
            dialog.current.showModal(); // showModal() is a built-in method available on the <dialog> element
          }
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className="modal" onClose={onClose}>
        {children}
      </dialog>,
      document.getElementById("modal-root")!
    );
  }
);

export default Modal;
