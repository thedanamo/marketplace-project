import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedItem extends Component {
  handleClick = () => {
    this.props.dispatch({
      type: "set-number",
      number: Math.floor(Math.random() * 1000)
    });
  };

  // render = () => {
  //   return (
  //     <div>
  //       This is Item {this.props.match.params.id}!
  //       <button onClick={this.handleClick}>
  //         Random number: {this.props.randNum}
  //       </button>
  //     </div>
  //   );
  // };

  render = () => {
    console.log("Item props: \n" + this.props);
    return (
      <figure className="galleryItem">
        {" "}
        <Link to={"/item/" + this.props.itemId}>
          <div>{this.props.description}</div>{" "}
          <img height="100px" src={this.props.imageLocation} />{" "}
        </Link>{" "}
        <div>{this.props.cost}$</div>
        <Link to={"/seller/" + this.props.sellerId}> Link to seller </Link>
      </figure>
    );
  };
}

let mapStateToProps = state => {
  return {
    randNum: state.randomNumber
  };
};

let Item = connect(mapStateToProps)(UnconnectedItem);

export default Item;
