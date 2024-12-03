import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

// Revalidate the page on every request, purge cache & fetch latest data
export const revalidate = 0;

export default async function HomePage() {

  // Fetch featured products
  const products = await getProducts({ isFeatured: true });

  // Fetch billboard
  const billboard = await getBillboard("bef3665a-e9c7-4bf6-8c59-c79cf3231cf7");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
