import { Layout } from "../../Layout"

export const NuestrosClientes = () => {
    return <>
        <Layout headerTitle="Años de Experiencia con Empresas Privadas y Del Estado" headerImgSrc="bg-fachada-nuestros-clientes.png">
            <section>
                <article>
                    <h1 className="text-white mb-3">Nuestros <b className="color-second-motor">Clientes</b></h1>

                    <p>Tenemos una amplia gama de personas que aman trabajar con nosotros.</p>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-4">
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