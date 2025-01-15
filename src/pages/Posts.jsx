// /* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from 'axios';
import AppCard from "../components/AppCard"

function Posts() {

  let protoPost = {
    title: "",
    image: "",
    content: "",
    tags: "",
    // pubblicato: false
  }

  let [listaPosts, setListaPosts] = useState([])
  let [listaTags, setListaTags] = useState([])
  let [post, setPost] = useState("")
  let [tagFiltro, setTagFiltro] = useState("all")
  let apiUrl = "http://localhost:3333"

  useEffect(() => {
    console.log("partito")
    getPosts();
    getTags();
  }, []);

  const getPosts = () => {
    axios.get(`${apiUrl}/posts`).then((resp) => {
      setListaPosts(resp.data.blogPosts);
      setPost(protoPost);
    });
  };

  const getTags = () => {
    axios.get(`${apiUrl}/posts`).then((resp) => {
      let posts = resp.data.blogPosts;
      let newListaTags = []
      for (let i = 0; i < posts.length; i++) {
        let curTagList = posts[i].tags
        for (let j = 0; j < curTagList.length; j++) {
          if (!newListaTags.includes(curTagList[j])) {
            newListaTags.push(curTagList[j])
          }
        }
      }
      setListaTags(newListaTags)
    });
  };

  const removePost = (a) => {
    axios.delete(`${apiUrl}/posts/${a}`).then(() => {
      getPosts()
    })
  }

  const printPosts = listaPosts.map((curPost) => {

    if (tagFiltro === "all") {
      return (<div key={curPost.id} id={curPost.id} className="d-flex align-items-start mt-5 gap-1">
        <AppCard cardPost={curPost} del={() => removePost(curPost.id)} />
      </div>)
    } else if (curPost.tags.includes(tagFiltro)) {
      return (<div key={curPost.id} id={curPost.id} className="d-flex align-items-start mt-5 gap-1">
          <AppCard cardPost={curPost} del={() => removePost(curPost.id)} />
        </div>)
    } else {
      return (false)
    }
  })

  const printTags = listaTags.map((curTag, i) => {
    return (
      <option key={i} value={curTag}> {curTag}</option>
    )
  })

  const filtra = (event) => {
    let newValue = event.target.value;
    setTagFiltro(newValue)
  }


  return (
    <>
      <div className="container mt-5">
        <h1>Il mio Blog</h1>
        {/* TITOLO DEI POSTS */}
        <div>
          <div className="row row-cols-3 my-5">
            <label htmlFor="tagFiltro" className="form-label mt-4 mb-1">Filtra</label>
            <select id="tagFiltro" name="tagFiltro" required className="form-select" value={tagFiltro} onChange={(event) => filtra(event)}>
              <option value="" disabled>Seleziona...</option>
              {printTags}
            </select>

            {printPosts}
          </div>
        </div>

      </div>
    </>
  )
}

export default Posts
