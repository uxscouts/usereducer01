import React, { useReducer } from 'react';

// 1. Initial State
const initialState = {
  pricePerItem: 50,
  quantity: 1,
  total: 50
};

// 2. Reducer Function
function cartReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_QUANTITY':
      const newQuantity = action.payload;
      return {
        ...state,
        quantity: newQuantity,
        total: state.pricePerItem * newQuantity // Recalculate Total
      };
    default:
      return state;
  }
}

function ProductPrice() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value) || 0;
    // 3. Dispatch Action
    dispatch({ type: 'UPDATE_QUANTITY', payload: qty });
  };

  return (
    <form style={{ padding: '20px' }}>
      <h3>Product Setup</h3>
      <p>Price: ${state.pricePerItem}</p>
      
      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={state.quantity}
          onChange={handleQuantityChange}
          style={{ marginLeft: '10px', width: '50px' }}
        />
      </label>
      
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        Total Price: ${state.total}
      </div>
    </form>
  );
}

export default ProductPrice;
