

function PlanetData() {
    return (
        <>
            <section class="planet-data">
                <div className="planet-data-details">
                    <h2>How Planetary Data Helps Us Understand Space</h2>
                    <p>Planetary science goes beyond images. Comparing <span class="blue-text">mass, diameter, gravity,</span>
                        and <span>density</span> density, we gain insight
                        into how planets form, behave, and interact within the solar system.</p>
                </div>
                <iframe width="640" height="320" src="https://www.youtube.com/embed/lcZTcfdZ3Ow"
                    title="The Planets In Our Solar System" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </section>
        </>
    )
}

export default PlanetData