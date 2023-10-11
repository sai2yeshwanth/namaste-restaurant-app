// header componet
export const HeadingComponent = () => {
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