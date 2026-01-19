import React from 'react';

interface Props {
  name: string;
}

const CityField: React.FC<Props> = ({ name }) => <div>{name}</div>;

export default CityField;
