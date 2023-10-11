import React from 'react';
import ReactDOM from 'react-dom/client'
import {HeadingComponent} from './components/HeaderComponent'
import {BodyComponet} from './components/BodyComponet'




//Body componet
const ApplayOut = () => {
    return (
        <div className='app'>

            {/* header */}
            <HeadingComponent />

            {/* Body */}
            <BodyComponet />

            {/* footer */}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplayOut />);