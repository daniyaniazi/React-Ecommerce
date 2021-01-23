import React from "react";
import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item

    return (
        <div className='collection-item'>
            <div className='collection-img'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)} >ADD TO CART</CustomButton>
        </div >
    )
}

const mapDispacthToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispacthToProps)(CollectionItem);