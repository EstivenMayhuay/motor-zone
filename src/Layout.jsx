import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer"
import { ButtonWhatsapp } from './components/ButtonWhatsapp'
import { Fade } from "react-awesome-reveal"

export const Layout = ({children}) => {
    return <>
        <Header/>

        <Fade delay={300}>
            <main>
                {children}
            </main>
        </Fade>

        <Footer />

        <ButtonWhatsapp />
        
        <Outlet />
    </>
}