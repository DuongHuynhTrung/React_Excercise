import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Car from './components/Car';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

// Exercise 2
// class App extends React.Component {
//   render() {
//     return (
//       <div className='App'>
//         <Navbar dark color='primary'>
//           <div className='container'>
//             <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//       </div>
//     )
//   }
// }

// Exercise 3.1
// function App() {
//   return (
//     <Welcome name="Duong" />
//   )
// }

// const commnet = {
//   date: new Date(),
//   text: 'I hope you enjoy my restaurant!',
//   author: {
//     name: 'Alberto',
//     avatarUrl: 'public/assets/images/._alberto.png'
//   }
// }

// function App() {
//   return (
//     <Comment date={commnet.date} text={commnet.text} author={commnet.author} />
//   )
// }

// Exercise 3.1
// function App() {
//   return (
//     <Car />
//   )
// }

// function App() {
//   return (
// <div className="App">
//   <Navbar dark color='primary'>
//     <div className='container'>
//       <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
//     </div>
//   </Navbar>
//   <Menu />
// </div>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    )
  }
}



export default App;
