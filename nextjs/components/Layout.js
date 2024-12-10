import Narbar from "./Narbar";
import Footer from "./Footer";

export default function Layout({children}){
    return(
        <div>
            <Narbar/>
            {children}
            <Footer/>
        </div>
    )
}