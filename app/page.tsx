import { Categories, Container, Filters, SortPopup, TopBar } from "@/components/shared";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <div>
      <Container className="mt-10">
        <Title text='Все пиццы' size='lg' className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">

          <div className="w-[250px]">
            <Filters />
          </div>

           <div className="flex flex-col gap-16">

           </div>
        </div>
      </Container>
    </div>
  );
}
