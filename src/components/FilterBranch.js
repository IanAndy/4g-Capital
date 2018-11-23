import React, {Component} from 'react'

class FilterBranch extends Component {

    handleChange = (event) => {
        let value  = event.target.value 
        this.props.onFilter(value)
	}
    
   render(){
       const selectboxContainer ={
           width: "300px",
           marginBottom: 0
       }
       return(
            <React.Fragment>
                <div style={selectboxContainer} className="form-group">
                    <select className="form-control" value={this.props.itemValue} onChange={this.handleChange} >
                        <option disabled hidden value=''>Select Branch</option>
                        {this.props.customerData.map((item, key) => {
                            
                            return <option key={key} value={item.value}>{item.branch}</option>;

                        })}
                    </select>
                    
                </div>
            </React.Fragment>
       )
   }
}

export default FilterBranch