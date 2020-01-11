/*eslint-disable*/
import React from "react";
import { Collapse, Card, CardHeader, CardBody } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:
        this.props.defaultOpened !== undefined ? this.props.defaultOpened : -1
    };
  }
  openCollapse(number) {
    if (this.state.open !== -1) {
      this.refs["collapse" + this.state.open].classList.toggle("expanded");
    }
    this.state.open === number
      ? this.setState({ open: -1 })
      : this.setState({ open: number });
    this.refs["collapse" + number].classList.toggle("expanded");
  }
  render() {
    return (
      <div className="card-collapse">
        {this.props.components.map((prop, key) => {
          return (
            <Card className={this.props.plain ? "card-plain" : ""} key={key}>
              <CardHeader>
                <a
                  data-toggle="collapse"
                  aria-expanded={this.state.open === key ? true : false}
                  className={this.state.open === key ? "expanded" : ""}
                  ref={"collapse" + key}
                  onClick={() => this.openCollapse(key)}
                >
                  {prop.title}
                  <i className="now-ui-icons arrows-1_minimal-down" />
                </a>
              </CardHeader>
              <Collapse isOpen={this.state.open === key ? true : false}>
                <CardBody>{prop.text}</CardBody>
              </Collapse>
            </Card>
          );
        })}
      </div>
    );
  }
}

Accordion.propTypes = {
  // Which one of the component will be opened by default
  defaultOpened: PropTypes.number,
  // The Accordion will have no background color
  plain: PropTypes.bool,
  // example: [{title: "Title of the Collapse", text: "Text/Body of the Collapse"}]
  components: PropTypes.arrayOf(PropTypes.object)
};

export default Accordion;
