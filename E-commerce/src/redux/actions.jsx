export const ADDPRODUCT = "ADDPRODUCT";
export const VIEWPRODUCT = "VIEWPRODUCT";
export const UPDATEPRODUCT = "UPDATEPRODUCT";
export const DELETEPRODUCT = "DELETEPRODUCT";

export const addProduct = (newProduct) => ({
    type: ADDPRODUCT,
    payload: newProduct
})

export const updateProduct = (newProduct) => ({
    type: UPDATEPRODUCT,
    payload: newProduct
})

export const viewProduct = () => ({
    type: VIEWPRODUCT
})

export const deleteProduct = (id) => ({
    type: DELETEPRODUCT,
    payload:id
})