import React, {Component} from "react";
import Costomer from "./Costomer";

class CostomerList extends Component {

    onDelete = id => {
        this.props.onDelete(id); 
    }
    onEdit = data => {
        this.props.onEdit(data);
        // console.warn("edit ", id)
    }
    render(){
        const customers = this.props.customers;

        return(
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{width:'50px', textAlign:'center'}}>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           customers && customers.map(customer =>
                                <Costomer 
                                customer={customer} 
                                key={customer.id}
                                onDelete={this.onDelete}
                                onEdit={this.onEdit}
                                 />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CostomerList;