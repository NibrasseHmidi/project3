import React from 'react'
// import { Card, CardWrapper, DetailsSection, detailsWrapper, Img, ImgDisplay, ImgItems, ImgProduct, ItemImg, ProductContent, ProductImg, RatingProduct, SelectImg, TitleProduct, Visit } from './DetailsStyles'


import { IconContext } from "react-icons/lib";

import {
    Card,
    CardWrapper,
  Img,
  ImgDisplay,
  ImgItems,
  ImgProduct,
  ItemImg,
  PricingSection,
  PricingWrapper,
  ProductContent,
  ProductImg,
  RatingProduct,
  SelectImg,
  TitleProduct,
  Visit,
 
} from './DetailsStyles';


const Details = () => {
    return (

        <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
     <PricingWrapper>
      
          
          
            <ImgDisplay>
            <ImgProduct>
            <Img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" />
             <Img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" />
           
               <Img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" />
             <Img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" />
            </ImgProduct>
            </ImgDisplay>
<SelectImg>

<ItemImg>
<ImgItems src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" />
</ItemImg>

<ItemImg>
<ImgItems src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" />
</ItemImg>

<ItemImg>
<ImgItems src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" />
</ItemImg>


<ItemImg>
<ImgItems src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" />
</ItemImg>
</SelectImg>

            

<ProductContent>

<TitleProduct> shoes nike</TitleProduct>
<Visit>visit nike store </Visit>

<RatingProduct>
<i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star"></i>
        <i class = "fas fa-star-half-alt"></i>

</RatingProduct>
</ProductContent>

            
      
         
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
//         <DetailsSection >
//          <detailsWrapper>
//             <CardWrapper>
//             <Card>
//             <ProductImg>
//             <ImgDisplay>
//             <ImgProduct>
//             <Img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" />
//              <Img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" />
           
//                <Img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" />
//              <Img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" />
//             </ImgProduct>
//             </ImgDisplay>
// <SelectImg>

// <ItemImg>
// <ImgItems src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" />
// </ItemImg>

// <ItemImg>
// <ImgItems src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" />
// </ItemImg>

// <ItemImg>
// <ImgItems src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" />
// </ItemImg>


// <ItemImg>
// <ImgItems src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" />
// </ItemImg>
// </SelectImg>

//             </ProductImg>

// <ProductContent>

// <TitleProduct> shoes nike</TitleProduct>
// <Visit>visit nike store </Visit>

// <RatingProduct>
// <i class = "fas fa-star"></i>
//         <i class = "fas fa-star"></i>
//         <i class = "fas fa-star"></i>
//         <i class = "fas fa-star"></i>
//         <i class = "fas fa-star-half-alt"></i>

// </RatingProduct>
// </ProductContent>

//             </Card>
//         </CardWrapper>
//         </detailsWrapper>
//         </DetailsSection>
    )
}

export default Details
