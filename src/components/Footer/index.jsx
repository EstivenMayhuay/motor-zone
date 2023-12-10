import { ListBrands } from '../ListBrands';
import './index.css';

export const Footer = () => {
    return <footer className="footer p-4 d-flex flex-column gap-4">
        <div className="footer__brands">
            <ListBrands />
        </div>

        <div className="footer__copyright">
            <span>Copyright © 2023 Automotriz Motor Zone Todos los derechos reservados.</span>
        </div>
    </footer>
}