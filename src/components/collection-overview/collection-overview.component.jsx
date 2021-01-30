import React from "react";
import { connect } from "react-redux";
import './collection-overview.styles.scss';
import CollectionPreview from "../preview-collection/collection-preview.component";
import { selectCollections } from '../../redux/shop/shop.selector';


const CollectionOverview = ({ collections, }) => (
    <div className='collections-overview'>
        {  collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        )
        )}
    </div>
)

const mapStateToProps = (state) => ({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(CollectionOverview);