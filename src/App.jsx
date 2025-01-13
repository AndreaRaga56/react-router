import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./components/HomePage";
import ChiSiamo from "./components/ChiSiamo";
import ListaPostConForm from "./components/ListaPostConForm";


function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/AboutUs" element={<ChiSiamo/>}/>
                    <Route path="/Form+Posts" element={<ListaPostConForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
        </>

    )
}

export default App