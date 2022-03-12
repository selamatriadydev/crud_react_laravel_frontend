import React, {Component} from 'react';
import axios from 'axios';
import MyForm from './component/MyForm';
import "./component/app.css";
import CostomerList from './component/CostomerList';
import Loader from './component/Loader';
class App extends Component {
  state = {
    customers : [],
    customer: {},
    loader:false,
    url : "http://127.0.0.1:8000/api/customers"
  }

   getCustomer = async ()=> {
    this.setState({loader:true});
    const customers = await axios.get(this.state.url);
    this.setState({customers:customers.data, loader:false});
  }
  deleteCustomer = async(id)=> {
    this.setState({loader:true});
     await axios.delete(`${this.state.url}/${id}`);
    this.getCustomer();
  }
  createCustomer = async (data)=> {
    this.setState({loader:true});
    await axios.post(this.state.url, {
      first_name : data.first_name,
      last_name : data.last_name,
      email : data.email
    });
    this.getCustomer();
  }
  editCustomer = async (data)=> {
    this.setState({customer:{}, loader:true});
    await axios.put(`${this.state.url}/${data.id}`,{
      first_name : data.first_name,
      last_name : data.last_name,
      email : data.email
    });
    this.getCustomer();
  }

  componentDidMount(){
    this.getCustomer();
  }

  onDelete = id => {
    this.deleteCustomer(id);
  }

  onEdit = data => {
    // console.warn("app", data);
    this.setState({customer:data});
  }

  onFormSubmit = (data) => {
    // console.warn("submit", data);
    if(data.isEdit){
    //if is edit true
    this.editCustomer(data);
    }else{
    //if is edit false
    this.createCustomer(data);
    }
  }
  render(){
    return (
      <div>
        <div className='ui fixed inverted menu'>
            <div className='ui container'>
              <a href='#' className='header item'>
                React Js
              </a>
            </div>
        </div>
        <div className='ui main container'>
          <MyForm 
          customer={this.state.customer}
          onFormSubmit={this.onFormSubmit} />
          {this.state.loader ? <Loader /> : ""}
          <CostomerList 
          customers={this.state.customers}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
           />
        </div>
      </div>
    )
  }
}

export default App;
