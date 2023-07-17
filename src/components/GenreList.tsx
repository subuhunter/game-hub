import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />

  return (
    <>
    <Heading fontSize='2xl' marginBottom='3' >Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              objectFit='cover'
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImgUrl(genre.image_background)}
            />
            <Button textAlign='left' whiteSpace='normal' fontWeight={genre.id === selectedGenre?.id? 'bold': 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
