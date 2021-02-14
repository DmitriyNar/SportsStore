import React , {Component} from 'react'

export  class ProductList extends Component{
    render(){
        
        if(!this.props.products || this.props.products.length === 0){
            return <h4 className='bg-warning  text-white text-center m-2 p-2' > No products</h4>
        }
        else {
            return (
            <div>
            {this.props.products.map((p)=>(
                <div className='card m-1 p-1 bg-light' key={p.name}>
                    <h4>{p.name}
                        <span className='badge badge-pill badge-primary float-right m-2 p-1'>
                            {p.price.toFixed(2)}  
                        </span>
                    </h4>
                    <h4 className='card-text bg-white p-1'>
                        {p.description}
                        <button onClick={()=>this.props.addToCart(p,1)} className='btn btn-sm btn-success float-right '> Add To Cart</button>
                    </h4>
                </div>
            ))
            }
            </div>
        )}
    }
}