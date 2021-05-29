import React, {useState} from "react";
import axios from "axios";
import Mail from './email.svg';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState('Click the Button for Fetch the Users')

  const fetchData = () => {
    setClicked('Wait, We are fetching');
    axios.get('https://reqres.in/api/users?page=1')
      .then(response => {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }
 
  if(isLoading) {
    
  }

  return (
    <div>
      <div className="navbar">
        <nav>
          <div className="logo">
            <p>Company</p>
          </div>
          <div className="fetch">
              <button onClick={fetchData}>Fetch User</button>
          </div>
        </nav>
      </div>
      <div className="container">
        {isLoading ? 
          <div className="loadingbox">
            <div className="loading">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h3>{clicked}</h3>
          </div> 
          :(data.map(data => {
            const email = `mailto:${(data.email)}`;
            return(
              <div className="card" key={data.id}>
                <img src={data.avatar} alt="Avatar"/>
                <h3>{data.first_name + ' ' + data.last_name}</h3>
                <a href={email}><img src={Mail} alt="E-Mail" /></a>
              </div>
            )
          }))
        }
      </div>
    </div>
  );
}

export default App;
