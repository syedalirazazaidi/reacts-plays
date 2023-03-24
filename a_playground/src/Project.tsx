import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
function Project() {
  const [nameobj, setnameObj] = useState({
    name: "",
    email: "",
  });
  const fakearray = ["ali", "raza", "zaidi"];
  const [arr, newmyarr] = useState(fakearray);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setnameObj((prev) => {
  //       return {
  //         ...prev,
  //         name: faker.name.fullName(),
  //         email: faker.internet.email(),
  //       };
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      {/* <p>{nameobj.email}</p>
      <p>{nameobj.name}</p> */}
      {arr.map((ar) => ar.toLocaleLowerCase())}
    </div>
  );
}

export default Project;
