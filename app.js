//   const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello world from React! ");
//    const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(heading);

const parent = React.createElement(
              "div",
              {id:"parent"}, 
              React.createElement(
                "div",
                 {id:"child"},
                React.createElement("h1", {}, "I'm an h1 tag")
              )  
           
);

console.log(parent,'hello');
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);