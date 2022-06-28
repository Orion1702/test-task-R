import { useEffect, useMemo, useState } from 'react';
import './App.css';
import DataFilter from './Components/DataFilter';
import PeopleTable from './Components/PeopleTable';
import Loader from './Components/UI/loader/UiLoader';

function App() {
  const [peopleData, setPeopleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState({search: '', perPage: 3, pageActive: 0, dataCount: ''})

  useEffect(() => {
    setIsLoading(true)
    const request = 'GET',
          header = 'content-type: application/json',
          url = 'http://apis.chromeye.com:9191/people';
                
        fetch( url )
        .then( res => res.json() )
        .then( res => {
          setTimeout( async () => {
            setFilter({...filter, dataCount: res.length})
            setPeopleData(res)
            setIsLoading(false)
          }, 2700)
        } );  
  }, [])

  const sortedData = useMemo( () => {
    if(filter.perPage == 'all') {}
      return [...peopleData].filter(data => 
        data.lastName.toLowerCase().includes(filter.search.toLowerCase()) 
        || 
        data.firstName.toLowerCase().includes(filter.search.toLowerCase())
        )
        .slice(filter.pageActive*filter.perPage, (1 + filter.pageActive) * filter.perPage)
  }, [filter])

  return (
    <div className="App">
          <DataFilter filter={filter} setFilter={setFilter} />
          {isLoading
            ? <Loader />
            : <PeopleTable peoples={sortedData} />
          }
    </div>
  );
}

export default App;
