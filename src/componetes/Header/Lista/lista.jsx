import { Link } from "react-router-dom"
import styled from "styled-components"


const Ul = styled.ul`
    display: flex;
    gap: 25px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    border: solid #fff;
     padding: 10px;
     border-radius: 10px;
    text-decoration: none;
     padding: 10px;
    &:hover{
        color: blue;
        border: solid blue;
    }
`
const Lista = () => {
    return (
        <nav>
            <Ul>
                <li >
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/nuevo-video">Nuevo video</StyledLink>
                </li>
            </Ul>
        </nav>
    )
}




export default Lista