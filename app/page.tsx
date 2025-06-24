import { Categories, Container, SortPopup, TopBar } from "@/components/shared";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <div>
      <Container className="mt-10">
        <Title text='Все пиццы' size='lg' className="font-extrabold" />
      </Container>
      <TopBar />
    </div>
  );
}
