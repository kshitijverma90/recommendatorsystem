import React from 'react'
import Category from './Category'
import Products from './Products'
import { Link } from 'react-router-dom'
import './Initialproduct.css'
import Main from './Main'
function Initialproduct() {
  return (
    <div>
      <Main />
        <div className='categories'>
        <div className='categoriesdiv'>
      <Category /> 
     <Link to={"/category"}> <p className='categoryname'>Diary Products</p>  </Link>
     </div>
     <div className='categoriesdiv'>
      <Category /> 
     <Link to={"/category"}> <p className='categoryname'>Diary Products</p>  </Link>
     </div>
     <div className='categoriesdiv'>
      <Category /> 
     <Link to={"/category"}> <p className='categoryname'>Diary Products</p>  </Link>
     </div>
     <div className='categoriesdiv'>
      <Category /> 
     <Link to={"/category"}> <p className='categoryname'>Diary Products</p>  </Link>
     </div>
     <div className='categoriesdiv'>
      <Category /> 
     <Link to={"/category"}> <p className='categoryname'>Diary Products</p>  </Link>
     </div>
     <div className='categoriesdiv'>
      <Category /> 
     <Link to={"/category"}> <p className='categoryname'>Diary Products</p>  </Link>
     </div>
     <div className='categoriesdiv'>
      <Category /> 
     <Link to={"/category"}> <p className='categoryname'>Diary Products</p>  </Link>
     </div>
      </div>
      <div className='productlist'><Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      </div>
      <div className='productlist'><Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      </div>
    </div>
  )
}

export default Initialproduct