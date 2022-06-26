import { useRef, Children, cloneElement } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  showModal: boolean,
  children: any,
  toggleModalVisibility: any,
};

const modalRoot = document.getElementById('modal-root') as Element;

export const Modal = ({ showModal, children, toggleModalVisibility }: ModalProps) => {
  const modalRef: any = useRef();
  const modalElementClassList = showModal ? 'modal animate show-modal' : 'modal animate';

  const handleModalToggle = (evt) => {
    evt.preventDefault();
    modalRef.current.classList.toggle('show-modal');
    toggleModalVisibility();
  };
    
  return ReactDOM.createPortal(
    <div className={modalElementClassList} ref={modalRef}>
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        {Children.map(children, (child, index) => {
          const newChildComponent = cloneElement(child, {
            key: index,
            handleModalToggle
          });

          return newChildComponent;
        })}
      </div>
    </div>,
    modalRoot
  )
};