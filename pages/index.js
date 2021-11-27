import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text,Button} from "@chakra-ui/react"
import { baseUrl,fetchApi,fetchUrl } from "../utils/fetchApi";
import Property from "../components/Property.jsx"
const Banner=({purpose,imageUrl,title1,title2,desc1,linkName,buttonText,desc2})=>{
  return (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner"/>
    <Box p="5">
      <Text color="grey.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text  fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text  fontSize="lg" paddingBottom="3" paddingTop="3" color="grey.700">{desc1}<br/>{desc2}</Text>
      <Button fontSize="xl" >
        <Link href={linkName}>
          {buttonText}
        </Link>
      </Button>
    </Box>
  </Flex>)
}
export default function Home({propertyForSale,propertyForRent}) {
  console.log(propertyForSale,"propertiesForSale");
  console.log(propertyForRent,"propertiesForRent");
  return (
    <div>
      <h1>Hello world </h1>
      <Banner
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartaments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap="wrap">
        {propertyForRent.map(property=><Property property={property} key={property.id}/>)}
        </Flex>
      <Banner
      purpose="BUY A HOME"
      title1="find , Buy & Own Your"
      title2="Everyone "
      desc1="Explore Apartaments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap="wrap">
        {propertyForSale.map(property=><Property property={property} key={property.id}/>)}
        </Flex>
    </div>
  )
}

export async function getStaticProps(){
  const propertyForSale=await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent=await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  return {
    props:{
      propertyForSale:propertyForSale?.hits,
      propertyForRent:propertyForRent?.hits

    }
  }
}