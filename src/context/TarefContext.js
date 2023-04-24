import { createContext, useState } from "react";

export const TarefContext = createContext()

export const TarefProvider = ({children}) => {
  const [tarefEdit, setTarefEdit] = useState({})
  const [actionTaref, setActionTaref] = useState("create")
  const [loading, setLoading] = useState(false)

  const getTarefId = (tarefId) => {
    setTarefEdit({tarefId});
  }

  const toggleTaref = (action) => {
    setActionTaref(action)
  }

  const toggleLoading = (loading) => {
    setLoading(loading)
  }

  return (
    <TarefContext.Provider value={{tarefEdit, getTarefId, toggleTaref, actionTaref, loading, toggleLoading}}>
      {children}
    </TarefContext.Provider>
  )

}