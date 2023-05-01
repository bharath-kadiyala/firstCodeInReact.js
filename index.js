//   const name = "Bharath";
//   const className = "greeting";
//   const fullName = (user) => user.firstName + " " + user.lastName;
//   const user = { firstName: "Bharath", lastName: "Kadiyala" };
//   const element = <h1 className="greeting">Hello, {fullName(user)}</h1>;
const name = "Bharath";
const element = (
  <div>
    <h1 className="greeting">Hello {name}!</h1>
    <p>Good to see you {name}.</p>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
