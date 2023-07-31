import { BlobSvg, Hero, Card, Title } from "@/components";
import { NewsletterForm } from "@/patterns";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { homePageCards as cards } from "@/constants";

const Home = async () => {
  return (
    <>
      <div className="absolute top-0 -z-10 h-screen w-full overflow-hidden max-xl:hidden">
        <BlobSvg className="absolute -right-40 -top-10" />
      </div>

      <HeroSection />

      <MainCardSection />

      <OffersSection />
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="relative z-20">
      <Hero className="mx-auto lg:w-3/4 lg:grid-cols-2">
        <Hero.Content className="max-lg:max-w-xl lg:items-start lg:text-left">
          <div className="mb-8">
            <Hero.Subtitle>Sua casa com as</Hero.Subtitle>

            <Hero.Title
              as="h1"
              className="mb-4"
            >
              melhores plantas
            </Hero.Title>

            <p>
              Encontre aqui uma vast a seleção de plantas para decorar a sua
              casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com
              seu e-mail e assine nossa newsletter para saber das novidades da
              marca.
            </p>
          </div>

          <NewsletterForm />
        </Hero.Content>

        <div
          className="col-start-2 h-4/5 w-full bg-cover bg-center bg-no-repeat max-lg:hidden"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
      </Hero>
    </section>
  );
};

const cardOptions = [
  { icon: "CursorArrowRaysIcon", text: "Escolha suas plantas" },
  { icon: "ShoppingCartIcon", text: "Faça seu pedido" },
  { icon: "TruckIcon", text: "Aguarde na sua casa" },
];

const MainCardSection = () => {
  return (
    <section className="mb-20 px-2">
      <Card className="mx-auto max-w-sm md:max-w-2xl">
        <Card.Img
          src="/images/main-card.png"
          alt="Main card plant"
          width={384}
          height={284}
        />

        <Card.Info className="px-6">
          <Card.Subtitle>Como conseguir</Card.Subtitle>

          <Card.Title
            as="h2"
            className="mb-4 text-4xl"
          >
            minha planta
          </Card.Title>

          {cardOptions.map(({ icon, text }) => (
            <span
              key={`Main card ${icon} ${text}`}
              className="flex items-center gap-x-4"
            >
              <Card.Icon name={icon} /> <span>{text}</span>
            </span>
          ))}
        </Card.Info>
      </Card>
    </section>
  );
};

const OffersSection = () => {
  return (
    <section className="px-4 pb-20 text-center">
      <p className="text-xl">Conheça nossas</p>

      <Title
        as="h2"
        className="text-8xl lg:text-9xl"
      >
        ofertas
      </Title>

      <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-10">
        {cards.map(({ img, name, price }) => (
          <Card
            key={`Card ${name} ${price}`}
            className="w-full max-w-xs md:max-w-sm"
          >
            <Card.Img
              bg
              {...img}
              className="h-[216px] w-full md:max-w-[192px]"
            />

            <Card.Info className="px-4 text-start">
              <Card.Title className="text-3xl">{name}</Card.Title>

              <p className="-mt-2 mb-4">R$ {price}</p>

              <Card.Action className="gap-3">
               <span>Comprar</span> <ArrowRightIcon className="h-4 w-4" />
              </Card.Action>
            </Card.Info>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Home;
