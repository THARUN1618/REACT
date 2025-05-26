const parent = React.createElement(
    "parent",
    { id: "parent" },
    [
        React.createElement(
            "child",
            { id: "child" },
            [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
        ),
        React.createElement(
            "child",
            { id: "child" },
            [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
        )
    ]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
