import '../App.css';

export const Header = () => {
    return (
        <header className="bg-primary-motor d-flex justify-content-center position-fixed w-100 z-2">
            <div className="header__image py-3">
                <h6 className='fs-4 text-white fw-bold'>Motor Zone</h6>
                {/* <img src="/src/assets/logo_motor_zone.jpg" alt="Motor Zone" width={80} /> */}
            </div>
        </header>
    )
}