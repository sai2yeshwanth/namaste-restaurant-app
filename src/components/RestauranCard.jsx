// RestauranCard
export const RestauranCard = (props) => {
    const {data} = props
    console.log(data)
    return (
        <div className='res-card'>
            <img
                className='res-img-logo'
                src={data.image} />
            <h4>{data.name}</h4>
            <p>{data.detail}</p>
            <h4>{data.rating} stars</h4>
            <h4>{data.time}</h4>
        </div>
    )
}
