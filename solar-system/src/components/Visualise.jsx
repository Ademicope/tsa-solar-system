import axios from 'axios'
import { useEffect, useState } from 'react'

function Visualise() {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        axios.get("https://anurella.github.io/json/planets.json")
            .then(res => setPlanets(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <section className="visualize">
                <h2>Visualizing the Differences Between Planets</h2>
                <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight
                    how vastly different terrestrial planets are from gas giants and ice giants.</p>
                <div className="planets">
                    {planets.map(planet => (
                        <figure>
                            <img src={planet.image} alt={planet.planet} />
                            <figcaption className='planet-details'>
                                <p key={planet}>{planet.planet}</p>
                                <p key={planet}>{planet.distanceFromSun}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Visualise