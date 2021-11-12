       import styled from 'styled-components';
export const CardWrapper = styled.div`
 max-width: 1100px;
    margin: 0 auto;
    @media screen and (min-width: 992px){

         
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    
    }
`
export const Card = styled.div`
@media screen and (min-width: 992px){

      display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
}
`
export const ProductImg = styled.div`
@media screen and (min-width: 992px){

     display: flex;
        flex-direction: column;
        justify-content: center;
}

`

export const ImgDisplay = styled.div`
overflow: hidden;
`

export const ImgProduct = styled.div`
display: flex;
    width: 100%;
    transition: all 0.5s ease;

`

export const Img = styled.img`
min-width: 100%;

`

export const SelectImg = styled.div`
 display: flex;

`
export const ItemImg = styled.div`
margin: 0.3rem;
&:nth-child(1),
&:nth-child(2),
&:nth-child(3){
    margin-right: 0;
}

&:hover{
    opacity: 0.8;
}

`

export const ImgItems =styled.img`
 width: 100%;
    display: block;
`


export const ProductContent = styled.div`
padding: 2rem 1rem;
`

export const TitleProduct = styled.h2`
 font-size: 3rem;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
    color: #12263a;
    margin: 1rem 0;

    &::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 80px;
    background: #12263a;
}
`

export const Visit=styled.span`

 text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    background: #256eff;
    color: #fff;
    padding: 0 0.3rem;
    transition: all 0.5s ease;
    &:hover{
    opacity: 0.9;
}

`
export const RatingProduct=styled.div`
 color: #ffc107;
`

       export const DetailsSection=styled.div`padding: 160px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #101522;`

    export const detailsWrapper=styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
    
    `


export const PricingSection = styled.div`
	padding: 160px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #101522;
`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;




