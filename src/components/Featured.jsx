import { useState, useEffect } from "react";

export default function Featured() {

    const [response, setResponse] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await fetch("https://api.rawg.io/api/games?key=e6eb8286a1984f7c8db3314fb95ae847&metacritic=97,100");
            const res = await data.json();
            setResponse(res.results);
        }
        getData();
    }, []);

    return (
        <div className="games-container">
            {response.map(item => {
                return ( item.background_image && 
                <div 
                className="game"
                >
                    <img src={item.background_image}></img>
                    <p>{item.name}</p>
                </div>
            )})}
        </div>
    );
}