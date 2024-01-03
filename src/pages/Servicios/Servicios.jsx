import { Outlet } from "react-router-dom"
import { Layout } from "../../Layout"

export const Servicios = () => {
    return <>
        <Layout headerTitle="NUESTROS SERVICIOS" headerImgSrc="bg-nuestros-servicios.jpg" >
            <section className="nuestrosServicios">
                <h1 className="title">Servicios</h1>

                <p className="paragraph">En Motor Zone contamo con los siguientes servicios.</p>

                <ul>
                    <li>Mantenimiento Preventivo - Correctivo</li>
                    <li>Reparación de Motor</li>
                    <li>Diagnóstico Computarizado - Scanner</li>
                    <li>Pintura al Horno</li>
                    <li>Restauraciones</li>
                    <li>Electrónica</li>
                    <li>Especialistas en Flotas Vehiculares</li>
                </ul>
            </section>
        </Layout>

        <Outlet />
    </>
}