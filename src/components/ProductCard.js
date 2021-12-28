import * as React from "react";
import StarsRating from "stars-rating";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import styled from "styled-components";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { Grid, Skeleton } from "@mui/material";
import CardSkeleton from "../ui-components/Skeleton/CardSkeleton";

const ProductTitle = styled.h4`
  height: 72px;
  margin: 10px 0;
  overflow: auto;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;

  /* or 24px */
  letter-spacing: 0.0275em;

  /* Gray / 100 */
  color: #19191d;
`;

const ProductPrice = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  line-height: 150%;
  margin: 10px 0;

  /* identical to box height, or 36px */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Dark Color */
  color: rgba(0, 0, 0, 0.87);
`;

const ProductDescription = styled.p`
  height: 50px;

  overflow: auto;
  /* Inter / Body Small */
  font-family: "Inter", sans-serif;
  font-size: 14px;

  /* or 20px */
  align-items: center;
  letter-spacing: 0.018em;

  /* Gray / 50 */
  color: #787885;
  margin: 0;
`;

const StarsContainer = styled.div`
  display: flex;
  width: 130px;
`;

const StyledRate = styled.p`
  /* Roboto / Subtitle 2 */
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;

  /* identical to box height, or 157% */
  letter-spacing: 0.1px;
  margin: 0;
  margin-left: 4px;
  /* Gray · 80% */
  color: #5e6366;
`;

const WatchButton = styled.button`
  cursor: pointer;
  /* White 100% */
  background: #ffffff;
  border: 1px solid #9dc2ff;
  box-sizing: border-box;
  border-radius: 4px;
  /* Inter / Body Small (Medium) */
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;

  /* or 20px */
  display: flex;
  letter-spacing: 0.018em;

  /* Blue / 70 */
  color: #2264d1;
`;

const HeartIcon = styled(Heart)`
  margin: 3px 5px;
`;

const ProductCard = ({ product, productsStore }) => {
  const [heartColor, setHeartColor] = React.useState("#2979FF");
  React.useEffect(() => {
    const title = product.title.toLowerCase();
    if (productsStore.favorites.includes(title)) {
      setHeartColor("red");
    }
  }, [productsStore.favorites, product.title]);

  const onHeartButton = () => {
    setHeartColor(heartColor === "red" ? "#2979FF" : "red");
    productsStore.addFavorite(product.title.toLowerCase());
  };

  return (
    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        height="194"
        image={product?.image}
        alt="Paella dish"
      />

      <ProductTitle>{product.title}</ProductTitle>
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
      </CardActions>
    </Grid>
  );
};

export default ProductCard;
