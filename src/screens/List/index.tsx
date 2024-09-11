import { useParams } from "react-router-dom";
import { Container, InputSearch, Select, Wrapper } from "./styles";
import { useEffect, useState } from "react";
import { getAPIList } from "../../services/api";
import { Card } from "../../components/Card";
import { Search } from "../../services/search";



export function List() {
    const filtersOptions = [ "upcoming", "top_rated", "popular"]
    const categoriesOptions = [ "tv", "movie"]
    const params = useParams()

    const [category, setCategory] = useState("movie")
    const [filter, setFilter] = useState("top_rated")
    const [ results, setResults ] = useState([])
    const [searchText, setSearchText] = useState('');

    async function handleSearch(event: Event){
        event.preventDefault();
        const {data} = await Search(searchText)
        setResults(data.results)
    }

    async function getResults(){
        const { data } = await getAPIList({ category: category, filter: filter})
        setResults(data.results)
    }

    function changeFilter({ target }){
        setFilter(target.value)
        getResults()
    }

    function changeCategory({ target }){
        setCategory(target.value)
        getResults()
    }

    useEffect(() => {
        console.log("params: ", params)
        if(params.category){
            setCategory(params.category)
        }
        if(params.filter){
            setFilter(params.filter)
        }
        getResults()
    }, [])
    
    return (
        <Container>
            <Wrapper>
                <Select value={filter} onChange={changeFilter}>
                    {
                        filtersOptions.map((filtersOption) => {
                            return ( <option> {filtersOption} </option> )
                        })
                    }
                </Select>

                <Select value={category} onChange={changeCategory}>
                    {
                        categoriesOptions.map((categoryOption) => {
                            return ( <option>{categoryOption}</option> )
                        })
                    }
                </Select>

                <form onSubmit={handleSearch}>
                    <InputSearch  onChange={({target}) => setSearchText(target.value)} placeholder="Buscar por..." /> 
                </form>
            </Wrapper>
            <Wrapper>
                {
                    results.map((result) => {
                        return (
                            <Card movieContent={result} type={category}/>
                        )
                    })
                }
            </Wrapper>
        </Container>
    )
}