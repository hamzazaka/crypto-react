
import { useState,useEffect} from 'react';
import './App.css';

function App() {
      const [page, setPage] = useState(1)
    const [people, setPeople] = useState([]);
     const [isPending, setisPending] = useState(true);
    const [gotEveryone, setGotEveryone] = useState(false)
    const [error, setError] = useState(null);

    const getDataforPeople= async()=>{
       if(!gotEveryone&& !error){
       const response =await fetch(`https://swapi.dev/api/people/?page=${page}`);
       if(response.status===404) setGotEveryone(true);
       const data=await response.json()
       if(data.results!==undefined){
       setPeople(people.concat(data.results));
        setPage(page + 1);
        setisPending(false)
       }
        
       }}
       
       console.log(people.filter(a=>a.name.toLowerCase().includes('j') && a.eye_color==='black'))


    useEffect(() => {
        getDataforPeople()
    }, [page]);

    return (
    <div>
          {isPending && <h1>Loading Data....</h1>}
      <ul>
         {people &&people.map((person, index) =>
          <li key={index}>
                   {person.name}
           </li>
                )}
      </ul>
    </div>
    )

}

export default App;
