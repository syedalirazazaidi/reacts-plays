import React, { createContext, useState } from "react";

interface ProductProviderProps {
  children: React.ReactNode;
}
export const EditButtonContext = createContext({});
function EditButProvider({ children }: ProductProviderProps) {
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState();
  const toggleEditMode = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const setEditFormData = (data: any) => {
    console.log("first", data);
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
