import React from 'react';
import './MenuPage.css'
import FoodlistTitle from "../../modules/foodlistTitle/FoodlistTitle";
import FoodListInfo from "../../modules/FoodListInfo/FoodListInfo";
import FoodList from "../../modules/FoodList/FoodList";

const MenuPage = () => {
    return (
     <section style={{overflow: "hidden"}}>
         <div className="background">
             <FoodlistTitle />
             <div className="form_about_menu">
                <FoodListInfo />
                <FoodList />
             </div>
         </div>
     </section>
    );
};

export default MenuPage;