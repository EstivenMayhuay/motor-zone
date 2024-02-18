import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { Modal } from "react-bootstrap";

export const ModalPromocion = () => {
    const [modalPromociones, setModalPromociones] = useState(true);

    return <>
        <Modal show={modalPromociones} centered>
            <Modal.Body className="d-flex align-items-center justify-content-center position-relative">
                <span onClick={() => setModalPromociones(false)} className="position-absolute end-0 top-0 pe-4"><FontAwesomeIcon icon={faClose} size="xl" /></span>
                <div className="d-flex flex-column gap-2 position-relative align-items-center">
                    <div className="position-absolute rounded-circle" style={{width: '320px', height: '320px', background: 'rgba(0, 0, 0, 0.3)'}}></div>
                    <img src="/images/bg-contactanos.jpg" alt="" width={320} height={320} className="rounded-circle" />
                    <h2 className="fw-bold text-white position-absolute text-center" style={{transform: 'translateY(80px)'}}>Solicita nuestra <br></br> Asesoria</h2>
                    <a target="_blank" rel="Motor Zone Whatsapp noreferrer" href="https://wa.me/920288419" className="btn btn-success" style={{transform: 'translate(0, -140px)'}}>Solicitar Asesoria</a>
                </div>
            </Modal.Body>
        </Modal>
    </>
}