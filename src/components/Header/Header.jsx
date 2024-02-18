import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './index.css'
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { ButtonSocial } from "../ButtonSocial/ButtonSocial"

export const Header = () => {
    const [menuShow, setMenuShow] = useState(false);

    return <>
        <header className="p-4">
            <div className="d-flex">
                <div className="header__logo">
                    <Link to={'/'}>
                        <img src="/images/logo-main.png" alt="Motor Zone Peru" width={160} />
                    </Link>
                </div>

                <div className="header__button w-100 d-flex align-items-center">
                    <div className="header__social d-flex w-100 justify-content-end gap-3">
                        <ButtonSocial type={'facebook'} />
                        <ButtonSocial type={'instagram'} />
                    </div>

                    <button className="bg-transparent border-0 position-absolute end-0 pe-4" onClick={() => setMenuShow(true)}>
                        <FontAwesomeIcon icon={faBars} size="xl" className="text-white" />
                    </button>
                </div>
            </div>
        </header>

        {/* Menu Mobile */}
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
                    <NavLink to={'/'} activeclassname='active' className='header__link--mobile'>¿Quiénes Somos?</NavLink>
                    <NavLink to={'/promociones'} activeclassname='active' className='header__link--mobile'>Promociones</NavLink>
                    <NavLink to={'/nuestros-clientes'} activeclassname='active' className='header__link--mobile'>Nuestros Clientes</NavLink>
                    <NavLink to={'/nuestros-servicios'} activeclassname='active' className='header__link--mobile'>Nuestros Servicios</NavLink>
                    <NavLink to={'/linea-de-repuestos'} activeclassname='active' className='header__link--mobile'>Linea de Repuestos</NavLink>
                    <NavLink to={'/contactanos'} activeclassname='active' className='header__link--mobile'>Contáctanos</NavLink>    
                </ul>

                <div className="d-flex gap-4 px-4">
                    <ButtonSocial type="facebook" />
                    <ButtonSocial type="instagram" />
                </div>
            </Offcanvas.Body>
        </Offcanvas>

        <Navbar className="bg-primary-motor p-0 mt-3 mb-5 navBarDesktop">
            <Container className="m-0 p-0 mw-100 d-flex">
                <Nav className="d-flex align-items-center justify-content-center w-100 m-0 p-0">
                    <NavLink to={'/'} activeclassname='active' className='header__link'>¿Quiénes Somos?</NavLink>
                    <NavLink to={'/promociones'} activeclassname='active' className='header__link'>Promociones</NavLink>
                    <NavLink to={'/nuestros-clientes'} activeclassname='active' className='header__link'>Nuestros Clientes</NavLink>
                    <NavLink to={'/nuestros-servicios'} activeclassname='active' className='header__link'>Nuestros Servicios</NavLink>
                    <NavLink to={'/linea-de-repuestos'} activeclassname='active' className='header__link'>Linea de Repuestos</NavLink>
                    <NavLink to={'/contactanos'} activeclassname='active' className='header__link'>Contáctanos</NavLink>    
                </Nav>
            </Container>
        </Navbar>
    </>
}