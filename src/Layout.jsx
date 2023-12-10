import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer"
import { ButtonWhatsapp } from './components/ButtonWhatsapp'

export const Layout = ({
    headerTitle = '',
    headerImgSrc = '',
    children
}) => {
    return <>
        <Header headerTitle={headerTitle} headerImgSrc={headerImgSrc} />

        <main>
            {children}
        </main>

        <Footer />

        <ButtonWhatsapp />
        
        <Outlet />
    </>
}