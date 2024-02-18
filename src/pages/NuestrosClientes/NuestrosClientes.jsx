import { Layout } from "../../Layout"
import { Hero } from "../../components/Hero"

export const NuestrosClientes = () => {
    return <>
        <Layout>
            <Hero title={"Años de Experiencia con Empresas Privadas y Del Estado"} img={"bg-fachada-nuestros-clientes.png"} />

            <section>
                <article>
                    <h1 className="text-white mb-3">Nuestros <b className="color-second-motor">Clientes</b></h1>
                </article>

                <article className="bg-white">
                    <div className="d-flex flex-wrap align-items-center gap-4 justify-content-center py-4">
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