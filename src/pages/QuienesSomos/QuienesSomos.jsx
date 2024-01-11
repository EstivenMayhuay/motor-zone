import { Layout } from "../../Layout"

export const QuienesSomos = () => {
    return <>

        <Layout headerTitle="Excelente Atención para su Vehículo" headerImgSrc="bg-fachada.png">
            <section className="d-flex flex-column gap-4">
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