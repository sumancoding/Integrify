import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const Details = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries").then((res) => {
      res.json().then((data) => {
        const newDetail = data.find((item) => item.id === id);
        setDetail(newDetail);
      });
    });
  }, [id]);
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <Card>
          <CardContent sx={{ textAlign: "center", color: "navy" }}>
            <Typography
              variant="h5"
              style={{ textDecoration: "underline", margin: 5, color: "black" }}
            >
              Details About the Product
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Id: {detail.id}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Name: {detail.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Brewery Type: {detail.brewery_type}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Street: {detail.street}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Address 2: {detail.address_2}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Address 3: {detail.address_3}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              City: {detail.city}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              State: {detail.state}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Country Province: {detail.country_province}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Postal Code: {detail.postal_code}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Country: {detail.country}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Longitude: {detail.longitude}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Latitude: {detail.latitude}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Phone: {detail.phone}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Website URL: {detail.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Update at: {detail.updated_at}
            </Typography>
            <Typography variant="subtitle1" sx={{ p: 1 }}>
              Create at: {detail.created_at}
            </Typography>

            <Box textAlign="center" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Go Back to Home Page
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Details;
