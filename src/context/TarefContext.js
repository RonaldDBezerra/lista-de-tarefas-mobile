import { createContext, useState } from 'react';

export const TarefContext = createContext();

export const TarefProvider = ({ children }) => {
  const [tarefEdit, setTarefEdit] = useState({});
  const [actionTaref, setActionTaref] = useState('create');
  const [loading, setLoading] = useState('false');
  const [name, setName] = useState('Usuário');

  const getTarefId = tarefId => {
    setTarefEdit({ tarefId });
  };

  const toggleTaref = action => {
    setActionTaref(action);
  };

  const toggleLoading = loading => {
    setLoading(loading);
  };

  const value = {
    tarefEdit,
    getTarefId,
    toggleTaref,
    actionTaref,
    loading,
    toggleLoading,
    name,
    setName,
  };

  return (
    <TarefContext.Provider value={value}>{children}</TarefContext.Provider>
  );
};
