import originalPizza from "../img/pizza/originalPizza.jpg";
import vegetablePizza from "../img/pizza/vegetablePizza.jpg";
import combinationPizza from "../img/pizza/combinationPizza.jpg";
import pepperoniPizza from "../img/pizza/pepperoniPizza.jpg";
import bulgogiPizza from "../img/pizza/bulgogiPizza.jpg";

export const pizza_list = {
  "Original Pizza": {
    p_idx: 1,
    p_name: "Original Pizza",
    p_price: { p_L_price: 26000, p_M_price: 21000 },
    p_img: originalPizza,
  },
  "Vegetable Pizza": {
    p_idx: 2,
    p_name: "Vegetable Pizza",
    p_price: { p_L_price: 28000, p_M_price: 23000 },
    p_img: vegetablePizza,
  },
  "Combination Pizza": {
    p_idx: 3,
    p_name: "Combination Pizza",
    p_price: { p_L_price: 30000, p_M_price: 25000 },
    p_img: combinationPizza,
  },
  "Pepperoni Pizza": {
    p_idx: 4,
    p_name: "Pepperoni Pizza",
    p_price: { p_L_price: 29000, p_M_price: 24000 },
    p_img: pepperoniPizza,
  },
  "Bulgogi Pizza": {
    p_idx: 5,
    p_name: "Bulgogi Pizza",
    p_price: { p_L_price: 31000, p_M_price: 26000 },
    p_img: bulgogiPizza,
  },
};
