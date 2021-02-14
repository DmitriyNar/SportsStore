import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export  class CategoryNavigation extends Component{
    render(){
    return <React.Fragment>
        <Link className='btn btn-secondary btn-block'  to={this.props.baseURL}>
            ALL
        </Link>
        {  this.props.categories && this.props.categories.map((cat)=>{
        return <Link key={cat} className='btn btn-secondary btn-block' to={`${this.props.baseURL}/${cat.toLowerCase()}`}>
                {cat}
            </Link>
        })
        }
    </React.Fragment>
    }
}