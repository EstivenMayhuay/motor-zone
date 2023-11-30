import { Header } from './components/Header';
import {Carousel} from 'react-bootstrap';
import {URL_APP} from './constants.js';

function App() {
  const imagesSlide = ['bg-motor-zone-busniness.jpg', 'bg-fachada-motor.jpg', 'bg-fachada-motor-2.jpg', 'bg-fachada-motor-3.jpg'];

  return (
    <>
      <Header />

      <main className='mt-5'>
        <section className='hero py-5'>
          <Carousel className='overflow-hidden'>
          {
            imagesSlide.map((img, iter) => (
                <Carousel.Item key={iter}>
                  <img src={`${URL_APP}/images/${img}`} alt="Motor Zone" width={"100%"} height={240} />
                  <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
            ))
          }
          </Carousel>
        </section>

        <section className='marca py-5'>
          <h6 className='text-center fs-5 fw-semibold'>Marcas con las que trabajamos</h6>
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
