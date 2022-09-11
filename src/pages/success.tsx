import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success(){
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Diogo Mota</strong>, sua <strong>Camisa beyoud the Limits</strong>
      </p>

      <Link href='/'>
      Voltar ao Catálogo
      </Link>
    </SuccessContainer>
  )
}