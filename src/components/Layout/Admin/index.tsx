import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import "./index.css";

type AppProps = {};
type AppState = {};
class LayoutAdmin extends React.Component<AppProps, AppState> {
  public render() {
    return (
      <div className="page-container">
        <Header />
        <section>{this.props.children}</section>
        <Footer />
      </div>
    );
  }
}
export default LayoutAdmin;
