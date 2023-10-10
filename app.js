import React from 'react';
import ReactDOM from 'react-dom/client'

// header componet
const HeadingComponent = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img
                    className='logo'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2LZsFdj8LmrJ3Ixyibv2fVrDn4qex1QheQ&usqp=CAU' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Adout Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}
// RestauranCard
const RestauranCard = () => {
    return (
        <div className='res-card'>
            <img
                className='res-img-logo'
                src='https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=300' />
            <h4>KFC</h4>
            <h4>Burgers, Biryani</h4>
            <h4>4.5 stars</h4>
            <h4>25 min</h4>


            <img />
        </div>
    )
}

//body Commponet
const BodyComponet = () => {
    return (
        <div className='body-container'>
            {/* sesrch bar */}
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />
                <RestauranCard />

            </div>

        </div>
    )
}

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