import { Categories, Container, Filters, SortPopup, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
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

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="пиццы" items={[{
                id: 1,
                name: 'Сырный цыпленок',
                imageUrl: './pizza1.png',
                price: 550,
                items: [{ price: 550 }]
              }]} categoryId={1} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
