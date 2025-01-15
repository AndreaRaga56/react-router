/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

function AppCard({ cardPost, del }) {
    let apiUrl = "http://localhost:3333"
    const navigate = useNavigate()

    return (
        <div className="post-card col">
            {cardPost.image.startsWith("https") ?
                <div><img className="imm" src={`${cardPost.image}`} alt="" /></div>
                : <div> <img className="imm" src={`${apiUrl}/${cardPost.image}`} alt="" /></div>}
            <div className="card-inside">
                <h4>{cardPost.title}</h4>
                <p>{cardPost.content}</p>
                <p className="tag">
                {cardPost.tags.map((curTag, i) => {
                    return <span key={i} >#{curTag} </span>})} 
                </p>
            </div>
            <div className="card-btns">
                <button onClick={() => navigate(`/Posts/${cardPost.id}`)} className="btn btn-success">Dettagli post</button>
                <button onClick={del} className="btn btn-outline-danger del">🗑</button>
            </div>
        </div>
    )
}

export default AppCard