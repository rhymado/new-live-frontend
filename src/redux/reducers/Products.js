const initialState = {
  productsData: {},
  err: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  singleProduct: {},
};

const productsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_ALL_PRODUCTS_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case "GET_ALL_PRODUCTS_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    case "GET_SINGLE_PRODUCT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_SINGLE_PRODUCT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case "GET_SINGLE_PRODUCT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        singleProduct: action.payload.data,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default productsReducer;

// GET 1
// PENDING
// iP true iR false iF false
// FULFILLED
// iP false iR false iF true

// Transisi => Normalisasi
// iR false iF false

// GET 2
// PENDING
// iP true iR false iF true
// REJECTED
// iP false iR true iF true

// POST PRODUCT
// prevState.productsData.push(response)