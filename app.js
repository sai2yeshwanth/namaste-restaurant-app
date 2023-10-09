import React from 'react';
import ReactDOM from 'react-dom/client'

const GreetingComponent = () => (
    <h1>Hello</h1>
)
const HeadingComponent = () =>
(
    <h1 className='head' >
        <GreetingComponent />
        Namaste React Using functional component
    </h1>
);

console.log(HeadingComponent);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);