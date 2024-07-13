import React from "react";
import "../css/home.css";
function TopBar() {
  return <div className="topbar"></div>;
}
function ContentContainer() {
  return <div className="maincontent">hello</div>;
}

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <TopBar />
          <ContentContainer />
        </div>
      </div>
    );
  }
}
export default Home;
