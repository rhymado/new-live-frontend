import {
  getAllProductsString,
  getSingleProductString,
  pending,
  rejected,
  fulfilled,
} from "../actionString";

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
    case getAllProductsString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getAllProductsString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case getAllProductsString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        productsData: action.payload.data,
      };
    case getSingleProductString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getSingleProductString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case getSingleProductString + fulfilled:
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
