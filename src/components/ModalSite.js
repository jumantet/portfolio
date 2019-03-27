import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
class ModalSite extends React.Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Site"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {this.props.label}
              {this.props.link ? (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={this.props.link}
                >
                  <p
                    id="buttonVisit"
                    style={{
                      ...this.props.buttonStyle,
                      marginLeft: "50px",
                      backgroundColor: "none",
                      fontFamily: "Archivo",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "30px",
                      width: "100px",
                      borderRadius: "15px",
                      cursor: "pointer"
                    }}
                  >
                    Visit
                  </p>
                </a>
              ) : null}
            </div>

            <i onClick={this.props.closeModal} className="fas fa-times" />
          </div>
          {this.props.description}
          <ul className="tagSkills" style={{ padding: 0 }}>
            {this.props.skills
              ? this.props.skills.map((skill, index) => {
                  return (
                    <li
                      className="tags"
                      style={{ flex: "none", width: "auto", padding: "0 10px" }}
                      key={index}
                    >
                      {skill}
                    </li>
                  );
                })
              : null}
          </ul>
          <h4>Demo</h4>
        </Modal>
      </div>
    );
  }
}

export default ModalSite;
