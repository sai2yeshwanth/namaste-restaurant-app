// RestauranCard
export const RestauranCard = (props) => {
    const {resName, resRating} = props
    return (
        <div className='res-card'>
            <img
                className='res-img-logo'
                src='https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=300' />
            <h4>{resName}</h4>
            <h4>Burgers, Biryani</h4>
            <h4>{resRating} stars</h4>
            <h4>25 min</h4>
        </div>
    )
}
