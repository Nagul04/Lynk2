import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    await axios.post("http://localhost:5001/upload-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Refresh the image list after upload
    getImage();
  };

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getImage = async () => {
    const result = await axios.get("http://localhost:5001/get-image");
    setAllImage(result.data.data);
  };

  return (
    <div>
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Submit</button>
      </form>

      {allImage.length === 0 ? (
        <p>No images uploaded yet.</p>
      ) : (
        allImage.map((data, index) => (
          <img
            key={index}
            src={`http://localhost:5001/images/${data.image}`}
            alt={`Uploaded ${index}`}
            height={100}
            width={100}
          />
        ))
      )}
    </div>
  );
}

export default App;
