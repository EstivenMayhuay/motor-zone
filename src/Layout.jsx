import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"

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

        <footer>
            <h6>footer</h6>
        </footer>

        <Outlet />
    </>
}