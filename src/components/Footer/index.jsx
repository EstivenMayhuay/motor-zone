import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ListBrands } from '../ListBrands'
import { faMailBulk, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import './index.css'

export const Footer = () => {
    const date = (new Date()).getFullYear();

    return <footer className="footer p-0 pt-5 d-flex flex-column gap-4">
        <ListBrands />
        
        <div className="contentFooter d-flex flex-column gap-5 py-5">
            <div className="px-4">
                <img src="./images/logo-main.png" alt="" width={140} />
            </div>

            <div className="px-4 footerSubMenu d-flex flex-column gap-3">
                <h4 className='footerSubMenu__title text-white'>Nuestros Servicios</h4>
                
                <ul style={{listStyle: 'none'}} className='p-0 m-0'>
                    <li>Mantenimiento Correctivo</li>
                    <li>Mantenimiento Preventivo</li>
                    <li>Modificación de Carrocería</li>
                    <li>Restauraciones</li>
                    <li>Electrónica</li>
                </ul>
            </div>

            <div className="px-4 d-flex flex-column gap-3">
                <h4 className='footerSubMenu__title text-white'>Contáctanos</h4>

                <ul style={{listStyle: 'none'}} className='p-0 m-0'>
                    <li className='d-flex gap-2 align-items-center'>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>993520708</span>
                    </li>
                    <li className='d-flex gap-2 align-items-center'>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>920288419</span>
                    </li>
                    <li className='d-flex gap-2 align-items-center'>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>932508814</span>
                    </li>
                    <li className='d-flex gap-2 align-items-center'>
                        <FontAwesomeIcon icon={faMailBulk} />
                        <span>comercial@motorszoneperu.com</span>
                    </li>
                </ul>
            </div>

            <div className="px-4 d-flex flex-column gap-3">
                <h4 className="footerSubMenu__title text-white">Ubícanos</h4>

                <ul style={{listStyle: 'none'}} className='p-0 m-0'>
                    <li className='d-flex gap-2 align-items-start'>
                        <FontAwesomeIcon icon={faMapLocation} />
                        <span>AV. PASEO DE LA REPÚBLICA 1156, URB SANTA BEATRIZ</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="footer__copyright bg-white py-3 px-4">
            <span className="d-block text-dark text-center w-100">Copyright © {date} Automotriz Motor Zone Todos los derechos reservados.</span>
        </div>
    </footer>
}