import useData from "../hooks/useData";

interface Genre {
  id: number;
  name: string;
}
const GenreList = () => {
  const { data, error, isLoading } = useData<Genre>("/genres");
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
