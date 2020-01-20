import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

import { Button } from "components";

class CardSocial extends React.Component {
  render() {
    return (
      <div className="social">
        {this.props.socials.map((prop, key) => {
          var socialObj = {};
          socialObj[prop.name] = true;
          var social = [socialObj];
          return social.map((item, index) => {
            return (
              <Button icon round fa key={key} href={prop.link} {...item}>
                <i className={"fab fa-" + prop.name} />
              </Button>
            );
          });
        })}
        {this.props.description !== undefined ? (
          <h5 className="card-description">{this.props.description}</h5>
        ) : null}
      </div>
    );
  }
}

CardSocial.propTypes = {
  // example: [{name: "name of the social (can be any of font awesome social images)", link:"where the user should be redirected on icon click"}, ...]
  // to see what names you can pass, please take a look inside the src/views/Components/Buttons.jsx - social buttons
  socials: PropTypes.arrayOf(PropTypes.object),
  // description under the socials
  description: PropTypes.node
};

export default CardSocial;
