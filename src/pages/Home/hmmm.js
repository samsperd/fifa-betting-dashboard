// Hmmmm 2


const ADD_ITEM = 'ADD_ITEM';

const REMOVE_ITEM = 'REMOVE_ITEM';



export const addItem = item => ({

  type: ADD_ITEM,

  payload: item

});



export const removeItem = item => ({

  type: REMOVE_ITEM,

  payload: item

});











import { ADD_ITEM, REMOVE_ITEM } from './actions';



const initialState = {

  selectedItems: [],

  totalPrice: 0

};



export default function reducer(state = initialState, action) {

  switch (action.type) {

    case ADD_ITEM:

      return {

        ...state,

        selectedItems: [...state.selectedItems, action.payload],

        totalPrice: state.totalPrice + action.payload.price

      };

    case REMOVE_ITEM:

      const newSelectedItems = state.selectedItems.filter(item => item.marketId !== action.payload.marketId);

      return {

        ...state,

        selectedItems: newSelectedItems,

        totalPrice: state.totalPrice - action.payload.price

      };

    default:

      return state;

  }

}









import { useSelector, useDispatch } from 'react-redux';

import { addItem, removeItem } from './actions';



const ItemList = () => {

  const dispatch = useDispatch();

  const selectedItems = useSelector(state => state.selectedItems);

  const totalPrice = useSelector(state => state.totalPrice);



  const handleChange = item => {

    if (selectedItems.includes(item)) {

      dispatch(removeItem(item));

    } else {

      dispatch(addItem(item));

    }

  };



  return (

    <div>

      {array.map(item => (

        <label key={item.marketId}>

          <input

            type="checkbox"

            checked={selectedItems.includes(item)}

            onChange={() => handleChange(item)}

          />

          {item.marketName} ({item.price})

        </label>

      ))}

      <hr />

      <div>

        Total: {totalPrice}

        <ul>

          {selected

items.map(item => (

            <li key={item.marketId}>{item.marketName}</li>

          ))}

        </ul>

      </div>

    </div>

  );

};



export default ItemList;







import { Provider } from 'react-redux';

import { createStore } from 'redux';

import rootReducer from './reducers';



const store = createStore(rootReducer);



const App = () => (

  <Provider store={store}>

    <ItemList />

  </Provider>

);









// Hmmm 1 

const [checkedItems, setCheckedItems] = useState([]);

const [totalPrice, setTotalPrice] = useState(0);



const handleCheckboxClick = (item) => {

  if (checkedItems.includes(item)) {

    // If the item is already checked, remove it from the list

    // and subtract its price from the total

    setCheckedItems(checkedItems.filter((i) => i !== item));

    setTotalPrice(totalPrice - item.price);

  } else {

    // If the item is not checked, add it to the list

    // and add its price to the total

    setCheckedItems([...checkedItems, item]);

    setTotalPrice(totalPrice + item.price);

  }

};













return (

  <div>

    {array.map((item) => (

      <div key={item.marketId}>

        <input

          type="checkbox"

          onChange={() => handleCheckboxClick(item)}

          checked={checkedItems.includes(item)}

        />

        {item.marketName} ({item.price})

      </div>

    ))}

    <div>Total: {totalPrice}</div>

  </div>

);













const ADD_ITEM = 'ADD_ITEM';

const REMOVE_ITEM = 'REMOVE_ITEM';



const initialState = {

  items: [],

};



const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_ITEM:

      return {

        ...state,

        items: [...state.items, action.item],

      };

    case REMOVE_ITEM:

      return {

        ...state,

        items: state.items.filter((i) => i !== action.item),

      };

    default:

      return state;

  }

};



const addItem = (item) => ({

  type: ADD_ITEM,

  item,

});



const removeItem = (item) => ({

  type: REMOVE_ITEM,

  item,

});











import { useDispatch, useSelector } from 'react-redux';



const YourComponent = () => {

  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);



  const handleCheckboxClick = (item) => {

    if (items.includes(item)) {

      dispatch(removeItem(item));

    } else {

      dispatch(addItem(item));

    }

  };



  return (

    <div>

      {array.map((item) => (

        <div key={item.marketId}>

          <input

            type="checkbox"

            onChange={() => handleCheckboxClick(item)}

            checked={items.includes(item)}

          />

          {item.marketName} ({item.price})

        </div>

      ))}

      <div>Total: {items.reduce((acc, item) => acc + item.price, 0)}</div>

    </div>

  );

};











import { Provider } from 'react-redux';

import { createStore } from 'redux';



const store = createStore(reducer);



const App = () => (

  <Provider store={store}>

    <YourComponent />

  </Provider>

);