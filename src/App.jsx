import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Form from "./pages/Form"
import Posts from "./pages/Posts"


function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/AboutUs" element={<ChiSiamo/>}/>
                    <Route path="/Posts" element={<Posts/>}/>
                    <Route path="/Form" element={<Form/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
        </>

    )
}

export default App