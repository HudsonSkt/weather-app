import { Container, Title, InputWrapper, Input, Button } from "./styles";

interface Props {
  city: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchBar = ({ city, onChange, onSearch }: Props) => {
  return (
    <Container>
      <Title>🌤 Weather App</Title>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Digite uma cidade..."
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          value={city}
        ></Input>
        <Button onClick={onSearch}>Buscar</Button>
      </InputWrapper>
    </Container>
  );
};
