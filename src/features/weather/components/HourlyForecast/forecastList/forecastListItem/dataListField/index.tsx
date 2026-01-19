import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const DataListField: React.FC<Props> = ({ children }) => <div>{children}</div>;

export default DataListField;
