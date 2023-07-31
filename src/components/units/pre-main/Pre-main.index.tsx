import PreMainHeaderTop from "./header/PreMainHeaderTop";
import PreMainBody from "./body/PreMainBody";
import PreMainFooter from "./footer/PreMainFooter"
import PreMainHeaderBottom from "./header/PreMainHeaderBottom";

export default function PreMain():JSX.Element {

    return (
        <>
         <PreMainHeaderTop/>
         <PreMainHeaderBottom/>
         <PreMainBody/>
         <PreMainFooter/>
        </>
    )
}