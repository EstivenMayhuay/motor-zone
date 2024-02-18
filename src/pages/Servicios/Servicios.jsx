import { Outlet } from "react-router-dom"
import { Layout } from "../../Layout"
import { Card } from "react-bootstrap"
import { Hero } from "../../components/Hero"

const ServicioCard = ({title, img, description}) => {
    return <>
        <Card style={{width: '320px'}} className="bg-transparent">
            <Card.Img src={img} style={{height: '200px'}}></Card.Img>
            <Card.Body className="p-0">
                <h5 className="color-second-motor py-3 fw-bold">{title}</h5>
                <p className="text-gray">{description}</p>
            </Card.Body>
        </Card>
    </>
}

export const Servicios = () => {
    const services = [
        {
            title: 'Mantenimiento Preventivo - Correctivo',
            img: 'https://www.comparaonline.com.co/blog-statics/co/uploads/2018/10/Hombre-haciendo-un-mantenimiento-correctivo-automotriz.jpg',
            descp: 'Ofrecemos mantenimiento preventivo y correctivo para garantizar el óptimo funcionamiento y prolongar la vida útil de su vehículo.'
        },
        {
            title: 'Reparación de Motor',
            img: 'https://autolab.mx/wp-content/uploads/2022/03/1-9.jpg',
            descp: 'Reparación experta de motores para restaurar el rendimiento y la eficiencia, asegurando un funcionamiento óptimo en todos los aspectos del vehículo.'
        },
        {
            title: 'Diagnóstico Computarizado - Scanner',
            img: 'https://ascltda.com/wp-content/uploads/2016/12/Vehicle-diagnostics-hero-960x431.jpg',
            descp: 'Diagnóstico computarizado mediante scanner para identificar y mejorar el rendimiento de vehículos modernos.'
        },
        {
            title: 'Pintura al Horno',
            img: 'https://statics.exitosanoticias.pe/2023/12/crop/657519210d179__400x209.webp',
            descp: 'Servicio de pintura al horno para acabados duraderos y de alta calidad, renovando la estética de su vehículo de manera eficiente.'
        },
        {
            title: 'Restauraciones',
            img: 'https://www.nitro.pe/images/2017/julio/taller_cgf.jpg',
            descp: 'Restauraciones profesionales para devolver la belleza y funcionalidad a su vehículo, con atención meticulosa a cada detalle y acabado.'
        },
        {
            title: 'Electrónica',
            img: 'https://unimotor.com.pe/wp-content/uploads/2021/03/electronica-1.jpg',
            descp: 'Servicio especializado en electrónica automotriz, asegurando el funcionamiento óptimo de los sistemas eléctricos y electrónicos de su vehículo.'
        },
        {
            title: 'Especialistas en Flotas Vehiculares',
            img: 'https://redson.pe/wp-content/uploads/2020/08/mantenimiento-reparaci%C3%B3n-gesti%C3%B3n-de-flota-de-veh%C3%ADculos.jpg',
            descp: 'Servicio especializado en electrónica automotriz, asegurando el funcionamiento óptimo de los sistemas eléctricos y electrónicos de su vehículo.'
        }
    ];

    return <>
        <Layout>
            <Hero title={"Nuestros Servicios"} img={"bg-nuestros-servicios.jpg"} />

            <section className="nuestrosServicios">
                <ul className="d-flex flex-wrap gap-4 p-0 contentServicios justify-content-center">
                    {
                        services.map((s, index) => (
                            <ServicioCard key={index} title={s.title} img={s.img} description={s.descp} />
                        ))
                    }
                </ul>
            </section>
        </Layout>

        <Outlet />
    </>
}