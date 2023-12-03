import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NuestrasInstalaciones } from './components/Instalaciones';
import { Marcas } from './components/Marcas';
import { NuestrosServicios } from './components/NuestrosServicios';

function App() {
  const servicios = [
    {
      id: 1,
      name: "Mantenimiento Preventivo - Correctivo",
      img: "mantenimiento_preventivo_correctivo.jpg"
    },
    {
      id: 2,
      name: "Reparación de Motor",
      img: "servicio-motor-car.jpg"
    },
    {
      id: 3,
      name: "Diagnóstico Computarizado - Scanner",
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
      name: "Electrónica",
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
        <section className='sectionServicios'>
          <NuestrosServicios servicios={servicios} />
        </section>

        {/* Marcas con la que trabajamos */}
        <section className='sectionMarcas'>
          <Marcas />
        </section>

        {/* Nuestra Instalaciones */}
        <section className='sectionInstalaciones'>
          <NuestrasInstalaciones />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
