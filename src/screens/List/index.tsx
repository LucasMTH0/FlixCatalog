/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, InputSearch, Select, Wrapper, WrapperGrid } from "./styles";
import { getAPIList } from "../../services/api";
import { Search } from "../../services/search";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";

export function List() {
  const filtersOptions: string[] = ["upcoming", "top_rated", "popular"];
  const categoriesOptions: string[] = ["tv", "movie"];
  const params = useParams();

  const [filter, setFilter] = useState<string>("top_rated");
  const [category, setCategory] = useState<string>("");
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { data } = await Search(searchText);
    setResults(data.results);
  }

  async function getResults() {
    const categorySelected = category.length > 0 ? category : params.category;
    const { data } = await getAPIList(categorySelected as string, filter);
    setResults(data.results);
  }

  function changeFilter({ target }: { target: any }) {
    setFilter(target.value);
    getResults();
  }

  function changeCategory({ target }: { target: any }) {
    setCategory(target.value);
    getResults();
  }

  useEffect(() => {
    if (params.category) {
      setCategory(params.category);
    }
    if (params.filter) {
      setFilter(params.filter);
    }
    getResults();
  }, [category, filter]);

  return (
    <Container>
      <Wrapper>
        <Select value={filter} onChange={changeFilter}>
          {filtersOptions.map((filtersOption) => {
            return <option> {filtersOption} </option>;
          })}
        </Select>

        <Select value={category} onChange={changeCategory}>
          {categoriesOptions.map((categoryOption: string) => {
            return <option>{categoryOption}</option>;
          })}
        </Select>

        <form onSubmit={handleSearch}>
          <InputSearch
            onChange={({ target }) => setSearchText(target.value)}
            placeholder="Buscar por..."
          />
        </form>
      </Wrapper>
      <WrapperGrid>
        {results.map((result) => {
          return <Card movieContent={result} type={category} />;
        })}
      </WrapperGrid>
    </Container>
  );
}
