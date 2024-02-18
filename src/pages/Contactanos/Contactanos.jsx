import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Layout } from "../../Layout"
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial"
import { Hero } from '../../components/Hero'
import './index.css';

export const Contactanos = () => {
    return <>
        <Layout>
            <Hero title={"CONTÁCTANOS"} img={"bg-fachada-contactanos.png"} />
            
            <section className="contactanos">
                <article>
                    <div className="contactanos__info">
                        <div className="paragraph text-white d-flex flex-column gap-2">
                            <span className="d-flex gap-3">
                                <FontAwesomeIcon icon={faMapLocation} size="lg" className="color-second-motor" />
                                AV. PASEO DE LA REPÚBLICA 1156, URB SANTA BEATRIZ 
                            </span>

                            <span className="d-flex gap-3">
                                <FontAwesomeIcon icon={faPhone} size="lg" className="color-second-motor" />
                                987200467 - 920288419 - 993162796 - 999183000
                            </span>

                            <span className="d-flex gap-3">
                                <FontAwesomeIcon icon={faCalendar} size="lg" className="color-second-motor" />
                                Lun a Vie 8:00am a 6pm Sáb: 8am a 1pm
                            </span>

                            <div className="d-flex my-4 gap-3">
                                <ButtonSocial type={"facebook"} />
                                <ButtonSocial type={"instagram"} />
                            </div>
                        </div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.537063515889!2d-77.03217118592812!3d-12.07534039144825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c88d998117ed%3A0xd046237b7d8846ea!2sAv+Paseo+de+la+Rep%C3%BAblica+1156%2C+Cercado+de+Lima+15046!5e0!3m2!1ses!2spe!4v1549850743455" width="100%" height="300" frameBorder="0" style={{border: '0'}} allowFullScreen=""></iframe>
                    </div>

                </article>
            </section>
        </Layout>
    </>
}