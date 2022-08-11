import { useEffect, useState } from "react";
import { fackGitHubAPI } from "./api"
import "./style.css";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { Loading } from "../../components/loading";





export function Home() {

  const [user, setUser] = useState("");
  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

async function handleSubmit(event) {
  event.preventDefault();
  setLoading(true)
  setError(false)

  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();

    const arrResponse = data.map(item =>  {
      return {
        name: item.name,
        url: item.html_url,
      }
    })
    setRepos(arrResponse)
   
  } catch {
    setLoading(false)
    setError(true)
  }

setLoading(false)
}
  return (
    <div>
      <div className="container">
       <Header />

        <form onSubmit={handleSubmit}  className="form" id="form">
          <div className="form-camp">
            <input type="text" value={user} onChange={(event) => setUser(event.target.value)} placeholder="Type the GitHub username" />
            <button type="submit" >Search</button>
          </div>
        </form>
          
         {error && <div className="user-not-found">
             <p>Sorry! User not found</p>
         </div>}

         { !loading && repos && repos.length === 0 && <div className="empty">
              <p>There is not Repository!</p>
         </div>}
          
          {loading && <Loading />}
          <ul>
          { !loading && repos && repos.map(item => <Card key={item.name} name={item.name} url={item.url} />)}
          </ul>
      </div>
    </div>
  );
}
