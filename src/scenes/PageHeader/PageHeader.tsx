import React from "react";
import "../../css/page_header.css"

type PageHeaderProps = {
  title: string;
  path: string;
  name: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, path, name }) => {
  return (
    <div className="page-header" style={{ marginTop: "-500px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{title}</h2>
          </div>
          <div className="col-12">
            <a href="/">Home</a>
            <a href={path}>{name}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
