import { Component } from "react";

class HighOrderFunction extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  // display all items
  renderItems = () => {
    return (
      <ul>
        {this.state.userData.map((items) => {
          return (
            <li key={items.id}>
              <span>Id: {items.id}</span>
              <span>Name: {items.name}</span>
              <span>Type: {items.user_type}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  // Display based on user type
  renderUsertype = () => {
    const filteredData = this.state.userData.filter((item) => {
      return item.user_type == "Designer";
    });
    return (
      <div>
        <ul>
          {filteredData.map((type) => {
            return (
              <li key={type.id}>
                <span>Id: {type.id}</span>
                <span>Name: {type.name}</span>
                <span>Type: {type.user_type}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // Filter all data starting with J
  renderCharacterJ = () => {
    const characterJ = this.state.userData.filter((char) => {
      return char.name[0] == "J";
    });
    return (
      <div>
        <ul>
          {characterJ.map((type) => {
            return (
              <li key={type.id}>
                <span>Id: {type.id}</span>
                <span>Name: {type.name}</span>
                <span>Type: {type.user_type}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // Filter all data based on age greater than 28 and age less than or equal to 50
  renderBasedOnAge = () => {
    const filteredAge = this.state.userData.filter((filterAge) => {
      return filterAge.age > 26 && filterAge.age < 50;
    });
    return (
      <div>
        <ul>
          {filteredAge.map((type) => {
            return (
              <li key={type.id}>
                <span>Id: {type.id}</span>
                <span>Name: {type.name}</span>
                <span>Type: {type.user_type}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  renderReducedData = () => {
    const userReduced = this.state.userData.filter((user) => {
      return user.user_type == "Designer";
    });

    const experience = userReduced.reduce((accumulator, type) => {
      return accumulator + type.years;
    }, 0);
    return <li>{experience}</li>;
  };
  render() {
    return (
      <div>
        <h2>Display all items</h2>
        {this.renderItems()}

        <h2>Display based on user type</h2>
        {this.renderUsertype()}

        <h2>Filter all data starting with J</h2>
        {this.renderCharacterJ()}

        <h2>
          Filter all data based on age greater than 28 and age less than or
          equal to 50
        </h2>
        {this.renderBasedOnAge()}

        <h2>Find the total years of the designers</h2>
        {this.renderReducedData()}
      </div>
    );
  }
}

export default HighOrderFunction;
