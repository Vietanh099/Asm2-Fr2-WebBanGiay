import { Outlet } from "react-router-dom";
import Header from '@/pages/Cilent/Header';
import Footer from "@/pages/Cilent/Footer";
import Banner from "@/pages/Cilent/Banner";
import CollectionProducts from "@/pages/Cilent/CollectionProducts";

const LayoutWebsite = () => {
    return (
        <div>
            <header><Header/>
            <Banner/>
            <CollectionProducts/>
            </header>
            
            <main>
                <Outlet />
            </main>
            <footer><Footer/></footer>
        </div>
    );
};

export default LayoutWebsite;