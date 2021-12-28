import {  Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CardSkeleton = ({ loading = true }) => {
  return (
    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
      <Skeleton
        sx={{ height: 170, borderRadius: 2 }}
        animation="wave"
        variant="rectangular"
      />

      <Box sx={{ marginTop: 1 }}>
        <Skeleton animation="wave" height={20} width="100%" />
        <Skeleton animation="wave" height={20} width="80%" />
      </Box>

      <Skeleton
        animation="wave"
        height={35}
        width="20%"
        style={{ marginTop: 12 }}
      />

      <Skeleton
        animation="wave"
        height={10}
        width="100%"
        style={{ marginTop: 6 }}
      />
      <Skeleton
        animation="wave"
        height={10}
        width="100%"
        style={{ marginTop: 6 }}
      />
      <Box
        sx={{
          display: "flex",
          marginTop: 2,

          justifyContent: "space-between",
          borderBottom: "0.5px solid rgba(0,0,0,0.2)",
          paddingBottom: 2,
        }}
      >
        <Skeleton
          animation="wave"
          style={{ width: 100 }}
          height={25}
          width="50%"
        />
        <Skeleton animation="wave" height={25} width="20%" />
      </Box>
    </Grid>
  );
};

export default CardSkeleton;
