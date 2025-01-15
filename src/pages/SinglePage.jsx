import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function SinglePage() {

    const { id } = useParams()
    const navigate = useNavigate()
    const apiUrl = "http://localhost:3333"
    let [curElem, setCurElem] = useState("")

    useEffect(() => {
        getCurElem()
    }, [])

    const getCurElem = () => {
        axios.get(`${apiUrl}/posts/${id}`).then((resp) => {
            setCurElem(resp.data)
        });
    };



    return (
        <>
            <div className="container">
                <button className="btn btn-primary" onClick={() => navigate(-1)}>Indietro</button>

                <h1>POST ID: {id}</h1>
                <h2>{curElem.title}</h2>
                <div>{`${apiUrl}/${curElem.image}`}</div>
                {curElem.image.startsWith("http") ?
                    <div>
                        <img src={`${curElem.image}`} alt="" />
                    </div>
                    : <div>
                        <img src={`${apiUrl}/${curElem.image}`} alt="" />
                    </div>
                }
            </div>
        </>
    )
}

export default SinglePage