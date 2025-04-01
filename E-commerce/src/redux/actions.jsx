export const ADDPRODUCT = "ADDPRODUCT";
export const VIEWPRODUCT = "VIEWPRODUCT";

export const addProduct = (newProduct) => ({
    type: ADDPRODUCT,
    payload: newProduct
})

export const viewProduct = () => ({
    type: VIEWPRODUCT
})