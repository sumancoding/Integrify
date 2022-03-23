import React, { useEffect, useState } from "react";
import Display from "./Display";
import { TextField, Container, Typography } from "@mui/material/";

const Home = () => {
  const [list, setList] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((res) => res.json())
      .then((json) => setList(json));
  }, []);

  function search(rows) {
    return rows.filter((row) => row.city.indexOf(q) > -1);
  }
  return (
    <>
      <div>
        {" "}
        <Container>
          <Typography variant="h4" sx={{ p: 1, textDecoration: "underline" }}>
            Home Page
          </Typography>
          <TextField
            fullWidth
            label="Search by cities"
            id="fullWidth"
            sx={{ mt: 5 }}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </Container>
      </div>
      <Display list={search(list)} />
    </>
  );
};

export default Home;
