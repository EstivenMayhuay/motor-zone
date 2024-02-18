import { Outlet } from "react-router-dom";
import { Layout } from "../../Layout"
import { Hero } from "../../components/Hero"
import './index.css'

export const Home = () => {
    const instalaciones = ['img-instalaciones-6.jpeg', 'img-instalaciones-1.jpg', 'img-instalaciones-2.jpg', 'img-instalaciones-4.jpg'];
    
    return <>

        <Layout>
            <Hero title={"EXCELENTE ATENCIÓN PARA SU VEHÍCULO"} img={"promociones-general.svg"} />

            <section className="py-5 sectionHome">
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