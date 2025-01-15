import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout (){
    return(
        <>
        <MainNav/>
        
        <Outlet/>

        <footer className="container mt-5">
            [...Footer...]
        </footer>
        </>
    )
}

export default AppLayout