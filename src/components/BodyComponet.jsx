import {RestauranCard} from './RestauranCard'

//body Componet
export const BodyComponet = () => {
    return (
        <div className='body-container'>
            {/* sesrch bar */}
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestauranCard resName='one' resRating = '4.5' />
                <RestauranCard resName='two' resRating = '4'/>

            </div>

        </div>
    )
}
