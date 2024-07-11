"use client";
import React, { useState } from 'react';

import CrearCita from '../componente/Form/index.jsx'; // Importamos CrearCita
import Cita from '../componente/Cita/index.jsx'; // Importamos Cita

const App = () => {
  const [tarjetas, setTarjetas] = useState([]);

  const agregarTarjeta = (contenido) => {
    const nuevaTarjeta = {
      id: new Date().getTime(),
      contenido: contenido,
    };
    setTarjetas([...tarjetas, nuevaTarjeta]);
  };

  const eliminarTarjeta = (id) => {
    const nuevasTarjetas = tarjetas.filter((tarjeta) => tarjeta.id !== id);
    setTarjetas(nuevasTarjetas);
  };

  return (
    <>
      <CrearCita onAgregarTarjeta={agregarTarjeta} />
      {tarjetas.map((tarjeta) => (
        <div key={tarjeta.id} className="one-half column asd derecha">
          <Cita
            onContenido={tarjeta.contenido}
            onEliminarCita={() => eliminarTarjeta(tarjeta.id)}
          />
        </div>
      ))}
    </>
  );
};

export default App;
