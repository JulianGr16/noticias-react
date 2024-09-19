import React, { useState } from 'react';
import './Formulario.css';

const Formulario = ({ onSelectCategory }) => {
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value);
    onSelectCategory(e.target.value);
  };

  return (
    <div className="formulario">
      <label htmlFor="categoria">Buscar por categoría: </label>
      <select id="categoria" value={category} onChange={handleChange}>
        <option value="">Seleccione una categoría</option>
        <option value="business">Negocios</option>
        <option value="entertainment">Entretenimiento</option>
        <option value="health">Salud</option>
        <option value="science">Ciencia</option>
        <option value="sports">Deportes</option>
        <option value="technology">Tecnología</option>
      </select>
    </div>
  );
};

export default Formulario;