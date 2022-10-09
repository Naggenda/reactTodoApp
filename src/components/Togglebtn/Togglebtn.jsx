import React, {useState} from 'react'

const Togglebtn = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div>
            <button onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>Toggle</button>
        </div>
    )
}

export default Togglebtn
