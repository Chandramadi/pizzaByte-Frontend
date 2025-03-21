import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Layouts({children}) {
    return(
        <div>
            <Nav/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layouts;