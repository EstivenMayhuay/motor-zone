import { Outlet } from "react-router-dom";
import { Layout } from "../../Layout";
import { Hero } from "../../components/Hero";
import { Modal } from "react-bootstrap";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Home = () => {
    const instalaciones = ['img-instalaciones-6.jpeg', 'img-instalaciones-1.jpg', 'img-instalaciones-2.jpg', 'img-instalaciones-4.jpg'];
    const [modalPromociones, setModalPromociones] = useState(true);
    
    return <>

        <Layout>
            <Hero title={"Excelente atención para su vehículo"} img={"promociones-general.svg"} />

            <section className="py-5 sectionHome">
                <Modal show={modalPromociones} centered>
                    <Modal.Body className="d-flex align-items-center justify-content-center position-relative">
                        <span onClick={() => setModalPromociones(false)} className="position-absolute end-0 top-0 pe-4"><FontAwesomeIcon icon={faClose} size="xl" /></span>
                        <div className="d-flex flex-column gap-2 position-relative align-items-center">
                            <img src="/images/bg-contactanos.jpg" alt="" width={320} height={320} className="rounded-circle" />

                            <h2 className="fw-bold text-dark position-absolute text-center" style={{transform: 'translateY(80px)'}}>Solicita nuestra <br></br> Asesoria</h2>
                            <a target="_blank" rel="Motor Zone Whatsapp noreferrer" href="https://wa.me/920288419" className="btn btn-success" style={{transform: 'translate(0, -140px)'}}>Solicitar Asesoria</a>
                        </div>
                    </Modal.Body>
                </Modal>

                <h1 className="title position-relative">Instalaciones</h1>

                <article className="instalacionesContent my-4">
                    {
                        instalaciones &&
                        instalaciones.map((instalacion, iter) => (
                            <div key={iter}>
                                <img src={`./images/${instalacion}`} alt="Instalaciones Motor Zone" />
                            </div>
                        ))
                    }
                </article>
            </section>
        </Layout>

        <Outlet />
    </>
}