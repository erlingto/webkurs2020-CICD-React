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
    { center: [10.408773, 63.422091], name: "Trondheim" },
    { center: [10.445, 11.025], name: "Nigeria" },
    { center: [9.6515097, 59.6693196], name: "Kongsberg" },
    { center: [11.4096629, 62.4151857], name: "Os" },
    { center: [-64.825,18.3096629], name: "Jeffrey Epstein Island" },

];

const LocationMenu = (props) => {
    return (
        <div style={menuStyle}>
            {placesLayers.map((placesLayer) => (
                <div key={placesLayer.center}>
                    <input
                        id={placesLayer.center}
                        type="radio"
                        name="rtoggle"
                        value={placesLayer.center}
                        onClick={() => props.setPlacesLayerID(placesLayer.center)}
                        defaultChecked={placesLayer.center === props.placesLayerID}
                    />
                    <label>{placesLayer.name}</label>
                </div>
            ))}
        </div>
    )
}



export default LocationMenu  