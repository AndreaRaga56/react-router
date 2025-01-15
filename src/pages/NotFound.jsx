import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()
    return (
        <div className="container mt-5">
            <button className="btn btn-primary mt-2" onClick={() => navigate(-2)}>Indietro</button>
            <h1 className="mt-5">Purtroppo hai inserito un ID che non ha corrispondenza</h1>
        </div>
    )
}

export default NotFound