import { Outlet } from "react-router-dom";
import { Layout } from "../../Layout";
import './index.css';

export const Home = () => {
    return <>

        <Layout headerTitle="Taller Multimarca" headerImgSrc="bg-hero-main.jpg">
            <section className="py-5 sectionHome">
                <h1 className="title">HOME</h1>
            </section>
        </Layout>

        <Outlet />
    </>
}