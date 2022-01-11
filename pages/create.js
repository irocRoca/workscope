import { useReducer } from "react";
import classes from "../styles/Create.module.css";

const initialState = {
  title: "",
  price: "",
  description: "",
  file: "",
};

const reducer = (state, action) => {
  return { ...state, ...action };
};

function Create() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", state.title);
    data.append("price", state.price);
    data.append("description", state.description);
    data.append("file", state.file);

    const res = await fetch("/api/create", {
      method: "POST",
      body: data,
    });
    console.log(res);
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        value={state.title}
      />
      <input
        name="price"
        onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
      />
      <input
        type="file"
        name="file"
        onChange={(e) => dispatch({ [e.target.name]: e.target.files[0] })}
      />
      <textarea
        name="description"
        rows="6"
        onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Create;
