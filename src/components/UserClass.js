import React from "react";
export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("parent component did mount");
    // this.timer = setInterval(() => {
    //   console.log("set time out");
    // }, 100);
  }

  componentWillUnmount() {
    //clearInterval(this.timer);
  }

  render() {
    console.log("parent render");
    return <div>User class Component</div>;
  }
}
