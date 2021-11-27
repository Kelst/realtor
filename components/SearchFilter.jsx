import { useEffect,useState } from "react";
import {Flex,Select,Box,Input,Spiner,Icon,Button,Text} from "@chakra-ui/react"
import {useRouter} from "next/router"
import {MdCancel} from "react-icons/md"
import { filterData,getFilterValues } from "../utils/filterData";
import Image from "next/image"

const SearchFilter=()=>{
    const [filters, setFilters] = useState(filterData);
    const router=useRouter();
    const searchProperties=(filterValues)=>{

        const path=router.pathname;
        const {query}=router;
        const values=getFilterValues(filterValues);
        values.forEach(item=>{
            if(item.value&&filterValues?.[item.name])
            query[item.name]=item.value;
        });
        router.push({pathname:path,query})

    }
return(
    <Flex flexWrap="wrap" justifyContent="center" p="4" bg="gray.100" >
        {
            filters.map(filter=>{
                return<Box key={filter.queryName}>
                    <Select 
                    placeholder={filter.placeholder}
                    w="fit-content"
                    p="2"
                    onChange={e=>searchProperties({[filter.queryName]:e.target.value})}>
                        {
                            filter?.items?.map(items=>{
                                return <option value={items.value} key={items.value}>
                                    {items.name}

                                </option>
                            })
                        }

                    </Select>

                </Box>
            })
        }

        
    </Flex>
)


}

export default SearchFilter