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
                    </div>
                </article>
            </section>
        </Layout>
    </>
}