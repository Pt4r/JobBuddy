/*!

=========================================================
* Now UI Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {Link} from 'react-router-dom'

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Button
  
} from "reactstrap";

// core components
import bgImage from "assets/img/bg15.jpg";

class Pricing extends React.Component {
  componentDidMount() {
    document.body.classList.add("pricing-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("pricing-page");
  }
  render() {
    const onSuccess = (payment) => {
      // Congratulation, it came here means everything's fine!
              console.log("The payment was succeeded!", payment);
              // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log('The payment was cancelled!', data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  }

  let env = 'sandbox'; // you can set here to 'production' for production
  let currency = 'USD'; // or you can set this value from your props or state
  let total = 10; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

  const client = {
      sandbox:    'AVn-UVUHx7-h3rAMKdBuD_bfG1hMil5qm_mESB4w6HF7Pa9675n8X5chXecUq_pScbY0MAO2OmN9ScC6',
      production: 'YOUR-PRODUCTION-APP-ID',
  }
    return (
      <>

<PanelHeader size="sm" />
        <div className="content">
          <div className="pricing-page">
            <Container >
              <Row>
                <Col xs={12} md={6} className="ml-auto mr-auto text-center">
                  <h2 className="title"></h2>
                  <h5 className="description">
                  This is the best plan for you
                  </h5>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <Card className="card-pricing card-plain">
                    <h6 className="card-category">Bravo Pack</h6>
                    <CardBody>
                      <div className="card-icon icon-warning">
                        <i className="now-ui-icons media-1_button-power" />
                      </div>
                      <CardTitle tag="h3">10$</CardTitle>
                      <ul>
                        <li>Downloadable CV Template</li>
                        <li>Unlimited Job Listings</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                    <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                    <Button color="primary" className="btn-round" href='/cv.pdf' download>Click to download</Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div
          className="full-page-background"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        />
      </>
    );
  }
}

export default Pricing;
