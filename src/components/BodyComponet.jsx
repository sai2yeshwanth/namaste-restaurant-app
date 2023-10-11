import {RestauranCard} from './RestauranCard'
import {resData} from '../utils/constants'

//body Componet
export const BodyComponet = () => {
    return (
        <div className='body-container'>
            {/* sesrch bar */}
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                    resData.map((item)=> (
                        <RestauranCard data={item} />

                    )
                    )
                }

            </div>

        </div>
    )
}
