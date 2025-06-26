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
              <ProductsGroupList title="Пиццы"
                items={[{
                  id: 1,
                  name: 'Сырный цыпленок',
                  imageUrl: './pizza1.png',
                  price: 550,
                  items: [{ price: 550 }]
                }, {
                  id: 2,
                  name: 'Пепперони',
                  imageUrl: './pizza1.png',
                  price: 600,
                  items: [{ price: 600 }]
                }, {
                  id: 3,
                  name: 'Маргарита',
                  imageUrl: './pizza1.png',
                  price: 500,
                  items: [{ price: 500 }]
                }]} categoryId={1} /> 
                <ProductsGroupList title="Комбо"
                items={[{
                  id: 1,
                  name: 'Сырный цыпленок',
                  imageUrl: './pizza1.png',
                  price: 550,
                  items: [{ price: 550 }]
                }, {
                  id: 2,
                  name: 'Пепперони',
                  imageUrl: './pizza1.png',
                  price: 600,
                  items: [{ price: 600 }]
                }, {
                  id: 3,
                  name: 'Маргарита',
                  imageUrl: './pizza1.png',
                  price: 500,
                  items: [{ price: 500 }]
                },
                 {
                  id: 4,
                  name: 'Маргарита',
                  imageUrl: './pizza1.png',
                  price: 500,
                  items: [{ price: 500 }]
                },
                 {
                  id: 5,
                  name: 'Маргарита',
                  imageUrl: './pizza1.png',
                  price: 500,
                  items: [{ price: 500 }]
                },

                 {
                  id: 6,
                  name: 'Маргарита',
                  imageUrl: './pizza1.png',
                  price: 500,
                  items: [{ price: 500 }]
                }
                
                ]} categoryId={2} /> 
                 <ProductsGroupList title="Закуски"
                items={[{
                  id: 1,
                  name: 'Сырный цыпленок',
                  imageUrl: './pizza1.png',
                  price: 550,
                  items: [{ price: 550 }]
                }, {
                  id: 2,
                  name: 'Пепперони',
                  imageUrl: './pizza1.png',
                  price: 600,
                  items: [{ price: 600 }]
                }, {
                  id: 3,
                  name: 'Маргарита',
                  imageUrl: './pizza1.png',
                  price: 500,
                  items: [{ price: 500 }]
                },
                 {
                  id: 4,
                  name: 'Маргарита',
                  imageUrl: './pizza1.png',
                  price: 500,
                  items: [{ price: 500 }]
                },
                 {
                  id: 5,
                  name: 'Маргарита',
                  imageUrl: './pizza1.png',
                  price: 500,
                  items: [{ price: 500 }]
                },

                 {
                  id: 6,
                  name: 'Маргарита',
                  imageUrl: './pizza1.png',
                  price: 500,
                  items: [{ price: 500 }]
                }
                
                ]} categoryId={3} /> 
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
