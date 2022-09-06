//import actions
import{
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORIE
} from '../utils/actions';

import { reducer } from '../utils/reducers';

//create a sample of our global state will look like

const initialState = {
    products: [],
    categories: [{name: 'Food'}], 
    currentCategorie: '1',

};

test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});