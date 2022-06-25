import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  
  console.log(image)
  return (<article className='product'>
    <h4>Single Product</h4>
    <img src={image} alt={name}/>
    <h4>{name}</h4>
    <p>${price}</p>
    
    </article>);
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

Product.defaultProps = {
  name: 'default name',
  price: 0.00,
  imgage: defaultImage
}
export default Product;
