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
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        animation-name: ${floating};
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        @media (max-width: 1000px){
            width: 90%;
        }
    `

    const Title = styled.span`
        font-size: 120px;
        color: #720910;
        display: flex;
        flex-direction: column;
        align--items:center;
        text-align: center;
        font-weight: 700;
        line-height: 100px;
        @media (max-width: 800px){
            width: 90%;
            font-size: 99px;
            line-height: 80px
        }
        @media (max-width: 400px){
            font-size: 88px;
            line-height: 70px
        }
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
        @media (max-width: 500px){
            flex-direction: column;
            margin-top: 20px;
            height: 30vh;
        }
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
            background-color: rgba(0, 0, 0, 0);
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