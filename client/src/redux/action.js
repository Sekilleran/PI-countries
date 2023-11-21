import axios from 'axios';

// Acción para buscar países por nombre
export const searchName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/country?name=${name}`);
      const countries = response.data;
      dispatch({
        type: 'SEARCH_BY_NAME',
        payload: countries,
      });
    } catch (error) {
      console.error(error);
      alert('Error al buscar países por nombre.');
    }
  };
};

// Acción para establecer la página actual
export const setCurrentPage = (page) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: page,
  };
};

// Acción para obtener la lista de actividades
export const getActivities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/activity');
      const activities = response.data;
      dispatch({
        type: 'GET_ACTIVITIES',
        payload: activities,
      });
    } catch (error) {
      console.error(error);
      alert('Error al obtener la lista de actividades.');
    }
  };
};

export const countriesOrder = (order) => {
    return {
      type: 'ORDER',
      payload: order,
    };
  };
// Acción para ordenar países por región
export const orderRegion = (region) => {
  return {
    type: 'REGION',
    payload: region,
  };
};

// Acción para filtrar países por actividad
export const orderActivity = (activity) => {
  return {
    type: 'ACTIVITY',
    payload: activity,
  };
};

// Acción para crear una nueva actividad
export const createActivity = (activity) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/activity', activity);
      const newActivity = response.data;
      alert('Nueva actividad creada exitosamente.');
      dispatch({
        type: 'CREATE_ACTIVITY',
        payload: newActivity,
      });
    } catch (error) {
      console.error(error);
      alert('Error al crear una nueva actividad.');
    }
  };
};

// Acción para obtener detalles de un país
export const countryDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/country/${id}`);
      const data = response.data;
      dispatch({
        type: 'SHOW_DETAILS',
        payload: data,
      });
    } catch (error) {
      console.error(error);
      alert('Error al obtener los detalles del país.');
    }
  };
};

// Acción para obtener todos los países
export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/country');
      const countries = response.data;
      dispatch({
        type: 'GET_ALL_COUNTRIES',
        payload: countries,
      });
    } catch (error) {
      console.error(error);
      alert('Error al cargar los países.');
    }
  };
};
