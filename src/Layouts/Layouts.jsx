import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

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