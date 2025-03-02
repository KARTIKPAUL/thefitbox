import { Link } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';

const TermsConditions = () => {
  return (
    <div className='app'>
      
      <div className="mx-auto w-5/6 py-20">
        {/* <h1 className="text-3xl font-bold">Terms & Conditions</h1> */}
        <div className=" min-h-screen p-6">
        <PageHeader title="Terms & Conditions" path="terms-conditions" name="Terms & Conditions"/>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions for TheFitBox Gym</h1>
        <p className="text-gray-700">Effective Date: 25/02/2025</p>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-gray-700">Welcome to TheFitBox Gym. By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions.</p>
        </section>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold">2. Membership and Services</h2>
          <p className="text-gray-700">Membership grants access to our facilities and services under the terms specified at the time of registration.</p>
        </section>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold">3. Code of Conduct</h2>
          <p className="text-gray-700">Members must follow gym rules, respect staff and fellow members, and maintain hygiene standards.</p>
        </section>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold">4. Liability and Waiver</h2>
          <p className="text-gray-700">TheFitBox Gym is not responsible for injuries, lost items, or accidents that occur within the premises.</p>
        </section>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold">5. Termination of Membership</h2>
          <p className="text-gray-700">We reserve the right to terminate memberships for violations of our policies.</p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">6. Contact Us</h2>
          <p className="text-gray-700">For any questions, please contact us at:</p>
          <p className="text-gray-700 font-semibold">TheFitBox Gym</p>
          <p className="text-gray-700">Near Madhab More, New Town, Alipurduar, India -736121</p>
          <p className="text-gray-700">Email: <strong>thefitboxalipurduar@gmail.com</strong></p>
          <p className="text-gray-700">Phone: <strong> 099077 30482</strong></p>
        </section>
        <Link to="/" className="text-primary-500 underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    </div>
        
      </div>

      
    </div>
  );
};

export default TermsConditions;