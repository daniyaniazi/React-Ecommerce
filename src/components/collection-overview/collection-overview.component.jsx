import React from "react";
import { connect } from "react-redux";
import './collection-overview.styles.scss';
import CollectionPreview from "../preview-collection/collection-preview.component";
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';


const CollectionOverview = ({ collections, }) => {
    console.log(collections)
    return (
        <div className='collections-overview'>
            {  collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            )
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview);