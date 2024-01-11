import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './index.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ButtonSocial } from '../ButtonSocial/ButtonSocial';

export const Header = ({
    headerTitle = '',
    headerImgSrc = '',
    headerText = ''
}) => {
    const [title, setTitle] = useState(headerTitle);
    const [imgSrc, setImgSrc] = useState(headerImgSrc);
    const [showMenuMobile, setShowMenuMobile] = useState(false);
    const handleShowCanvas = () => setShowMenuMobile(true);
    const location = useLocation();
    const [index, setIndex] = useState(0);
    const arrImages = ['bg-fachada.png', 'bg-fachada-2.png', 'bg-fachada-3.png'];
    const arrText = ['Excelente Atención para su Vehículo', 'Calidad y Confianza Garantía de Servicio', 'Óptimo Servicio con Técnicos Calificados'];
    const arrInfo = [
        <>
            <ul className="text-left" style={{listStyle: "none"}}>
                <li>Mecanica en General</li>
                <li>Mantenimiento</li>
                <li>Preventivo / Correctivo</li>
                <li>Alineamiento De Direccion</li>
                <li>Planchado y Pintura</li>
            </ul>
        </>
    ];

    const NUM_IMAGES = arrImages.length - 1;
    const [timeInterval, setTimeInterval]  = useState(0);

    const handleCarousel = (e, img, text) => {
        // setImgSrc(img);
        setTitle(text);

        setTimeInterval(0);
        clearInterval(timeInterval)

        let activeBtn = document.querySelectorAll('.btnCircle.active');

        let header = document.querySelector(".header");
        header.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,1) 100%),
        url('../images/${img}')`;

        activeBtn.forEach((btn) => btn.classList.remove('active'))

        if(e.target.classList.contains('active')) {
            e.target.classList.remove('active')
        } else {
            e.target.classList.add('active')
        }
    }

    const carouselHome = () => {
        let header = document.querySelector('.header');
        let btnCircles = document.querySelectorAll('.btnCircle');
        let activeBtn = document.querySelectorAll('.btnCircle.active');
        
        let timer = setTimeout(() => {
            index === NUM_IMAGES ? setIndex(0) : setIndex(index + 1);
        }, 2500)

        // setImgSrc(arrImages[index]);
        setTitle(arrText[index]);

        activeBtn.forEach((btn) => btn.classList.remove('active'));
        
        header.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,1) 100%),
        url('../images/${arrImages[index]}')`;
        btnCircles[index].classList.add('active');
        
        setTimeInterval(timer);
    }

    useEffect(() => {
        if(location.pathname === '/') {
            carouselHome();
        }
        else {
            let header = document.querySelector(".header");
            header.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,1) 100%),
            url('../images/${imgSrc}')`;
        }

    }, [imgSrc, index])

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
                            <NavLink to={'/'} activeclassname='active' className='header__link--mobile'>¿Quienes Somos?</NavLink>
                            <NavLink to={'/promociones'} activeclassname='active' className='header__link--mobile'>Promociones</NavLink>
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
                                ¿Quiénes Somos?
                            </NavLink>
                            <NavLink to={'/promociones'} activeclassname='active' className='header__link'>
                                Promociones
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

            <div className="header__title px-5">
                <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
                {
                    title === "Excelente Atención para su Vehículo" &&
                    <ul className="d-block text-left" style={{listStyle: "none"}}>
                        <li>Mecanica en General</li>
                        <li>Mantenimiento</li>
                        <li>Preventivo / Correctivo</li>
                        <li>Alineamiento De Direccion</li>
                        <li>Planchado y Pintura</li>
                    </ul>
                }
            </div>

            {
                location.pathname == '/' &&
                <div className='header__buttons position-absolute w-100 bottom-0 d-flex justify-content-center align-items-center p-2 gap-2' style={{marginBottom: '2rem'}}>
                    <button className='btnCircle active' onClick={(e) => handleCarousel(e, 'bg-fachada.png', 'Excelente Atención para su Vehículo')}></button>
                    <button className='btnCircle' onClick={(e) => handleCarousel(e, 'bg-fachada-2.png', 'Calidad y Confianza Garantía de Servicio')}></button>
                    <button className='btnCircle' onClick={(e) => handleCarousel(e, 'bg-fachada-3.png', 'Óptimo Servicio con Técnicos Calificados')}></button>
                </div>
            }
        </header>
    )
}