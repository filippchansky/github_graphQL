import Header from "./components/Header/Header";
import "./basic.css";
import Posts from "./components/Posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/pagination/Pagination";

function App() {
  const url = "https://api.github.com/graphql";
  const token = "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";
  const [searchText, setSearchText] = useState(
    JSON.parse(localStorage.getItem("text")) || ""
  );
  const [repository, setRepository] = useState(
    JSON.parse(localStorage.getItem("repository")) || []
  );

  const [currentPage, setCurrentPage] = useState(1)
  const [repositoryPerPage, setRepositoryPerPage] = useState(10)

  const lastRepositoryIndex = currentPage * repositoryPerPage 
  const firstRepositoryIndex = lastRepositoryIndex - repositoryPerPage 
  const currentRepository = repository.slice(firstRepositoryIndex, lastRepositoryIndex)
  const [paginationLink, setPaginationLink] = useState(false)


  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  let newText = "";

  function searchQuery() {
    newText = searchText; //вставить в запрос
    if (newText.length !== 0) {
      axios({
        url: url,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        data: {
          query: `query {
          search(query: "${newText}", type: REPOSITORY, first: 100) { 
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
    } else {
      axios({
        url: url,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        data: {
          query: `query {
            viewer {
              repositories(first: 100) {
                nodes {
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
      }).then((res) => setRepository(res.data.data.viewer.repositories.nodes));
    }
  }

  localStorage.setItem("repository", JSON.stringify(repository));
  localStorage.setItem("text", JSON.stringify(searchText));
  localStorage.setItem("currentrepository", JSON.stringify(currentRepository));

  console.log(repository);
  return (
    <div className="App">
      <Header
        searchQuery={searchQuery}
        newText={newText}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Posts posts={currentRepository} />
      <Pagination repositoryPerPage={repositoryPerPage} totalRepository = {repository.length} paginate = {paginate} paginationLink = {paginationLink} setPaginationLink = {setPaginationLink}/>
    </div>
  );
}

export default App;
