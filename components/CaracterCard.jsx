import React from 'react';

export const CharacterCard = ({
  id,
  name,
  status,
  species,
  image,
}) => {
  return (
    <section style={{ height: 260 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>

      <h4>
        {status} - {species}
      </h4>

      <div>
        <img
          src={image}
          alt={name}
          style={{ width: 150 }}
        />
      </div>
    </section>
  );
};