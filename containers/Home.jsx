import { Container } from "./Home.styles";
// Components
import { CollapseRow } from "@components";

const detailList = [
  { id: 1, name: "Settings" },
  { id: 2, name: "Hero" },
  { id: 3, name: "Synopsis" },
  { id: 4, name: "Social Links" },
  { id: 5, name: "Seasons" },
  { id: 6, name: "Quotes" },
];

export default function Home() {
  return (
      <Container>
        {detailList.map((item) => (
          <CollapseRow key={item.id} name={item.name}/>
        ))}
      </Container>
  );
}