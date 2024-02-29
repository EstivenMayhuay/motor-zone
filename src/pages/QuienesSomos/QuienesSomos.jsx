import { Carousel } from "react-bootstrap"
import { Layout } from "../../Layout"
import { Slide } from 'react-awesome-reveal'
import { ModalPromocion } from '../../components/Modal'
import '../../QuienesSomos/index.css'

export const QuienesSomos = () => {
    const slider = [
        {
            title: 'EXCELENTE ATENCIÓN PARA SU VEHÍCULO',
            img: 'bg-fachada.png',
            descp: 'Ofrecemos servicios de Mecánica en General, Mantenimiento Preventivo / Correctivo, Alineamiento de Dirección, así como Planchado y Pintura.'
        },
        {
            title: 'CALIDAD Y CONFIANZA: GARANTÍA DE SERVICIO',
            img: 'bg-fachada-2.png',
            descp: 'Nuestro compromiso: calidad y confianza respaldadas por nuestra garantía de servicio.'
        },
        {
            title: 'ÓPTIMO SERVICIO CON TÉCNICOS CALIFICADOS',
            img: 'bg-fachada-3.png',
            descp: 'Ofrecemos un óptimo servicio respaldado por técnicos altamente calificados.'
        }
    ];

    return <>
        <Layout headerTitle="Excelente Atención para su Vehículo" headerImgSrc="bg-fachada.png">
            <section className="d-flex flex-column gap-4 mt-0 pt-0">
                <ModalPromocion />

                <article>
                    <Carousel>
                        {
                            slider.map((slide, index) => (
                                <Carousel.Item key={index} interval={3500} className="position-relative">
                                    <img className="d-block w-100 imagesSlider" src={`/images/${slide.img}?text=First slide&bg=f5f5f5`} alt="Hola" />
                                    <Carousel.Caption>
                                        <Slide delay={100} direction="right" cascade>
                                            <h1 className="carousel-title title">{slide.title}</h1>
                                            <p className="paragraph">{slide.descp}</p>
                                        </Slide>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </article>

                
                <article className="my-5">
                    <h1 className="title mb-3 text-center">¿QUIÉNES SOMOS?</h1>

                    <p className="paragraph text-center w-75 m-auto">
                        Somos Panez Motorszone Perú, una empresa 
                        especialista en Servicios Automotrices.  
                        Nuestro servicio esta garantizado con 
                        profesionales técnico y administrativo que cuentan 
                        con 15 años de experiencia adquirida en jefaturas 
                        de empresas reconocidas en el rubro Automotriz y 
                        Administrativo de flotas vehiculares y equipos.
                    </p>
                </article>

                <article className="d-flex flex-column gap-4">
                    <h1 className="title text-center mb-3">MISIÓN</h1>

                    <p className="w-75 m-auto paragraph text-center">Satisfacer las necesidades de nuestros clientes, superar sus expectativas a través de un servicio de calidad en constante mejora.</p>
                </article>

                <article className="d-flex flex-column gap-4">
                    <h1 className="title text-center mb-3">VISIÓN</h1>
                    
                    <p className="paragraph w-75 m-auto text-center">Ser la empresa líder en el mercado nacional de servicios automotrices sin descuidar nuestra rentabilidad, productividad y socialmente responsable para el crecimiento y desarrollo del país.</p>
                </article>
            </section>
        </Layout>
    </>
}