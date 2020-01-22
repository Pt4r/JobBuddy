
import React from "react";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import JobListingTable from "./Tables/JobListingTable"

import ReactTables from "views/Tables/ReactTable.jsx";
import axios from 'axios';

const dataTable = ()=>{

  axios.post("https://jsonplaceholder.typicode.com/users").then(function(response){console.log(response)});


  var result;
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url, {
    method: "GET"
  }).then(res => res.json())
  .then(data => {
    result=data;
  })
  console.log(result);

  return result;
};

var columns =[
  ["Name","name"],
  ["Position","position"],
  ["Office","office"],
  ["Age","age"],
  ["Actions","actions", false, false]
];



class clientJobListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columns,
      data: dataTable
    };
  }
componentDidMount(){
  axios.post("https://jsonplaceholder.typicode.com/users").then(function(response){console.log(response)});
}
  
    render() {
      return (
        <>
        <PanelHeader size="sm" />
        <JobListingTable/>
      </>
      );
  };
}

export default clientJobListings;
