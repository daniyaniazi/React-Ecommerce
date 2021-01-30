import { createSelector } from 'reselect';


const COLLECTION_ID_MAP = {
    hats: 1,
    sneaker: 2,
    jackets: 3,
    women: 4,
    mens: 5,
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = (collectionURLParam) => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionURLParam])
)