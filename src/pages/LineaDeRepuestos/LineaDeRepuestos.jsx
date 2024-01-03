import { Layout } from "../../Layout"
import './index.css'

export const LineaDeRepuestos = () => {
    return <>
        <Layout headerTitle="LINEA DE REPUESTOS" headerImgSrc="bg-fachada-linea-de-repuestos.jpg">
            <section>
                <h1 className="text-white pb-5">Linea de Repuestos</h1>

                <article>
                    <ul>
                        <li>Somos Especialitas en repuestos originales y alternativos.</li>
                        <p className="d-flex gap-3 align-items-center">
                            <li>Somos Importadores.</li>
                            <img src="/images/icon-usa.png" alt="Importadores USA" width={46} />
                            <img src="/images/icon-spain.png" alt="Importadores Spain" width={32} />
                        </p>
                    </ul>
                </article>

                <article className="py-4 d-flex justify-content-center">
                    <ul className="d-flex lineTime">
                        <li className="lineTime__text">  
                            <img src="/images/icon-medal.png" alt="Servicio Tecnico Especializado" className="bg-danger rounded-circle p-1" width={46} />
                            <span className="text-center">Servicio Tecnico <br></br> Especializado</span>
                        </li>

                        <li className="lineTime__bar"></li>

                        <li className="lineTime__text">
                            <img src="/images/icon-mechanic.png" alt="Personal Calificado" className="bg-danger rounded-circle p-1" width={46} />
                            <span className="text-center">Personal <br></br> Calificado</span>
                        </li>

                        <li className="lineTime__bar"></li>

                        <li className="lineTime__text">
                            <img src="/images/icon-settings.png" alt="Calidad Garantizada" className="bg-danger rounded-circle p-1" width={46} />
                            <span className="text-center">Calidad <br></br> Garantizada</span>
                        </li>
                    </ul>
                </article>
            </section>
        </Layout>
    </>
}