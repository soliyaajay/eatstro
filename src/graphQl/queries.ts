import gql from "graphql-tag";

export const kitchenItems = gql`{
    items{
      id
      name
      desc
      price
      cuisineType
  dietaryChoice
  favoriteCount
      kitchen
      {
        id
        name
        photo
      }
    }
  }`