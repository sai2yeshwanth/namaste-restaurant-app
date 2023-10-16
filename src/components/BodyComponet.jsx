import { RestauranCard } from './RestauranCard'
import { resData } from '../utils/constants'
import { useState } from 'react'

//body Componet
export const BodyComponet = () => {
    //create state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resData)
    
    return (
        <div className='body-container'>

            <div className='filter'>
                <button className='filter-btn'
                    onClick={() => {
                       const filterdRestaurants = listOfRestaurants.filter((item) => item.rating > 4)
                       setListOfRestaurants(filterdRestaurants )

                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map((item) => (
                    <RestauranCard key={item.id} data={item} />
                ))}
            </div>

        </div>
    )
}
