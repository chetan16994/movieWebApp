import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalQuantity: 0,
        // changed: false,
        items: [],
        totalAmount: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = 0;
            state.totalAmount=0;
            state.items = [];
        },

        addItemToCart(state, action) {
           
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            console.log(state)
    
            state.totalAmount=state.totalAmount+newItem.price ;

            if (!existingItem) {
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    timing:newItem.timing,
                    theater: newItem.theater,
                    capacity: newItem.capacity-newItem.amount,
                    amount: newItem.amount,  
                    price: newItem.price,
                });
                state.totalQuantity=state.totalQuantity+newItem.amount;
            } else { 
                
                existingItem.amount = existingItem.amount + 1;
                existingItem.capacity=existingItem.capacity-1;
                state.totalQuantity=state.totalQuantity+newItem.amount;
            }
        },

        removeItemFromCart(state, action) {

            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            console.log(existingItem)
            state.totalQuantity--;
            existingItem.capacity++;
            state.totalAmount=state.totalAmount-existingItem.price;
            if (existingItem.amount === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.amount--;
                // existingItem.amount = existingItem.amount - existingItem.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;