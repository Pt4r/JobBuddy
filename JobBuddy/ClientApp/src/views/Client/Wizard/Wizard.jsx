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
import React, { Component } from "react";
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import Axios from 'axios';


import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import { useState } from "react";

var steps = [
  {
    stepName: "Job Listing Info",
    stepIcon: "now-ui-icons users_circle-08",
    component: Step1
  },
  {
    stepName: "Stage",
    stepIcon: "now-ui-icons ui-1_settings-gear-63",
    component: Step2
  },
  {
    stepName: "Company & Job Category",
    stepIcon: "now-ui-icons ui-1_email-85",
    component: Step3,
    stepProps: {}
    

  }
];



class Wizard extends React.Component {
  constructor(props){
    super(props)   
  this.state = {

    }
}




  finishButtonClick(allStepStates){    
    const joblisting = {
      title: allStepStates.JobListingInfo.title,
      info: allStepStates.JobListingInfo.info,
      companyId: allStepStates.CompanyJobCategory.selectComp.value,
      jobCategoyId: allStepStates.CompanyJobCategory.selectJobCat.value

    }
    console.log(this.state)
    Axios.post(`https://localhost:5001/api/joblistings/Create`, joblisting)        
          .then(res => {            
          console.log(res)
          })
          .catch(error => {
              console.log(error)
          })
  }

  
  render() {
 
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Col xs={12} md={10} className="mr-auto ml-auto">
            <ReactWizard
              steps={steps}
              navSteps
              validate
              title="Build Your Profile"
              description="This information will let us know more about you."
              headerTextCenter
              color="blue"
              finishButtonClasses="btn-wd"
              nextButtonClasses="btn-wd"
              previousButtonClasses="btn-wd"
              finishButtonClick={this.finishButtonClick}
            />
          </Col>
        </div>
      </>
    );
  }
}

export default Wizard;
