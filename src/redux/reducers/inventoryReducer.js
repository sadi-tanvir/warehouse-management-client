import {
  INVENTORY_ADD_ID,
  INVENTORY_ADD_NAME,
  INVENTORY_ADD_IMG,
  INVENTORY_ADD_DESCRIPTION,
  INVENTORY_ADD_QTY,
  INVENTORY_ADD_PRICE,
  INVENTORY_ADD_SUPPLIER,
} from "../actions/types";

const initialState = {
  _id: "",
  name: "",
  img: "",
  description: "",
  qty: "",
  price: "",
  supplier: "",
};

const inventoryReducer = (state = initialState, action) => {
  if (action.type === INVENTORY_ADD_ID) {
    return {
      ...state,
      _id: action.payload,
    };
  } else if (action.type === INVENTORY_ADD_NAME) {
    return {
      ...state,
      name: action.payload,
    };
  } else if (action.type === INVENTORY_ADD_IMG) {
    return {
      ...state,
      img: action.payload,
    };
  } else if (action.type === INVENTORY_ADD_DESCRIPTION) {
    return {
      ...state,
      description: action.payload,
    };
  } else if (action.type === INVENTORY_ADD_QTY) {
    return {
      ...state,
      qty: action.payload,
    };
  } else if (action.type === INVENTORY_ADD_PRICE) {
    return {
      ...state,
      price: action.payload,
    };
  } else if (action.type === INVENTORY_ADD_SUPPLIER) {
    return {
      ...state,
      supplier: action.payload,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default inventoryReducer;
