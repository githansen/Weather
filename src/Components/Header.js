import {Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css'

export const Header = () =>{
    return(
        <Navbar bg="dark" variant="dark" className="header">
            <h2 data-cy="navbar" className="mx-auto text-white">
                Simple forecast
            </h2>
        </Navbar>
    )
}