const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'api_key=677472ebf4e858bb33e3441807fbe170'
let k

const basicFetch = async (url)=> {
    const req  = await fetch(`${BASE_URL}${url}`)
    const json = await req.json()
    return json
}


export default k = {
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&${API_KEY}`)
            },
            {
                slug: 'treding',
                title: 'Em Alta',
                items: await basicFetch(`/trending/all/week?language=pt-BR&${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&${API_KEY}`)
            },
            

        ]
    },
    getFeature: async(id,type)=>{
        let info = {}
        if(id){
            switch(type){
                case 'tv':
                    info = await basicFetch(`/tv/${id}?${API_KEY}&language=pt-BR`)
                    break
                
                case 'movie':
                    info = await basicFetch(`/movie/${id}?${API_KEY}&language=pt-BR`)
                    break
                default :
                    info = null
                    break
            }
        }
        return info
    }
}