import React from "react";

type HeaderTitleProps = {
  Heading: string;
  SubHeading?: string; // Optional prop
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ Heading, SubHeading }) => {
  return (
    <div className="bg-customBlue1 py-10 mx-auto px-6 sm:px-10 lg:px-16">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-[#E35A1E]">{Heading}</h1>
        {SubHeading && (
          <p className="mt-3 text-gray-100 text-lg max-w-3xl text-center mx-auto">
            {SubHeading}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderTitle;
