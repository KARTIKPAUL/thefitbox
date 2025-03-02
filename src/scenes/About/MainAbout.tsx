import PageHeader from "../PageHeader/PageHeader"
import AboutUs from "./AboutUs"

const MainAbout = () => {
    return(
        <>
       <div className="mx-auto py-20 mt-12">
       <div className="py-6">
        <PageHeader title="About Us" path="about-us" name="AboutUs"/>
        <AboutUs />
        </div>
        </div>
        </>
    )
}

export default MainAbout