import { ADDPRODUCT, VIEWPRODUCT } from "./actions"

const initialState = {
    product: []
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEWPRODUCT:
        {
            return state;
        }
        case ADDPRODUCT:
        {
            return { ...state, product: [...state.product,{...action.payload}] };
        }
        default :
        {
            return state;
        }
    }
}

export default ProductReducer;