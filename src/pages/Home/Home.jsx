import { Outlet } from "react-router-dom";
import { Layout } from "../../Layout";
import './index.css';

export const Home = () => {
    const instalaciones = ['img-instalaciones-6.jpeg', 'img-instalaciones-1.jpg', 'img-instalaciones-2.jpg', 'img-instalaciones-4.jpg'];
    
    return <>

        <Layout headerTitle="Excelente atención <br> para su vehículo" headerImgSrc="promociones-general.svg">
            <section className="py-5 sectionHome">
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