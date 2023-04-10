import React, { useContext, useEffect } from "react";
import axios from "axios";
import { DentistContext } from "../../../context/DentistContext";
import Dentists from "./Dentists";


const DentistsContainer = () => {
  const {state, dispatch} = useContext(DentistContext)

  useEffect(() => {
    const getDentists = axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    getDentists
      .then((res) => dispatch({ type: "GET_DENTISTS", payload: res.data}))
      .catch((err) => console.log(err));
  }, [ ]);



  return (
  <div>
    <h2>Acá van los dentistas</h2>
  </div>
  /*<Dentists dentists={state.dentists} dispatch={dispatch} />;*/
  )
};

export default DentistsContainer;
