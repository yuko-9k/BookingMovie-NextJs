import Nav from './NavbarHome'
export default function layout({children}) {
    return (
        <>
            <Nav/>
            {children}
        </>
    )
}
