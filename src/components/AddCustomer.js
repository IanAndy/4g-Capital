import React, { Component } from 'react'


class AddCustomer extends Component {

  handleChange = (event)=> {
    event = event.target.value
    
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    let item = {
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      email: this.refs.email.value,
      number: this.refs.number.value,
      amount: this.refs.amount.value,
      branch: this.refs.branch.value
    }
   this.props.addCustomer(item)

   this.refs.firstname.value  = ""
   this.refs.lastname.value  = ""
   this.refs.email.value  = ""
   this.refs.number.value  = ""
   this.refs.amount.value  = ""
   this.refs.branch.value  = ""

  }


  render(){
      return(
        <React.Fragment>
        <button type="button" className="btn brown float-right" data-toggle="modal" data-target="#addModal">Add Customer</button>
        <div className="modal fade" id="addModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
									<h4 className="modal-title">New Customer</h4>
								</div>
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="usr">First Name:</label>
                      <input type="text" ref="firstname" className="form-control" id="lusr" placeholder="Last Name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lusr">Last Name:</label>
                      <input type="text" ref="lastname" className="form-control" id="lusr" placeholder="Last Name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" ref="email" type="email" className="form-control" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="number">Mobile Number</label>
                      <input id="number" ref="number" type="tel" className="form-control" name="email" placeholder="number" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="number">Loan Limit</label>
                      <input id="number" ref="amount" type="number" className="form-control" name="email" placeholder="number" required />
                    </div>


                    <div className="form-group">
                        <label htmlFor="select-branch">Select Branch</label>
                        <select ref="branch" className="form-control" id="select-branch" required >
                          <option disabled hidden value=''>Select Branch</option>
                          {this.props.customerData.map((item, key) => {
                              return <option key={key} value={item.value}>{item.branch}</option>;
                          })}
                        </select>
                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-default">Save</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
  }
}

export default AddCustomer