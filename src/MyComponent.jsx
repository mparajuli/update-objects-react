import { useState } from "react";
import "./MyComponent.css"; // Import the CSS file

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleAdd = () => {
    const newCar = { year: year, make: make, model: model };
    setCars((prevCars) => [...prevCars, newCar]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  };

  const handleRemove = (index) => {
    setCars((prevCars) => prevCars.filter((_, idx) => idx !== index));
  };

  return (
    <div className="container">
      <div className="card description-card">
        <h1>Updating Array of Objects in React</h1>
        <p>
          This program demonstrates how to update an array of objects using
          React&apos; <code>useState</code> hook, allowing users to dynamically
          add and remove car objects to the list. It uses the <code>map</code>{" "}
          function to dynamically render the elements of an array object as list
          items and also utilizes the <code>filter</code> function for the
          removal of specific items from the array based on their respective
          indices. Below is the demonstration of the program:
        </p>
      </div>
      <div className="demo-card">
        <h1>List of Car Objects</h1>
        <ul>
          {cars.map((car, index) => (
            <div key={index} className="car-item">
              <li>
                {car.year} {car.make} {car.model}
                <button
                  className="button remove-button"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            </div>
          ))}
        </ul>
        <input
          type="number"
          value={year}
          onChange={handleYearChange}
          placeholder="Enter year"
        />
        <br />
        <input
          type="text"
          value={make}
          placeholder="Enter car make"
          onChange={handleMakeChange}
        />
        <br />
        <input
          type="text"
          value={model}
          placeholder="Enter car model"
          onChange={handleModelChange}
        />
        <br />
        <button className="button add-button" onClick={handleAdd}>
          Add
        </button>
        <br />
      </div>
    </div>
  );
}

export default MyComponent;
