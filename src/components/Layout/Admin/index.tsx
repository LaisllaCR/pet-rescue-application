import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import "./index.css";
import { Container } from "react-bootstrap";

type AppProps = {};
type AppState = {};
class LayoutAdmin extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    //this.props will already be of type AppProps.
    //Only the constructor props are any
  }

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
