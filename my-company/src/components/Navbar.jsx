import {Link} from react-router-dom

function Navbar (){
    return(
        <nav style={{display:'flex',backgroundColor:'blue',justifyContent:'center'}}>
            <Link stlye={{ color:'blue'}} to='/'>Home</Link>
            <Link stlye={{ color:'blue'}} to='/about'>About</Link>
            <Link stlye={{ color:'blue'}} to='/contact'>Contact</Link>
            <Link stlye={{ color:'blue'}} to='/services'>Services</Link>

        </nav>
    )
}
export default Navbar