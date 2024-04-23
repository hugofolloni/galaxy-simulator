import styled, { keyframes }from "styled-components"

const Presentation = () => {

    const PresentationDiv = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    const floating = keyframes`
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 15px); }
        100%   { transform: translate(0, -0px); } 
    `

    const TextBox = styled.div`
        width: 500px;
        height: 500px;
        display: flex;
        // margin-left: -50px;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        animation-name: ${floating};
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    `

    const Title = styled.span`
        font-size: 120px;
        color: #720910;
        text-align: center;
        font-weight: 700;
        line-height: 100px;
    `

    const Span = styled.span`
        font-size: 36px;
        color: #720910;
        text-align: center;
        font-weight: 700;
    `

    const ButtonsDiv = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100px;
        align-items: center;
        justify-content: space-around;
    `

    const Button = styled.a`
        text-decoration: none;
        width: 200px;
        height: 60px;
        background-color: #720910;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 38px;
        color: #010914;
        border: 3px solid #720910;
        transition: 0.3s ease all;
        &:hover{
            background-color: #010914;
            color: #720910;
        }
    `

    return ( 
        <PresentationDiv>
            <TextBox>
                <Title>react stars particles</Title>
                <Span>Create this amazing effect on your website's background!</Span>
                <ButtonsDiv>
                    <Button href='https://npmjs.com/package/react-stars-particles' target='_blank'>NPM</Button>
                    <Button href='https://github.com/hugofolloni/react-stars-particles' target='_blank'>GitHub</Button>
                </ButtonsDiv>
            </TextBox>
        </PresentationDiv>
     );
}
 
export default Presentation;