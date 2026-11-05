import { useEffect, useState } from "react";
import MoreButton from "../components/MoreButton";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  const search = async () => {
    try {
      const url = `https://api.thecatapi.com/v1/images/search?limit=20&api_key=${import.meta.env.VITE_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <MoreButton onSearch={search} />

      <div className="gallery">
        {images.map((image) => (
          <figure key={image.id}>
            <img
              src={image.url}
              alt="Cat"
              onClick={() => {
                setSelectedImg(image);
              }}
            />
          </figure>
        ))}
      </div>

      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg.url} alt="full-image" />
        </div>
      )}
    </>
  );
};

export default Gallery;
