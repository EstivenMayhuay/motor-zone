import './index.css';

const MapAddress = () => {
    return <>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7803.074138436686!2d-77.029982!3d-12.07534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c88d998117ed%3A0xd046237b7d8846ea!2sAv.%20P.%C2%BA%20de%20la%20Rep%C3%BAblica%201156%2C%20Lima%2015046%2C%20Peru!5e0!3m2!1sen!2sus!4v1701567101858!5m2!1sen!2sus" width="100%" height="320" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
}

export const Footer = () => {
    const social_links_icons = ['icon-facebook.svg', 'icon-instagram.svg'];

    return <>
        <footer className="footer bg-second-motor px-4">
            <div className="socialMedia">
                <h6 className="title fw-bold text-white">Redes Sociales</h6>
                <div className='socialMedia__content'>
                    {
                        social_links_icons &&
                        social_links_icons.map((itemSocial, iter) => (
                            <a key={iter} href="#" target="_blank" className="socialMedia__link">
                                <img src={`./images/${itemSocial}`} alt="Motor Zone Facebook" width={26} height={26} />
                            </a>
                        ))
                    }
                </div>
            </div>

            <div className="infoBussiness">
                <h6 className="title fw-bold text-white">Datos Coorporativos</h6>
                <ul className='p-0 m-0 d-flex flex-column gap-2'>
                    <li className='d-flex gap-2'>
                        <img src="./images/icon-time.svg" alt="Motor Zone (01) 3792349" width={32} height={32} />
                        <span className='text-white paragraph'><strong>Horario de Atención:</strong> 8:30am a 6:00pm</span>
                    </li>
                    <li className='d-flex gap-2'>
                        <img src="./images/icon-phone.svg" alt="Motor Zone (01) 3792349" width={32} height={32} />
                        <span className='text-white paragraph'>(01) 3792349</span>
                    </li>
                    <li className='d-flex gap-2 text-break'>
                        <img src="./images/icon-email.svg" alt="" width={32} height={32} />
                        <span className='text-white paragraph'>administracion@motorszoneperu.com</span>
                    </li>
                </ul>
            </div>

            <div className="address overflow-hidden rounded">
                <MapAddress />
            </div>
        </footer>
    </>
}