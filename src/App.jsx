import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [type, setType] = useState('');
  const [option, setOption] = useState('');
  const [instructions, setInstructions] = useState('');
  const [formData, setFormData] = useState(false);

  const toppingsHandler = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((topping) => topping != value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (name && size && toppings.length > 0 && type && option) {
      setFormData(true);
    }
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <h2>Pizza Order Form</h2>
        <label htmlFor="customerInput">Customer Name:</label>
        <input
          type="text"
          id="customerInput"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="pizzaSelect">Choose Pizza Size:</label>
        <select
          name=""
          id="pizzaSelect"
          onChange={(event) => setSize(event.target.value)}
          required
        >
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Choose Toppings:</label>
        <br />
        <input
          type="checkbox"
          value="Pepperoni"
          onChange={toppingsHandler}
        />{' '}
        Pepperoni <br />
        <input
          type="checkbox"
          value="Mushrooms"
          onChange={toppingsHandler}
        />{' '}
        Mushrooms <br />
        <input type="checkbox" value="Olives" onChange={toppingsHandler} />{' '}
        Olives <br />
        <br />
        <label htmlFor="">Choose Crust Type:</label>
        <br />
        <input
          type="radio"
          value="Thin"
          name="type"
          onChange={(event) => setType(event.target.value)}
        />{' '}
        Thin
        <br />
        <input
          type="radio"
          value="Thick"
          name="type"
          onChange={(event) => setType(event.target.value)}
        />{' '}
        Thick
        <br />
        <br />
        <label htmlFor="">Choose Delivery Option:</label>
        <br />
        <input
          type="radio"
          value="Pickup"
          name="option"
          onChange={(event) => setOption(event.target.value)}
        />{' '}
        Pickup <br />
        <input
          type="radio"
          value="Delivery"
          name="option"
          onChange={(event) => setOption(event.target.value)}
        />{' '}
        Delivery <br />
        <br />
        <label htmlFor="instructionsInput">Special Instructions(if any):</label>
        <br />
        <textarea
          name=""
          id="instructionsInput"
          cols="40"
          rows="5"
          onChange={(event) => setInstructions(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Place Order</button>
      </form>
      {formData && (
        <div>
          <p>Customer Name: {name}</p>
          <p>Pizza Size: {size}</p>
          <p>Toppings : {toppings.join(', ')}</p>
          <p>Crust Type: {type}</p>
          <p>Delivery Option: {option}</p>
          <p>
            Special Instructions: {instructions ? `${instructions}` : 'None'}{' '}
          </p>
        </div>
      )}
    </>
  );
}
