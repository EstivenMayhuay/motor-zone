import { Layout } from "../../Layout";
import './index.css';

export const Contactanos = () => {
    return <>
        <Layout headerTitle="Contáctenos" headerImgSrc="bg-contactanos.jpg">
            <section className="contactanos">
                <article>
                    <h1 className="title m-0 p-0">Mapa de Ubicacion</h1>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.537063515889!2d-77.03217118592812!3d-12.07534039144825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c88d998117ed%3A0xd046237b7d8846ea!2sAv+Paseo+de+la+Rep%C3%BAblica+1156%2C+Cercado+de+Lima+15046!5e0!3m2!1ses!2spe!4v1549850743455" width="100%" height="300" frameBorder="0" style={{border: '0'}} allowfullscreen=""></iframe>

                    <p className="paragraph text-white d-flex flex-column gap-2">
                        <span><strong>Dirección: </strong>Av. P.º de la República 1156, Lima 15046</span>
                        <span><strong>Teléfono: </strong> (01) 3792349 / 993 520 708 / 932 508 814</span>
                        <span><strong>Correo: </strong>  administracion@motorszoneperu.com</span>
                        <span><strong>Horario de Atención: </strong> Lunes a Viernes de 8:30am a 6:30pm</span>
                    </p>
                </article>
            </section>
        </Layout>
    </>
}