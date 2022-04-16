import React, {useEffect,useState} from 'react';
import './App.css';
import Api from './Components/Api'
import MovieRow from './Components/MovieRow'
import FeatureMovie from './Components/FeatureMovie'

function App() {

  const [movieList, setMovieList] = useState([])
  const [feautureData, setfeautureData] = useState(null)

  useEffect(()=>{
    const loadAll = async () => {
      const list = await Api.getHomeList()
      setMovieList(list)

      let netflix = list.filter(i=>i.title === 'Originais do Netflix')
      let random = Math.floor(Math.random()*netflix[0].items.results.length)
      let feautureData = netflix[0].items.results[random]  
      let infoChose = await Api.getFeature(feautureData.id, 'tv')
      setfeautureData(infoChose)
      console.log(infoChose);    
    }
  
    loadAll()
  },[])


  return (
    
    <div className="App">
      {feautureData &&
        <FeatureMovie item={feautureData}/>
      }      

      <section className='list'>
        {movieList.map((item,key)=>(
          <div key={key}>
            <MovieRow key={key} title={item.title} items = {item.items} />
          </div>
        ))}
      </section>

    </div>
  );
}

export default App;
