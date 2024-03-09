import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="Logo" />
                <span>Dandmin</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notifications">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://media.licdn.com/dms/image/D4D03AQGCF1yd7SNWOQ/profile-displayphoto-shrink_100_100/0/1699410202233?e=1715212800&v=beta&t=eRI7G1rNVq9krC4KFIdN8EQkJAe4wFJ-78Hj9vmQoz8" alt="" />
                    <span>Daniel</span>
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    )
}

export default Navbar