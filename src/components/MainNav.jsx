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
            path: "/Posts",
            title: "Lista degli articoli"
        },
        {
            path: "/Form",
            title: "Form"
        }


    ]

    const print = menuDiNav.map((curElem) => {
        return (
            <li key={curElem.title}>
                <NavLink  className="navlink" to={curElem.path}>{curElem.title}</NavLink>
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