import React from 'react'

const menuStyle = {
    position: "absolute",
    background: "white",
    padding: 10,
    zIndex: "2",
    top: 120,
    display: "flex",
};

const placesLayers = [
    { center: [10.408773, 63.422091], name: "LOL" },
    { center: [10.445, 11.025], name: "Oslo" },
    { center: [10.408773, 63.422091], name: "Da" },
    { center: [10.408773, 63.422091], name: "Satee" },
];

const LocationMenu = (props) => {
    return (
        <div style={menuStyle}>
            {placesLayers.map((placesLayer) => (
                <div key={placesLayer.id}>
                    <input
                        id={placesLayer.id}
                        type="radio"
                        name="rtoggle"
                        value={placesLayer.id}
                        onClick={() => props.setPlacesLayerID(placesLayer.id)}
                        defaultChecked={placesLayer.id === props.placesLayerID}
                    />
                    <label>{placesLayer.name}</label>
                </div>
            ))}
        </div>
    )
}



export default LocationMenu  