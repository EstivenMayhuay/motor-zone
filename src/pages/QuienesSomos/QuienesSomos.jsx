import { Carousel } from "react-bootstrap"
import { Layout } from "../../Layout"
import { Slide } from 'react-awesome-reveal'
import '../../QuienesSomos/index.css'

export const QuienesSomos = () => {
    const slider = [
        {
            title: 'Excelente Atención para su Vehículo',
            img: 'bg-fachada.png',
            descp: [
                'Mecanica en General',
                'Mantenimiento',
                'Preventivo / Correctivo',
                'Alineamiento De Direccion',
                'Planchado y Pintura'
            ]
        },
        {
            title: 'Calidad y Confianza Garantía de Servicio',
            img: 'bg-fachada-2.png',
            descp: null
        },
        {
            title: 'Óptimo Servicio con Técnicos Calificados',
            img: 'bg-fachada-3.png',
            descp: null
        }
    ];

    return <>
        <Layout headerTitle="Excelente Atención para su Vehículo" headerImgSrc="bg-fachada.png">
            <section className="d-flex flex-column gap-4 mt-0 pt-0">
                <article>
                    <Carousel>
                        {
                            slider.map((slide, index) => (
                                <Carousel.Item key={index} interval={3500} className="position-relative">
                                    <img className="d-block w-100 imagesSlider" src={`/images/${slide.img}?text=First slide&bg=f5f5f5`} alt="Hola" />
                                    <Carousel.Caption>
                                        <Slide delay={100} direction="right" cascade>
                                            <h1 className="fw-bold carousel-title" style={{fontSize: '1.5rem'}}>{slide.title}</h1>
                                            <ul className="m-0 pb-4 pt-2" style={{listStyle: 'none'}}>
                                                {
                                                    slide.descp &&
                                                    slide.descp.map((d, i) => (
                                                        <li key={i}>{d}</li>
                                                    ))
                                                }
                                            </ul>
                                        </Slide>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </article>

                
                <article>
                    <h1 className="text-white mb-3">¿QUIÉNES <b className="color-second-motor">SOMOS?</b></h1>

                    <p>
                        Somos Panez Motorszone Perú, una empresa 
                        especialista en Servicios Automotrices.  
                        Nuestro servicio esta garantizado con 
                        profesionales técnico y administrativo que cuentan 
                        con 15 años de experiencia adquirida en jefaturas 
                        de empresas reconocidas en el rubro Automotriz y 
                        Administrativo de flotas vehiculares y equipos.
                    </p>
                </article>

                <article>
                    <h1 className="text-white mb-3">NUESTRA <b className="color-second-motor">MISION Y VISION</b></h1>

                    <div>
                        <h2 className="color-second-motor">Misión</h2>
                        <p>Satisfacer las necesidades de nuestros clientes, superar sus expectativas a través de un servicio de calidad en constante mejora.</p>
                    </div>

                    <div>
                        <h2 className="color-second-motor">Visión</h2>
                        <p>Ser la empresa líder en el mercado nacional de servicios automotrices sin descuidar nuestra rentabilidad, productividad y socialmente responsable para el crecimiento y desarrollo del país.</p>
                    </div>
                </article>
            </section>
        </Layout>
    </>
}