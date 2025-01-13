import { NavLink } from "react-router-dom"

function MainNav(){
    const menuDiNav = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/AboutUs",
            title: "Chi Siamo"
        },
        {
            path: "/Form+Posts",
            title: "Lista degli articoli"
        }

    ]

    const print = menuDiNav.map((curElem) => {
        return (
            <li key={curElem.title}>
                <NavLink to={curElem.path}>{curElem.title}</NavLink>
            </li>
        )
    })

    return (
        <>
            <nav>
                <ul>
                    {print}
                </ul>
            </nav>
        </>
    )
}

export default MainNav