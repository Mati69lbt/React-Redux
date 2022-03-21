import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createActions,
  deleteActions,
  noActions,
  readActions,
  updateActions,
} from "../actions/crudActions";

import { helpHttp } from "../helpers/helpHttp";
import "../index.css";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;
  //const [db, setDb] = useState(null);
  //const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/2daDivision";

  useEffect(() => {
    setLoading(true);

    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          // setDb(res);
          dispatch(readActions(res));
          setError(null);
        } else {
          //setDb(null);
          dispatch(noActions());
          setError(res);
        }

        //console.log(res);
        setLoading(false);
      });
  }, [url, dispatch]);

  // const createData = (data) => {
  //   data.id = Date.now(); // nos provee un ID
  //   api.post(url)
  //   setDb([...db, data]);

  // }; // crea un nuevo registro en la base de datos, recibe un objeto con la data que va a crear esos datos

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        // setDb([...db, res]);
        dispatch(createActions(res));
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData);
        dispatch(updateActions(res));
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Seguro que quiere eliminar el registro con el id ${id}?`
    ); // esto aca devulve un booleano: true or false
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          //let newData = db.filter((el) => el.id !== id);
          //setDb(newData);
          dispatch(deleteActions(id));
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  }; // elimina el registro, solo recibe el ID.

  return (
    <div>
      <h2>CRUD Api - Entrenadores de 1ra B Metropolitana, AFA</h2>

      <article className="grid-1-2">
        <CrudForm
          createData={createData} // se ejecutara internamente cuando crearemos el formulario
          updateData={updateData} // se ejecutara internamente cuando actualizaremos el formulario
          dataToEdit={dataToEdit} // diferencia entre create y update
          setDataToEdit={setDataToEdit} //actualiza la data to edit
        />
        <>
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            />
          )}
          {db && (
            <CrudTable
              data={db}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          )}
        </>
      </article>
    </div>
  );
};

export default CrudApi;
