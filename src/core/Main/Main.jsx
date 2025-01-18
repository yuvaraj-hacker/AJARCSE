import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../../src/App.css'

export default function Main() {

    return (
        <>
            <div className="h-screen">
                <Header />
                <main className=" lg:mt-[72.4px] md:mt-[68px]  mt-[74.2px]     ">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>

    )
}