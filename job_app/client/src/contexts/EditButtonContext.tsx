import React, { createContext, useState } from "react";
import { ISHow } from "../common/types/type";
interface ProductProviderProps {
  children: React.ReactNode;
}
export const EditButtonContext = createContext({});
function EditButProvider({ children }: ProductProviderProps) {
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const toggleEditMode = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const setEditFormData = (data: any) => {
    console.log(data, "??????EDIT");
    setEditData(data);
  };
  return (
    <EditButtonContext.Provider
      value={{ editMode, toggleEditMode, editData, setEditFormData }}
    >
      {children}
    </EditButtonContext.Provider>
  );
}

export default EditButProvider;
