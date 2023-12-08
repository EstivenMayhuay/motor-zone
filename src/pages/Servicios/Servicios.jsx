import { Outlet } from "react-router-dom"
import { Layout } from "../../Layout"

export const Servicios = () => {
    return <>
        <Layout headerTitle="Nuestros Servicios" headerImgSrc="bg-nuestros-servicios.jpg" >
            <section>
                <h1 className="title">Servicios</h1>
            </section>
        </Layout>

        <Outlet />
    </>
}