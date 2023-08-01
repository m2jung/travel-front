import styled from "@emotion/styled"
import PreMain from '../../Pre-main.index';

export const Wrapper = styled.div`
    width: 900px;
    height: 700px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    
`
export const WrapperLeft = styled.div`
    width: 400px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: end;
`
export const WrapperRight = styled.div`
    width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const PhoneImage = styled.img`
    width: 230px;
    height: 460px;
    background-position: center;
    background-size: cover;
`
export const PhoneBubble = styled.div`
    width: 350px;
    height: 150px;
    background-color: rgba(255,255,255,0.7);
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 35px;
`
export const BubbleText = styled.div`
    color: rgba(0,0,0,0.9);
`
export const PhoneSummary = styled.div`
    width: 340px;
    height: 120px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const Summary = styled.div`
    line-height: 35px;
`
