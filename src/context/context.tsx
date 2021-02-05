import React from 'react';
import ChangeContext from '../models/context.model'

export const Context = React.createContext<ChangeContext>({dataCity : 'Cherkassy', dataPosition : undefined, updateData: value => console.warn('default'), loading : false});