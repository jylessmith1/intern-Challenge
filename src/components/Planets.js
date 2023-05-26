import React, { useState, useEffect } from "react";

const Planets = () => {
    const [planet, setPlanet] = useState([]);
}
const myPlanet = async () => {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/planets?name=', {

            headers: { 'X-Api-Key': 'm3ldxl7CYU8tfLZ0aEIf6w==WzDHPa9kIIXDKQSk' },
            
        });

        const jsonData = await response.json();

        Planets(jsonData);

    } catch (error) {
        console.error('Error fetching workout:', error);
    }


    return (
        <>
            <section className="PlanetCard">

                <div className="planetHeader">
                    <h2>Planet</h2>
                </div>

                <div className="planetCardContainer">
                    {Planets.map((planets) => (
                        <div key={planets.name} className="card">
                            <h3>{planets.mass}</h3>
                            <h4>{planets.type} - {planets.radius}</h4>
                            <h5>{planets.muscle}</h5>
                            <p>{planets.period}</p>
                            <h4>{planets.offset}</h4>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
};


export default Planets;