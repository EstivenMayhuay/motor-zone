import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer"
import { ButtonWhatsapp } from './components/ButtonWhatsapp'

export const Layout = ({children}) => {
    return <>
        <Header/>

        <main>
            {children}
        </main>

        <Footer />

        <ButtonWhatsapp />
        
        <Outlet />
    </>
}