import { useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Circles.png";
import { Link } from 'react-router-dom';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import Dropdown from '@/helper/Dropdown';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const handleMobileLinkClick = () => {
    setIsMenuToggled(false);
    setOpenDropdown(null);
  };

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="Logo" className="h-20 w-auto bg-gray-100 rounded-full" />

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-lg`}>
                  <Link to="/" className="hover:text-primary-500 duration-200">Home</Link>
                  <Link to="/about-us" className="hover:text-primary-500 duration-200">About Us</Link>
                  
                  <Link to="/features" className="hover:text-primary-500 duration-200">Features</Link>
                  <Link to="/equipments" className="hover:text-primary-500 duration-200">Equipment</Link>
                  <Dropdown
                    buttonLabel="Plans & Pricing"
                    options={[
                      { label: "Memberships Offers", href: "/memberships" },
                    ]}
                  />
                  <Dropdown
                    buttonLabel="Workout"
                    options={[
                      { label: "Zumba", href: "/workout-zumba" },
                      { label: "Yoga", href: "/workout-yoga" },
                      { label: "Sauna", href: "/workout-sauna" },
                    ]}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Link to="/signin" className="hover:text-primary-500 transition duration-300">Sign In</Link>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 hover:bg-secondary-400 transition duration-300"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 h-screen w-full max-w-xs bg-primary-100 shadow-xl">
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuToggled(false)}
                className="rounded-full p-1 hover:bg-gray-200 transition duration-300"
              >
                <XMarkIcon className="h-8 w-8 text-gray-800" />
              </button>
            </div>

            <div className="flex h-[calc(100vh-80px)] flex-col justify-between px-8 pb-12">
              <div className="flex flex-col gap-6 text-2xl">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about-us", label: "About Us" },
                 
                  { to: "/features", label: "Features" },
                  { to: "/equipments", label: "Equipment" },
                  { 
                    label: "Plans & Pricing",
                    subItems: [
                      { to: "/memberships", label: "Memberships Offers" }
                    ]
                  },
                  { 
                    label: "Workout",
                    subItems: [
                      { to: "/workout-zumba", label: "Zumba" },
                      { to: "/workout-yoga", label: "Yoga" },
                      { to: "/workout-sauna", label: "Sauna" }
                    ]
                  },
                ].map((item) => (
                  <div key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        onClick={handleMobileLinkClick}
                        className="block py-2 hover:text-primary-500 transition duration-300"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="flex flex-col">
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                          className="flex items-center justify-between py-2 hover:text-primary-500 transition duration-300"
                        >
                          <span>{item.label}</span>
                          {openDropdown === item.label ? (
                            <ChevronUpIcon className="h-6 w-6" />
                          ) : (
                            <ChevronDownIcon className="h-6 w-6" />
                          )}
                        </button>
                        {openDropdown === item.label && (
                          <div className="ml-4 flex flex-col gap-3 border-l-2 border-gray-300 pl-4">
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.to}
                                onClick={handleMobileLinkClick}
                                className="block py-1.5 text-2xl hover:text-primary-500 transition duration-300"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <Link
                  to="/signin"
                  onClick={handleMobileLinkClick}
                  className="text-center text-2xl hover:text-primary-500 transition duration-300"
                >
                  Sign In
                </Link>
                 <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;