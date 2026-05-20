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
            <section className="visualize" id="planet-images">
                <h2>Visualizing the Differences Between Planets</h2>
                <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight
                    how vastly different terrestrial planets are from gas giants and ice giants.</p>
                <div class="planets">
                    {planets.map(planet => (
                        <div>
                            <img src={planet.image} alt={planet.planet} />
                            <p key={planet}>{planet.planet}</p>
                            <p key={planet}>{planet.distanceFromSun}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Visualise