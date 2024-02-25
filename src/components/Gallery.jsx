import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const {photos, setPhotos} = useContext(GalleryContext);

  const addFavorite = (id) => {
    const newPhotos = photos.map((photo) =>{
      // EVALUO EL ID QUE LLEGA PARA VER SI COINCIDE CON ALGUNO DE LOS OBJETOS (PHOTOS)
      // SI COINCIDE, RETORNO TODO EL OBJETO Y LA INVERSA DE "ISFAVORITE" PARA AGREGAR A FAVORITOS 👇
      if (photo.id == id) {
        return {
          ...photo,
          liked: !photo.liked,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (

    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div
          onClick={() => addFavorite(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.tiny})` }}
          key={i}
        >
          <IconHeart filled={photo.liked} />

          {/* el atributo alt de la imagen no se puede agregar como estilo en un div, como sigue siendo un texto es posible agregarlo en una etiqueta de texto */}
          <p style={{ fontWeight: "600", textTransform: "uppercase"}}> {photo.alt} </p>
        </div>
      ))}
    </div>
  )
  
};
export default Gallery;
