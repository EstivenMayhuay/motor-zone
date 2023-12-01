import '../App.css';

export const Header = () => {
    return (
        <header className="bg-primary-motor d-flex justify-content-center w-100" style={{zIndex: "999"}}>
            <div className="header__image">
                <img src="./images/logo-main.jpeg" alt="Motor Zone" width={80} />
            </div>
        </header>
    )
}