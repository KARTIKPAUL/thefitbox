import PageHeader from "../PageHeader/PageHeader"
import Faqs from "./Faqs"

const MainFaqs = () => {
    return(
        <div className="mx-auto w-5/6 py-20">
        <div className="p-6">
        <PageHeader title="Faqs" path="faqs" name="Faqs"/>
        <Faqs />
        </div>
        </div>
    )
}

export default MainFaqs;