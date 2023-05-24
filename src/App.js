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

 

  useEffect(() => {
    axios({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      data: {
        query: `query {
          search(query: "${searchText}", type: REPOSITORY, first: 100) {
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
  }, []);
  
  console.log(searchText)

  return <div className="App">
    <Header searchText = {searchText} setSearchText = {setSearchText}/>
    <Posts posts = {repository}/>
  </div>;
}

export default App;
