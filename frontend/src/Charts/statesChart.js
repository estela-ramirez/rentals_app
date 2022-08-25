import React, { useEffect, useState} from 'react'
import Plot from 'react-plotly.js';

function StatesMap() {
    const [myMap, setMyMap] = useState(new Map());

    useEffect(()=>{
        fetch('http://localhost:4000/states')
        .then(response => response.json())
        .then((json) => { 
            setMyMap(json);
            console.log(myMap);
        });
    }, [])



    return (
        <>
            <Plot 
                data= {[{
                    type: 'choropleth',
                    locationmode: 'USA-states',
                    locations: Object.keys(myMap),
                    z: Object.values(myMap), 
                    text: Object.keys(myMap),
                    colorscale: [
                        [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                        [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                        [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
                    ],
                }]}
                layout= { {
                    title: '2021 Average Rental Prices By State',
                    width: window.outerWidth,
                    height: window.outerHeight,
                    geo:{
                        scope: 'usa',
                        countrycolor: 'rgb(255, 255, 255)',
                        showland: true,
                        landcolor: 'rgb(217, 217, 217)',
                        showlakes: true,
                        lakecolor: 'rgb(255, 255, 255)',
                        subunitcolor: 'rgb(255, 255, 255)',
                    }
                } }
            />
        </> 
    );
}

export default StatesMap;
