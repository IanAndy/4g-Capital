import React, { Component } from 'react'

import customerData from '../assets/customers.json'
import SiteLogo from '../assets/images/logo-white.png'
import HeaderMain from './HeaderMain'
import MainSidebar from './MainSidebar'
import FilterBranch from './FilterBranch'
import AddCustomer from './AddCustomer'
import SingleCard from './SingleCard';


class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			customer: [],
			queryItem: '',
		}
	}


	handleAditem = (item) =>{
		let tempCustomer = this.state.customer;
		tempCustomer.push(item)
		console.log(tempCustomer)
		this.setState({
			customer: tempCustomer
		})
	}

	handleFilter = (item) => {
		this.setState({
			queryItem: item
		})
	}
	
	componentDidMount(){
		this.setState({
			customer: customerData
		})
	}

	render(){
		var filterBranch = [];
		let listCustomer = this.state.customer
		let queryItem = this.state.queryItem
		let branch =  this.state.customer.branch
		console.log(branch)
		listCustomer.forEach(item => {
			if(
				(item.branch.toLowerCase().match(queryItem.toLowerCase()))
			){
				filterBranch.push(item)
			}
		})


		filterBranch = filterBranch.map((item, index) => {
			return(
				<SingleCard
					key= {index}
					item = {item} 
				/>
			)
		})

		return(
			<div>
				<HeaderMain />
				<MainSidebar logo={SiteLogo} />
				<div className="content-section">
					<div className="container-fluid">
						<div className="row">
							<div className="row">
								<div className="col-md-12">
									<div className="col-md-6">
										<FilterBranch 
											onFilter={this.handleFilter}
											customerData={this.state.customer}
											itemValue={this.state.queryItem}
										/>
									</div>
									<div className="col-md-6">
										<AddCustomer 
											addCustomer={this.handleAditem}
											handleTyping={this.handleInput}
											customerData={this.state.customer}
											/>
									</div>
								</div>
							</div>
							<div>
								{filterBranch}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Main