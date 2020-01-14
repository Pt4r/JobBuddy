
import React from "react";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import ReactTable from "views/Tables/ReactTable";

const dataTable = [
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Jena Gaines", "Office Manager", "London", "30"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
  ["Michael Silva", "Marketing Designer", "London", "66"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"]
];

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
    render() {
      return (
        <>
        <PanelHeader size="sm" />
        <ReactTable
        title="Job Listings"
        columns={this.state.columns}
        data={this.state.data}
        filterable
        defaultPageSize={10}
        showPaginationTop
        showPaginationBottom={false}
        className="-striped -highlight"
      />
      </>
      );
  };
}

export default clientJobListings;
