
import React, { Component } from 'react';
import DrinksData from './data/dessertRecipes'
import {Link} from 'react-router-dom'



class Dessert extends Component {

  constructor(props){
          super(props);
          this.state = {
              data: []
          };
      }

      fetchData = () =>{
        fetch('http://localhost:8000/all')
        .then(response => response.json())
         .then( data => {
             console.log(data);
             this.setState({
                 data: data
               });
           })

           .catch(error => console.log(error));
         }

      componentDidMount() {
         this.fetchData();

       }
  render() {
    // const listItems = this.state.data.map( item => <li key ={item.userId}>
    //                <Link to ={`/${item.firstname}`}> {item.emailaddress} </Link> :  {item.password}
    //            </li>)
    //

 // DrinksData=  this.state.data.map( item => <li key ={item.photo}>
 //                <Link to ={`/${item.photo}`}> {item.photo} </Link> :  {item.id}
 //             </li>)
//   const itimes= {
//   Image: `url('${this.props.DrinksData.photo}')`
// }
 //const drinks = DrinksData.map(item=> <img key ={item.photo} src={process.env.PUBLIC_URL +`image/vegetarian/${item.photo}`} alt={item.photo}/>)
 //const drinks = DrinksData.map(item=> <img key ={item.id} src={`./vegeterian/${item.photo}`} alt={item.photo}/>)

     return (

<div>
      <header className="gNav">
        <ul className="headerButtons">
          <li><Link to = '/HomePage'>Home</Link></li>
          <li><Link to = '/About'>About</Link></li>
          <li><Link to = '/Recipe'>Recipe</Link></li>
          <li><Link to = '/MyForm'>Login</Link></li>
        </ul>
      </header>

<h1> Dessert Menu</h1>

            <div >

            {DrinksData.map((item, index)=> {

              return <div  className= 'col-lg-4'  key ={item.id} > <li className= "dessert" ><img src={process.env.PUBLIC_URL +`/image/dessert/${item.photo}`} alt={item.photo}/>
              </li>
              <p>{item.discription}</p>
              </div>})}

              </div>

<footer className =  "footer">

<div className="fLeft">
  <ul>
    <li><a href="https://www.facebook.com/login.php?login_attempt=1&lwv=110">Facebook</a></li>
    <li><a href="https://www.instagram.com/accounts/emailsignup/?hl=en">Instagram</a></li>
    <li><a href="https://twitter.com/login?lang=en">Twitter</a></li>
  </ul>
</div>

<div className="fRight">
<ul>
  <li><a href="contact-us.html">Contact us</a></li>
  <li><Link to = '/About'>About us</Link></li>


</ul>
<p>2018 Recipre Store, LLC.
All right reserved.</p>
</div>

</footer>
  {/* <Route path="/NavBar" component={NavBar}/>*/ }
  {/*<Route path="/About" exact component={About}/>*/}
</div>
    )
  }
}
export default Dessert;

//   import drinks from '../Pages/data/datastorage'
