import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function SinglePage() {

    let { id } = useParams()
    const navigate = useNavigate()
    const apiUrl = "http://localhost:3333"
    let [curElem, setCurElem] = useState(null)
    id= parseInt(id)
    let next = id+1;
    let prev = id-1;


    useEffect(() => {
        console.log("partito")
        axios.get(`${apiUrl}/posts/${id}`).then((resp) => {
            setCurElem(resp.data)
        }).catch((err)=>{
            if(err.status===404){
                navigate("/not-found")
            }
        })
    }, [id])

    return (
        <>
        {curElem && (
            <div className="container">
                <button className="btn btn-primary mt-2" onClick={() => navigate(-1)}>Indietro</button>
                <div className="d-flex gap-2">
                <button disabled={prev===0} className="btn btn-secondary mt-2" onClick={() => navigate(`/Posts/${prev}`)}>Precedente</button>
                <button className="btn btn-secondary mt-2" onClick={() => navigate(`/Posts/${next}`)}>Successivo</button>
                </div>
                

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