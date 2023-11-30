import { Header } from './components/Header';
import {Card, Carousel} from 'react-bootstrap';

function App() {
  const imagesSlide = ['bg-motor-zone-busniness.jpg', 'bg-fachada-motor.jpg', 'bg-fachada-motor-2.jpg', 'bg-fachada-motor-3.jpg'];
  const servicios = ['Mantenimiento Preventivo - Correctivo', 'Reparacion de Motor', 'Diagnostico Computarizado - Scanner', 'Pintura al Horno', 'Restauraciones', 'Electronica', 'Especialistas en Flota Vehiculares'];

  return (
    <>
      <Header />

      <main className='mt-5'>
        <section className='hero py-5 px-2'>
          <Carousel className='overflow-hidden'>
          {
            imagesSlide.map((img, iter) => (
                <Carousel.Item key={iter}>
                  <img src={`./images/${img}`} alt="Motor Zone" width={"100%"} height={240} />
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
            ))
          }
          </Carousel>
        </section>

        {/* Nuestros Servicios */}
        <section className='marca py-5'>
          <h6 className='text-center fs-5 fw-semibold my-4'>Nuestros Servicios</h6>

          <div className='d-flex flex-wrap gap-4 align-items-center justify-content-center'>
            {
              servicios &&
              servicios.map((servicio, item) => {
                return <Card key={item} style={{ minWidth: "22rem", border: "none"}} className='shadow-sm'>
                  <Card.Body className='fw-bold p-0 m-0 overflow-hidden rounded position-relative'>
                    <img src="./images/mantenimiento_preventivo_correctivo.jpg" alt={servicio} width={"100%"} height={220} />
                    <p className='position-absolute m-0 top-0 z-0' style={{backgroundColor: "rgba(40, 40, 40, 0.45)", width: "100%", height: "100%"}}></p>
                    <span className='position-absolute z-1 start-0 top-0 w-100 h-100 p-2 d-flex flex-wrap justify-content-center align-items-center text-white fs-4 text-center'>{servicio}</span>
                  </Card.Body>
                </Card>
              })
            }
          </div>
        </section>

        <section className='marca py-5'>
          <h6 className='text-center fs-5 fw-semibold'>Marcas con las que trabajamos</h6>
        </section>

        <section className='marca py-5'>
          <h6 className='text-center fs-5 fw-semibold'>Marcas con las que trabajamos</h6>
        </section>
      </main>

    </>
  )
}

export default App
