import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/scenes/home";

import PrivacyPolicy from "./scenes/Privacy/PrivacyPolicy";
import TermsConditions from "./scenes/Terms/TermsConditions";


import Layout from "./scenes/LayOut";




import MainContact from "./scenes/ContactUs/MainContact";
import MainAbout from "./scenes/About/MainAbout";
import MainFaqs from "./scenes/Faqs/MainFaqs";
import MainClass from "./scenes/ourClasses/MainClass";
import CertifiedTrainers from "./scenes/Triner/CertifiedTrainer";
import PersonalTrainer from "./scenes/Triner/PersonalTrainer";
import YogaAndZumba from "./scenes/Triner/YogaZumba";
import Features from "./scenes/Fearures/Features";
import EquipmentPage from "./scenes/Eqipments/Eqipments";
import Membership from "./scenes/Memberships/Memberships";
import ZumbaPage from "./scenes/Workout/Zumba";
import YogaPage from "./scenes/Workout/Yoga";
import Sauna from "./scenes/Workout/Suana";
import ScrollToTop from "./ScroolToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* All routes nested here will render inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/benifits" element={<MainBenefits  /> } /> */}
          <Route path="/contact-us" element={<MainContact />} />
          <Route path="/our-class" element={<MainClass />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/faqs" element={<MainFaqs />} />
          <Route path="/about-us" element={<MainAbout />} />
          <Route path="/certified-trainer" element={<CertifiedTrainers />} />
          <Route path="/personal-trainer" element={<PersonalTrainer />} />
          <Route path="/yoga-zumba-trainer" element={<YogaAndZumba />} />
          <Route path="/features" element={<Features />} />
          <Route path="/equipments" element={<EquipmentPage />} />
          <Route path="/memberships" element={<Membership />} />
          <Route path="/workout-zumba" element={<ZumbaPage />} />
          <Route path="/workout-yoga" element={<YogaPage />} />
          <Route path="/workout-suana" element={<Sauna />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
