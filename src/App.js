import Header from "./components/Header/Header";
import "./basic.css"
import Posts from "./components/Posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const url = "https://api.github.com/graphql";
  const token = "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";
  const [searchText, setSearchText] = useState('');
  const [repository, setRepository] = useState([]);
  let newText = ''
  function searchQuery () {
    newText = searchText //вставить в запрос
    axios({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      data: {
        query: `query {
          search(query: "ocreact", type: REPOSITORY, first: 100) { 
            nodes {
              ... on Repository {
                id
                name
                stargazerCount
                updatedAt
                owner {
                  url
                  avatarUrl
                  id
                  login
                }
                description
                }
            }
          }
        }`,
      },
    }).then((res) => setRepository(res.data.data.search.nodes));
    console.log('working')
  }
  
  
  

  return <div className="App">
    <Header searchQuery = {searchQuery} newText = {newText} searchText = {searchText} setSearchText = {setSearchText}/>
    <Posts posts = {repository}/>
  </div>;
}

export default App;
