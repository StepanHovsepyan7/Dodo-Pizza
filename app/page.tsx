import { Container, Filters, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {


  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true
        }
      }
    }
  })
  return (
    <div>
      <Container className="mt-10">
        <Title text='Все пиццы' size='lg' className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category)=> category.products.length > 0)}/>

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">

          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category) => {
                return (
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
