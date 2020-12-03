import React, { useEffect } from "react";
import "./modal.scss";
import { connect } from "react-redux";
import { closeModal } from "../../actions/dataActions";

const Modal = (props) => {
  const { modalState, closeModal } = props;
  useEffect(() => {
    if (modalState?.isModalShowen) {
      setTimeout(closeModal, 3000);
    }
  }, [modalState?.isModalShowen, closeModal]);

  const getModalBorderColor = () => {
    return modalState?.type === "success" ? "rgb(154, 255, 2)" : "red";
  };
  return (
    <React.Fragment>
      {props.modalState?.isModalShowen && (
        <div className="modal" style={{ borderColor: getModalBorderColor() }}>
          <span>{modalState?.modalMsg}</span>
        </div>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({ modalState: state.modalState });
const mapDispatchToProps = { closeModal };
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
