import { Card, NavItem } from 'react-bootstrap'
import './index.css'

export const NuestrosServicios = ({
    servicios
}) => {
    return (
        <div id='servicios' className='px-4'>
            <h6 className='text-center fs-5 fw-semibold my-5 text-white'>Nuestros Servicios</h6>

            <div className='align-items-center justify-content-center' id='containerServicesCards'>
            {
                servicios &&
                // eslint-disable-next-line react/prop-types
                servicios.map((servicio, item) => {
                    return <Card key={item} className='cardServicio border-0'>
                        <Card.Body className='p-0'>
                            <div className='image overflow-hidden'>
                                <img src={`./images/${servicio.img}`} alt="" width={"100%"} height={"200px"} />
                            </div>
                            <p className='border-0 text-white fw-bold fs-5 text-center'>{servicio.name}</p>
                        </Card.Body>
                    </Card>
                })
            }
            </div>
        </div>
    )
}
