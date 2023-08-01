import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 900px;
    height: 400px;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MobileBanner = styled.div`
    width: 900px;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 10px lightgray;
    border-radius: 20px;
`
export const BannerSection = styled.div`
    width: 400px;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BannerText = styled.h2`
    line-height: 55px;
    span {
        color: tomato;
    }
    
`

export const BannerImage = styled.img`
    width: 100%;
    height: 99%;
`