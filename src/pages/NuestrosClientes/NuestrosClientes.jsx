import { Layout } from "../../Layout"
import { Hero } from "../../components/Hero"

export const NuestrosClientes = () => {
    return <>
        <Layout>
            <Hero title={"AÑOS DE EXPERIENCIA CON EMPRESAS PRIVADAS Y DEL ESTADO"} img={"bg-fachada-nuestros-clientes.png"} />

            <section>
                <article className="bg-white">
                    <div className="d-flex flex-wrap align-items-center gap-5 justify-content-center py-4">
                        <img src="/images/cliente_mapfre.jpg" alt="" width={180} />
                        <img src="/images/cliente_ministerio_salud.png" alt="" width={180} />
                        <img src="/images/cliente_panamericana.png" alt="" width={180} />
                        <img src="/images/cliente_rimac_seguros.png" alt="" width={180} />
                        <img src="/images/cliente_la_positiva.png" alt="" width={180} />
                        <img src="/images/cliente_ministerio_magistatura.jpg" alt="" width={180} />
                        <img src="/images/cliente_congreso_republica.jpg" alt="" width={180} />
                        <img src="/images/cliente_mtc.svg" alt="" width={180} />
                        <img src="/images/cliente_marina_peru.png" alt="" width={180} />
                        <img src="/images/cliente_dhl.png" alt="" width={180} />
                        <img src="/images/cliente_pets_place.png" alt="" width={180} />
                        <img src="/images/cliente_america.webp" alt="" width={180} />
                        <img src="/images/cliente_motaengil.png" alt="" width={180} />
                        <img src="/images/cliente_san_pablo.png" alt="" width={180} />
                        <img src="/images/cliente_tv_peru.png" alt="" width={180} />
                        <img src="/images/cliente_rpp.png" alt="" width={180} />
                        <img src="/images/cliente_campo_fe.png" alt="" width={180} />
                        <img src="/images/cliente_cafae.jpg" alt="" width={180} />
                        <img src="/images/cliente_hdm.png" alt="" width={180} />
                        <img src="/images/cliente_bomberos.jpg" alt="" width={180} />
                    </div>
                </article>
            </section>
        </Layout>
    </>
}