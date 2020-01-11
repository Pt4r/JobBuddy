import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
// react component used to create a calendar with events on it
import { Calendar, momentLocalizer } from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

import { PanelHeader } from "components";

import { events } from "variables/general.jsx";

const localizer = momentLocalizer(moment)

class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      alert: null
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  selectedEvent(event) {
    alert(event.title);
  }
  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Input something"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      )
    });
  }
  addNewEvent(e, slotInfo) {
    var newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end
    });
    this.setState({
      alert: null,
      events: newEvents
    });
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  eventColors(event, start, end, isSelected) {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor
    };
  }
  render() {
    return (
      <div>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">React Big Calendar</h2>
              <p className="category">
                A beautiful react component made by{" "}
                <a
                  href="https://github.com/intljusticemission"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  International Justice Mission
                </a>. Please checkout their{" "}
                <a
                  href="https://github.com/intljusticemission/react-big-calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  full documentation.
                </a>
              </p>
            </div>
          }
        />
        <div className="content">
          {this.state.alert}
          <Row>
            <Col xs={12} md={10} className="ml-auto mr-auto">
              <Card className="card-calendar">
                <CardBody>
                  <Calendar
                    localizer={localizer}
                    selectable
                    events={this.state.events}
                    defaultView="month"
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date()}
                    onSelectEvent={event => this.selectedEvent(event)}
                    onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                    eventPropGetter={this.eventColors}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MyCalendar;
