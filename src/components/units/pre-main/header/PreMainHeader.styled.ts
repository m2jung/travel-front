import styled from "@emotion/styled";

export const Header = styled.div`
    width: 100vw;
`
export const BackImage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-position: center;
    background-size: cover;
    -webkit-background-size : cover;
	-moz-background-size : cover;
	-o-background-size: cover;
    padding: 20px;
`

export const Title = styled.div`
    margin : auto;
    color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-family: 'pre-font';
    text-align: center;
    line-height: 50px;
`

export const Start = styled.div`
    width: 160px;
    height: 30px;
    border: 2px solid white;
    border-radius: 20px;
    box-shadow: 1px 1px 1px lightgray;
    display: flex;
    align-items: center;
    color: ivory;
    font-size: 17px;
    margin-left: auto;
`

export const StartBtn = styled.div`
    width: 27px;
    height: 27px;
    border-radius: 15px;
    box-shadow: 1px 1px 1px gray;
    background-color: white;
    margin: 1px; 
`

export const StartText = styled.div`
    width: 100%;
    text-align: center;
`

export const StartMobile = styled.div`
    width: 90px;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 15px;
    box-shadow: 1px 1px 3px gray;
    background-color: rgba(255,255,255,0.3);
`

export const MobileText = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: white;
    text-align: center;
    line-height: 27px;
`