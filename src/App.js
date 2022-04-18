import React, {useEffect,useState} from 'react';
import './App.css';
import Api from './Components/Api'
import MovieRow from './Components/MovieRow'
import FeatureMovie from './Components/FeatureMovie'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  const [movieList, setMovieList] = useState([])
  const [feautureData, setfeautureData] = useState(null)
  const [black, setBlack] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {
      const list = await Api.getHomeList()
      setMovieList(list)

      let netflix = list.filter(i=>i.title === 'Originais do Netflix')
      let random = Math.floor(Math.random()*netflix[0].items.results.length)
      let feautureData = netflix[0].items.results[random]  
      let infoChose = await Api.getFeature(feautureData.id, 'tv')
      setfeautureData(infoChose)
    }
  
    loadAll()
  },[])

  const rolagem = ()=>{
    if(window.scrollY>10){
      setBlack(true)
    }
    else{
      setBlack(false)
    }
  }

    window.addEventListener('scroll',rolagem)

  return (
    
    <div className="App">
      <Header black = {black}/>

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

      <Footer/>          
    </div>
  );
}

export default App;
