import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Col
} from "reactstrap";
import { Button } from "components";

import { Link } from "react-router-dom";

import bgImage from "assets/img/bg13.jpg";

class LockScreenPage extends React.Component {
  render() {
    return (
      <div className="wrapper wrapper-full-page ps">
        <div className="full-page section-image">
        <div className="content">
          <div className="lock-page">
            <Container>
              <Col lg={4} md={8} xs={12} className="mr-auto ml-auto">
                <Card className="card-lock text-center">
                  <CardBody>
                    <CardTitle tag="h1">404</CardTitle>
                    Ups! Page not found!
                  </CardBody>
                  <CardFooter>
                    <Link to="/" style={{color:"white"}}>
                    <Button round className="btn-info">
                    Go back home
                    </Button>
                    </Link>
                    </CardFooter>
                </Card>
              </Col>
            </Container>
          </div>
        </div>
        <div
          className="full-page-background"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        />
      </div>
      </div>
    );
  }
}

export default LockScreenPage;
