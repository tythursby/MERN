import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import { StyledCard, StyledHeader, StyledForm, StyledDiv, StyledFooter } from "./style";

const ModalOverlay = (props) => {
  const { header, onSubmit, children, footer } = props;
  const modalContent = (
    <StyledCard modal>
      <StyledHeader>
        <h2>{header}</h2>
      </StyledHeader>
      <StyledForm onSubmit={onSubmit || ((event) => event.preventDefault)}>
        <StyledDiv>{children}</StyledDiv>
      </StyledForm>
      <StyledFooter>{footer}</StyledFooter>
    </StyledCard>
  );
  return ReactDOM.createPortal(modalContent, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const { show, onCancel } = props;
  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition in={show} mountOnEnter unmountOnExit timeout={200}>
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
