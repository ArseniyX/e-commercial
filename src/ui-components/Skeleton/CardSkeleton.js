import { Grid, Skeleton } from "@mui/material";
import React from "react";
import ProductCard from "../../components/ProductCard";

const CardSkeleton = () => {
  return (
    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
      {/* <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" /> */}
      {/* <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height="194"
          image={product?.image}
          alt="Paella dish"
        /> */}
      {/* <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice variant="h5">${product.price}</ProductPrice>
        <ProductDescription variant="body2" color="text.secondary">
          {product?.description}
        </ProductDescription>
        <CardActions sx={{ borderBottom: "0.5px solid rgba(0,0,0,0.2)" }}>
          <StarsContainer>
            <StarsRating
              count={5}
              // onChange={ratingChanged}
              size={20}
              color2={"#FB8200"}
              value={product?.rating.rate}
            />
            <StyledRate>{product?.rating.rate}</StyledRate>
          </StarsContainer>
          <WatchButton onClick={onHeartButton}>
            <HeartIcon fill={heartColor} />
            Watch
          </WatchButton>
        </CardActions> */}
    </Grid>
  );
};

export default CardSkeleton;
