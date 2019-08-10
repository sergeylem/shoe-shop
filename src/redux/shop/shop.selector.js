import {createSelector} from 'reselect';

// const COLLECTION_ID_MAP = {   //Comments is because Now we use SHOP_DATA as object.
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)   

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );    
    
// When we use used SHOP_DATA as an array instead of object. Now we use SHOP_DATA as object.
// export const selectCollection = collectionUrlParam =>
//     createSelector(
//         [selectCollections],
//         collections => 
//             collections.find(
//                 collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//             )
//     )    