import React from 'react';
import ReactDom from 'react-dom';

function Greeting(){
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>This is a message.</p>
};

// function Greeting() {
//   return (
//     <React.Fragment>
//     <div>
//       <h3>Hello World</h3>
//       <ul>
//         <li>
//           <a href="#">X</a>
//         </li>
//         <img src='' />
//         <input type='' name='' id='' />
//       </ul>
//     </div>
//     </React.Fragment>
//   );
// }

// function Greeting(){
//   return <h1>
//     Hello</h1>
//    return  (
 //             <div>
 //               <h1>......</h1>
 //             </div>
 //           );
// }

ReactDom.render(<Greeting/>, document.getElementById('root'));

