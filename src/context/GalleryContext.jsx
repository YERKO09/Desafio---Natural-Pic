import { createContext, useEffect, useState } from "react";

export const GalleryContext = createContext();

const API_FOTOS = "/photos.json";

const GalleryProvider = ({ children }) => {
  // ESTADO PARA LOS OBJETOS JSON 👇
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch(API_FOTOS);

    // CAMBIO DE NOMBRE, PHOTOS A "PHOTOSDB" 👇
    const { photos: photosDB } = await response.json();

    // AGREGADO DE OBJETOS, CON "MAP", AL ESTADO "PHOTOS" Y UNA NUEVA PROP => "ISFAVORITE" 👇
    setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false })));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <GalleryContext.Provider value={{ photos, setPhotos }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
