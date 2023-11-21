import React, { useEffect, useState } from "react";
import style from "./countryes.module.css";
import Country from "../Country/Country";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/action";
import { setCurrentPage } from "../../redux/action";

const Countries = () => {
  const dispatch = useDispatch();
  const otherCountries = useSelector((state) => state.renderizarCountryes);
  const isLoading = useSelector((state) => state.loadingHome);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const countriesPerPage = 6;
  const currentPage = useSelector((state) => state.pagination.currentPage);

  const totalOtherCountries = otherCountries.length;
  const totalPages = Math.ceil(totalOtherCountries / countriesPerPage);

  const startIdx = (currentPage - 1) * countriesPerPage;
  const endIdx = startIdx + countriesPerPage;
  const displayedOtherCountries = otherCountries.slice(startIdx, endIdx);

  const handlePageChange = (event, value) => {
    dispatch(setCurrentPage(value)); // Actualiza la página actual en el estado de Redux
  };

  useEffect(() => {
    const loadOtherCountries = async () => {
      const response = await dispatch(getAllCountries());
      // Simulación de carga (puedes ajustarla según tu lógica real)
      const loadingInterval = setInterval(() => {
        if (loadingProgress < 100) {
          setLoadingProgress(prevProgress => prevProgress + 10); // Incrementa el progreso en 10%
        } else {
          // Cuando la carga alcanza el 100%, detén la simulación
          clearInterval(loadingInterval);
        }
      }, 500);
    };

    loadOtherCountries();
  }, [dispatch]);

  return (
    <div className={style.country3}>
      {isLoading ? (
        <div className={style.loadingBar}>
          <div className={style.progressBar} style={{ width: `${loadingProgress}%` }}>
            {loadingProgress}%
          </div>
        </div>
      ) : (
        <div className={style.country}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            size="large"
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#50a050",
                fontSize: "20px",
              },
              "& .MuiPaginationItem-root": {
                fontSize: "15px",
              },
              "& .paginationButton": {
                backgroundColor: "#50a100",
              },
            }}
          />
          <div className={style.Country2}>
            {displayedOtherCountries.map((countries) => (
              <Country
                id={countries.id}
                key={countries.id}
                name={countries.name}
                image={countries.image}
                continent={countries.continent}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Countries;
