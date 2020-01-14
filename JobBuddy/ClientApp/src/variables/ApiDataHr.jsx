// import React from "react";

// var dataTable = [];


// class ApiDataHr extends React.Component {

//     /**
//      * constructor
//      *
//      * @object  @props  parent props
//      * @object  @state  component state
//      */
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false
//         }
//     }
//     /**
//      * componentDidMount
//      *
//      * Fetch json array of objects from given url and update state.
//      */
//     componentDidMount() {

//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     dataTable: json,
//                     isLoaded: true
//                 })
//             }).catch((err) => {
//                 console.log(err);
//             });
//     }
// }

// export default ApiDataHr;

//     /**
//      * render
//      *
//      * Render UI
//      */
//     render() {

//         const { isLoaded, items } = this.state;

//         if (!isLoaded)
//             return <div>Loading...</div>;

//         return (
//             <div className="App">
//                 <ul>
//                     {items.map(item => (
//                         <li key={item.id}>
//                             Name: {item.name} | Email: {item.email}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );

//     }

// }
