
import ContactUs from ".";
import PageHeader from "../PageHeader/PageHeader";



const MainContact = () => {
  return (
    <>
    <div className="mx-auto py-20 mt-12">
    <div className="py-6">
    <PageHeader title="Contact Us" path="contact-us" name="contactus" />
    <ContactUs />
    </div>
    </div>
    </>
  );
};

export default MainContact;
