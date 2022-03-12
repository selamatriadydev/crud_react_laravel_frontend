import React, {Component} from "react";

class Costomer extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.customer.id); 
    }
    onEdit = () => {
        // console.warn("delete")
        this.props.onEdit(this.props.customer); 
    }
    render(){
        const {id, first_name, last_name, email} = this.props.customer;
        return(
                <tr>
                <td>{id}</td>
                <td>{`${first_name} ${last_name}`}</td>
                <td>{`${email}`}</td>
                <td>
                    <button className="mini ui blue button" onClick={this.onEdit}>Edit</button>
                    <button className="mini ui red button" onClick={this.onDelete}>Hapus</button>
                </td>
            </tr>
        )
    }
}

export default Costomer;