import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function SinglePage() {

    const { id } = useParams()
    const navigate = useNavigate()
    const apiUrl = "http://localhost:3333"
    let [curElem, setCurElem] = useState(null)


    useEffect(() => {
        console.log("partito")
        axios.get(`${apiUrl}/posts/${id}`).then((resp) => {
            setCurElem(resp.data)
        });
    }, [id])

    return (
        <>
        {curElem && (
            <div className="container">
                <button className="btn btn-primary mt-2" onClick={() => navigate(-1)}>Indietro</button>

                <h1 className="mt-4"> POST ID: {id}</h1>
                <h2 className="mt-2">{curElem.title}</h2>
                {curElem.image.startsWith("http") ?
                    <div className="mt-2 col-7 single-page-img">
                        <img src={`${curElem.image}`} alt="" />
                    </div>
                    : <div className="mt-2 col-7 single-page-img">
                        <img src={`${apiUrl}/${curElem.image}`} alt="" />
                    </div>
                }
                <p className="mt-4">{curElem.content}</p>
                {curElem.tags.map((curTag, i) => {
                    return <span key={i} >#{curTag} </span>})}               
            </div>)}
        </>
    )
}

export default SinglePage