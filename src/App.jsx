import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Form from "./pages/Form"
import Posts from "./pages/Posts"
import NotFound from "./pages/NotFound";
import SinglePage from "./pages/SinglePage";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/AboutUs" element={<ChiSiamo />} />
                        <Route path="/Posts">
                            <Route index element={<Posts />} />
                            <Route path=":id" element={<SinglePage />} />
                        </Route>
                        <Route path="/Form" element={<Form />} />
                        <Route path="/not-found" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter >
        </>

    )
}

export default App