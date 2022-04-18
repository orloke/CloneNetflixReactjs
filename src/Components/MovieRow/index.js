import React, {useState} from "react";
import './index.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function Padrao({title, items}) {
    const [scrollx, setScrollx] = useState(-400)
    const showLeft = () =>{
        let x = scrollx + Math.round(window.innerWidth/2)
        if(x>0){
            x=0
        }
        setScrollx(x)
    }

    const showRight = () =>{
        let x = scrollx - Math.round(window.innerWidth/2)
        if(x < window.innerWidth - items.results.length*150){
            x = window.innerWidth - items.results.length*150 - 60
        }
        console.log(x, window.innerWidth - items.results.length*150);
        setScrollx(x)
    }
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={showLeft}>
                <NavigateBeforeIcon className="right"/>
            </div>
            <div className="movieRow--right" onClick={showRight}>
                <NavigateNextIcon className="left"/>
            </div>
            
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollx,
                    width: items.results.length*150
                }}>
                {items.results.length > 0 && items.results.map((item, key)=>(                    
                    <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                        alt={`${item.original_name}`}/>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}