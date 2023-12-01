import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NuestrosServicios } from './components/NuestrosServicios';

function App() {
  const imagesSlide = ['bg-motor-zone-busniness.jpg', 'bg-fachada-motor.jpg', 'bg-fachada-motor-2.jpg', 'bg-fachada-motor-3.jpg'];
  const servicios = [
    {
      id: 1,
      name: "Mantenimiento Preventivo - Correctivo",
      img: "mantenimiento_preventivo_correctivo.jpg"
    },
    {
      id: 2,
      name: "Reparacion de Motor",
      img: "servicio-motor-car.jpg"
    },
    {
      id: 3,
      name: "Diagnostico Computarizado - Scanner",
      img: "servicio-diagnostico-computarizado.jpg"
    },
    {
      id: 4,
      name: "Pintura al Horno",
      img: "pintura-al-horno.jpg"
    },
    {
      id: 5,
      name: "Restauraciones",
      img: "servicio-reparacion.jpg"
    },
    {
      id: 6,
      name: "Electronica",
      img: "servicio-electronica.png"
    },
    {
      id: 7,
      name: "Especialistas en Flotas Vehiculares",
      img: "servicio-flota-vehiculares.jpg"
    }
  ];

  return (
    <>
      {/* <Header /> */}

      <main>
        <section className='heroSection'>
          <Hero />
        </section>

        {/* Nuestros Servicios */}
        <section className='sectionServicios my-5'>
          <NuestrosServicios servicios={servicios} />
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
