import { Card } from 'react-bootstrap'
import './index.css'

export const NuestrosServicios = ({
    // eslint-disable-next-line react/prop-types
    servicios
}) => {
    return (
        <div id='servicios' className='bg-primary-motor px-4'>
            <h6 className='title text-center fw-bold text-white'>Nuestros Servicios</h6>

            <div className='servicios__container'>
            {
                servicios &&
                // eslint-disable-next-line react/prop-types
                servicios.map((servicio, iter) => {
                    return <>
                        <Card className='bg-second-motor border-0 servicioCard' key={iter}>
                            <Card.Body className='position-relative servicioCard__body'>
                                <p className='text-white paragraph m-0 px-2 text-break'>{servicio.name}</p>
                                <div className='text-right'>
                                    <img src="./images/icon-car.svg" alt="Motor Zone" width={32} height={32} className='' />
                                </div>
                            </Card.Body>
                        </Card>
                    </>
                })
            }
            </div>
        </div>
    )
}

                {/* <ul key={iter}className='servicios__list m-0 p-0'>
                    <li className='text-white'>
                        <span className='fw-bold'>-</span>
                        <p className='text-white paragraph'>{servicio.name}</p>
                    </li>
                </ul> */}
