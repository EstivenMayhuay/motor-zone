import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './index.css'
import { Offcanvas } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { ButtonSocial } from "../ButtonSocial/ButtonSocial"

export const Header = () => {
    const [menuShow, setMenuShow] = useState(false);

    return <>
        <header className="p-4">
            <div className="contentMobile">
                <div className="header__logo">
                    <Link to={'/'}>
                        <img src="/images/logo-main.png" alt="Motor Zone Peru" width={160} />
                    </Link>
                </div>

                <div className="header__button w-100 d-flex align-items-center">
                    <button className="bg-transparent border-0 position-absolute end-0 pe-4" onClick={() => setMenuShow(true)}>
                        <FontAwesomeIcon icon={faBars} size="xl" className="text-white" />
                    </button>
                </div>
            </div>
        </header>

        <Offcanvas show={menuShow} onHide={() => setMenuShow(false)} className="bg-primary-motor">
            <Offcanvas.Header>
                <Offcanvas.Title>
                    <Link to={'/'}>
                        <img src="/images/logo-main.png" alt="Motor Zone Peru" width={140} />
                    </Link>
                    <button className="btn text-white position-absolute end-0" onClick={() => setMenuShow(false)}>
                        <FontAwesomeIcon icon={faClose} size="xl" />
                    </button>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column gap-3">
                <ul className="d-flex flex-column gap-4">
                    <NavLink to={'/'} activeclassname='active' className='header__link--mobile'>¿Quienes Somos?</NavLink>
                    <NavLink to={'/promociones'} activeclassname='active' className='header__link--mobile'>Promociones</NavLink>
                    <NavLink to={'/nuestros-clientes'} activeclassname='active' className='header__link--mobile'>Nuestros Clientes</NavLink>
                    <NavLink to={'/nuestros-servicios'} activeclassname='active' className='header__link--mobile'>Nuestros Servicios</NavLink>
                    <NavLink to={'/linea-de-repuestos'} activeclassname='active' className='header__link--mobile'>Linea de Repuestos</NavLink>
                    <NavLink to={'/contactanos'} activeclassname='active' className='header__link--mobile'>Contactanos</NavLink>    
                </ul>

                <div className="d-flex gap-4 px-4">
                    <ButtonSocial type="facebook" />
                    <ButtonSocial type="instagram" />
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}