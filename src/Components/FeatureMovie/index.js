import React from "react";
import './index.css'

export default function padrao({item}){
    let data = new Date(item.first_air_date)
    let genero = item.genres.map(item=>item.name)
    let reduzirOverview = ()=>{
        if(item.overview.length>200){
            let descricao = item.overview.substring(0,200)+'...'
            return descricao
        }
        return item.overview
    }

    return(
        <div>
            
            <section className="featured" style={{
                backgroundSize: '1400px 750px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.poster_path})`
            }}>
                <div className="featured--vertical">
                    <div className="featured--horizontal">
                        <div className="featured--name">{item.name}</div>
                        <div className="featured--info">
                            <div className="featured--average">{item.vote_average} pontos</div>
                            <div className="featured--data">{data.getFullYear()}</div>
                            <div className="featured--points">{item.number_of_seasons} temporada{item.number_of_seasons<=1?'':'s'}</div>

                        </div>
                        <div className="featured--overview">{reduzirOverview()}</div>
                        <div className="feature--buttons">
                            <a href={`/watch/${item.id}`} className="featured--watch">Assistir</a>
                            <a href={`/list/add/${item.id}`} className="featured--add">+ Minha Lista</a>
                        </div>
                        <div className="featured--genre">{genero.join(', ')}</div>

                    </div>

                </div>
            </section>
        </div>
    )
}