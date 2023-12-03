import { Button, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import './index.css';

export const NuestrasInstalaciones = () => {
    const instalaciones = ['img-instalaciones-6.jpeg', 'img-instalaciones-1.jpg', 'img-instalaciones-2.jpg', 'img-instalaciones-4.jpg'];
    const [openModal, setOpenModal] = useState(false);
    const [currImg, setCurrImg] = useState("");

    const handleModal = (filename) => {
        setOpenModal(true);
        setCurrImg(`./images/${filename}`);
    }

    return <>
        <div id="instalaciones" className="bg-primary-motor px-4">
            <h3 className="title fw-bold text-center text-white">Nuestras Instalaciones </h3>

            <div className="instalaciones__gallery">
                {
                    instalaciones &&
                    instalaciones.map((instalacion, iter) => (
                        <Card key={iter} className="cardPhoto border-0 rounded-lg overflow-hidden">
                            <Card.Img onClick={() => handleModal(instalacion)} variant="top" src={`./images/${instalacion}`} />
                        </Card>
                    ))
                }
            </div>
        </div>

        <Modal show={openModal} size="xl" className="modalInstalaciones" centered>
            <Modal.Header>
                <Modal.Title className="fw-bold w-100 text-center">Nuestras Instalaciones</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalInstalaciones__body overflow-hidden p-1">
                <img src={currImg} alt="" />
            </Modal.Body>
            <Modal.Footer onClick={() => setOpenModal(false)}>
                <Button className="border-0 outline-0 fw-bold bg-second-motor">Cerrar</Button>
            </Modal.Footer>
        </Modal>
    </>
}