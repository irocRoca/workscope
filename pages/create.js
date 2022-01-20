import { useReducer, useState } from "react";
import classes from "../styles/Create.module.css";
import { FaDownload } from "react-icons/fa";

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
  const [preview, setPreview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", state.title);
    data.append("price", state.price);
    data.append("description", state.description);
    data.append("file", state.file);

    const res = await fetch("/api/post", {
      method: "POST",
      body: data,
    });
    const response = await res.json();
    console.log(response);
    // TODO: Redirect to post created.
  };

  const previewImage = (file) => {
    if (!!file.type.match("image.*")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    }
  };

  return (
    <div className={classes.container}>
      <h1>Create Post</h1>
      <form method="POST" onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.field_container}>
          <label htmlFor="title" className={classes.label}>
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className={classes.input}
            onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
            value={state.title}
          />
        </div>
        <div className={classes.field_container}>
          <label htmlFor="price" className={classes.label}>
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            className={classes.input}
            onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
          />
        </div>
        <div className={classes.field_container}>
          <input
            id="file"
            type="file"
            className={classes.input}
            name="file"
            accept="image/*"
            onChange={(e) => {
              dispatch({ [e.target.name]: e.target.files[0] });
              previewImage(e.target.files[0]);
            }}
          />
          <label htmlFor="file" className={classes.label}>
            {preview && (
              <img
                src={preview}
                style={{ height: "150px" }}
                alt="image preview"
              />
            )}
            {!preview && (
              <>
                <FaDownload className={classes.icon} />
                <div className={classes.helper}>Select a file</div>
                <span>Upload</span>
              </>
            )}
          </label>
        </div>

        <div className={classes.field_container}>
          <label htmlFor="description" className={classes.label}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="6"
            className={classes.textarea}
            onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
          ></textarea>
        </div>
        <button
          type="submit"
          className={classes.btn}
          disabled={state.title || state.price == ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
