import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './index.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ButtonSocial } from '../ButtonSocial/ButtonSocial';

export const Header = ({
    headerTitle = '',
    headerImgSrc = ''
}) => {
    const [title, setTitle] = useState(headerTitle);
    const [imgSrc, setImgSrc] = useState(headerImgSrc);
    const [showMenuMobile, setShowMenuMobile] = useState(false);
    const handleShowCanvas = () => setShowMenuMobile(true)
    const location = useLocation();

    const handleCarousel = (img, text) => {
        setImgSrc(img);
        setTitle(text);
    }

    useEffect(() => {
        let header = document.querySelector(".header");
        header.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,1) 100%),
        url('../images/${imgSrc}')`;
        header.style.animation = 'headerBg 2s';
    }, [imgSrc, headerImgSrc])

    return (
        <header className="header position-relative">
            <div className="header__top px-4 d-flex align-items-center mb-3">
                <div className="header__logo">
                    <a href="/">
                        <img src="./images/logo-main.png" alt="" width={180} />
                    </a>
                </div>

                <div className="header__social w-100 d-flex justify-content-end">
                    <ul className="list-inline m-0 p-0 d-flex align-items-center gap-4">
                        <li>
                            <ButtonSocial type={'facebook'} />
                        </li>
                        <li>
                            <ButtonSocial type={'instagram'} />
                        </li>
                    </ul>

                </div>

                <div className="header__button">
                    <button onClick={handleShowCanvas} className='m-0 p-0 border-0 bg-transparent'>
                        <img src="./images/icon-hamburguer-right.svg" alt="Motor Zone" width={36} />
                    </button>
                </div>

                <Offcanvas show={showMenuMobile} onHide={() => setShowMenuMobile(false)} className='bg-primary-motor' placement='end'>
                    <Offcanvas.Header>
                        <Offcanvas.Title className='text-white fw-bold'>Motor Zone</Offcanvas.Title>
                        <Button className='bg-transparent p-0 m-0 border-0' onClick={() => setShowMenuMobile(false)}>
                            <img src="./images/icon-close.svg" alt="Motor Zone" width={36} />
                        </Button>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex flex-column gap-3'>
                        <ul className='navBarMobile'>
                            <NavLink to={'/'} activeclassname='active' className='header__link--mobile'>Portada</NavLink>
                            <NavLink to={'/quienes-somos'} activeclassname='active' className='header__link--mobile'>¿Quienes Somos?</NavLink>
                            <NavLink to={'/nuestros-clientes'} activeclassname='active' className='header__link--mobile'>Nuestros Clientes</NavLink>
                            <NavLink to={'/nuestros-servicios'} activeclassname='active' className='header__link--mobile'>Nuestros Servicios</NavLink>
                            <NavLink to={'/linea-de-repuestos'} activeclassname='active' className='header__link--mobile'>Linea de Repuestos</NavLink>
                            <NavLink to={'/contactanos'} activeclassname='active' className='header__link--mobile'>Contactanos</NavLink>
                        </ul>
                        <div className="navBarMobile__social d-flex gap-4" style={{marginLeft: '1.75rem'}}>
                            <ButtonSocial type={'facebook'} />
                            <ButtonSocial type={'instagram'} />
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

            <div className="header__navbar px-4">
                <Navbar id='navbar__main' className='bg-primary-motor w-100 rounded'>
                    <Container>
                        <Nav className='m-auto header__nav'>
                            <NavLink to={'/'} activeclassname='active' className='header__link'>
                                Portada
                            </NavLink>
                            <NavLink to={'/quienes-somos'} activeclassname='active' className='header__link'>
                                ¿Quiénes Somos?
                            </NavLink>
                            <NavLink to={'/nuestros-clientes'} activeclassname='active' className='header__link'>
                                Nuestros Clientes
                            </NavLink>
                            <NavLink to={'/nuestros-servicios'} activeclassname='active' className='header__link'>
                                Nuestros Servicios
                            </NavLink>
                            <NavLink to={'/linea-de-repuestos'} activeclassname='active' className='header__link'>
                                Linea de Repuestos
                            </NavLink>
                            <NavLink to={'/contactanos'} activeclassname='active' className='header__link'>
                                Contáctenos
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

            <div className="header__title">
                <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
            </div>

            {
                location.pathname == '/' &&
                <div className='position-absolute w-100 bottom-0 d-flex justify-content-center align-items-center p-2 gap-2' style={{marginBottom: '5rem'}}>
                    <button className='btnCircle' onClick={() => handleCarousel('bg-hero-main.jpg', 'Excelente atención <br> para su vehículo')}></button>
                    <button className='btnCircle' onClick={() => handleCarousel('bg-slide-portada-2.jpg', 'Calidad y Confianza <br> Garantía de servicio')}></button>
                    <button className='btnCircle' onClick={() => handleCarousel('bg-slide-portada-3.jpg', 'Óptimo servicio con <br> Técnicos calificados')}></button>
                </div>
            }
        </header>
    )
}