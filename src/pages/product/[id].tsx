import Image from "next/image";
import {
  ImageContainer,
  ProductDetails,
  ProuctContainer,
} from "../../styles/pages/product";

import camiseta1 from "../../assets/camisetas/1.png";
import { GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  };
}

export default function Product({ product }: ProductProps) {
  return (
    <ProuctContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt={product.name}
        />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Compar agora</button>
      </ProductDetails>
    </ProuctContainer>
  );
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, //1horas
  };
};