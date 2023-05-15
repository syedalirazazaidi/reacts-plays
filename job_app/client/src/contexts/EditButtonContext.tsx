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
    setEditData(data);
  };
  // console.log(editData._id, "DATAT");
  return (
    <EditButtonContext.Provider
      value={{
        editMode,
        toggleEditMode,
        editData,
        setEditFormData,
        setEditData,
      }}
    >
      {children}
    </EditButtonContext.Provider>
  );
}

export default EditButProvider;
