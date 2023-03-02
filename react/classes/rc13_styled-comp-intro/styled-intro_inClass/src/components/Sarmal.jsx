import styled from "styled-components"

const Sarmal= styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${({bg})=> bg || "grey"};
`

export default Sarmal