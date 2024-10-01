import { Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import SinglePage from "./components/singlepage/SinglePage";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Hero />} />
                    <Route path="products/:proId" element={<SinglePage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
