const initialState = {
    allCountries: [],
    renderizarCountryes: [],
    homeLoading: true,
    pagination: {
      currentPage: 1,
    },
    countryDetails: [],
    loadingDetails: true,
    loadingActivities: true,
    activities: [],
  };
  
  export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
      case 'CREATE_ACTIVITY':
        return {
          ...state,
          activities: [payload, ...state.activities],
        };
      case 'SET_CURRENT_PAGE':
        return {
          ...state,
          pagination: {
            ...state.pagination,
            currentPage: payload,
          },
        };
      case 'GET_ALL_COUNTRIES':
        return {
          ...state,
          allCountries: payload,
          renderizarCountryes: payload,
          homeLoading: false,
          loadingDetails: true,
          loadingActivities: true,
        };
      case 'REGION':
        return {
          ...state,
          renderizarCountryes: state.allCountries.filter((country) => country.continent === payload),
          pagination: {
            currentPage: 1,
          },
        };
      case 'GET_ACTIVITIES':
        return {
          ...state,
          activities: payload,
          loadingActivities: false,
        };
      case 'SEARCH_BY_NAME':
        if (payload.length === 0) {
          return { ...state, pagination: { currentPage: 1 } };
        } else {
          return {
            ...state,
            renderizarCountryes: payload,
            pagination: { currentPage: 1 },
          };
        };
      case 'SHOW_DETAILS':
        return {
          ...state,
          countryDetails: payload,
          loadingDetails: false,
          homeLoading: true,
          loadingActivities: true,
        };
      case 'ACTIVITY':
        let activity = state.activities.find((activity) => activity.name === payload);
        return {
          ...state,
          renderizarCountryes: state.allCountries.filter((country) => activity.Countries.includes(country.name)),
          pagination: {
            currentPage: 1,
          },
        };
      case 'ORDER':
        return {
          ...state,
          renderizarCountryes: [...state.renderizarCountryes].sort((a, b) => {
            if (payload === 'AZ') return a.name.localeCompare(b.name);
            if (payload === 'ZA') return b.name.localeCompare(a.name);
            if (payload === '+') return b.population - a.population;
            return payload === '-' && a.population - b.population;
          },
          ),
        };
      default:
        return state;
    }
  }
  