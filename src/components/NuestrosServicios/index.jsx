import './index.css'

export const NuestrosServicios = ({
    // eslint-disable-next-line react/prop-types
    servicios
}) => {
    return (
        <div id='servicios' className='bg-primary-motor px-4'>
            <h6 className='title text-center fw-bold text-white'>Nuestros Servicios</h6>

            <div className='align-items-center justify-content-center servicios__container'>
            {
                servicios &&
                // eslint-disable-next-line react/prop-types
                servicios.map((servicio, iter) => {
                    return <>
                        <ul key={iter}className='servicios__list m-0 p-0'>
                            <li className='text-white'>
                                <span className='fw-bold'>-</span>
                                <p className='text-white paragraph'>{servicio.name}</p>
                            </li>
                        </ul>
                    </>
                })
            }
            </div>
        </div>
    )
}

