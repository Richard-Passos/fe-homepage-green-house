import { LayoutHeader } from "@/patterns";
import { navs } from "@/constants";
import { Montserrat } from "next/font/google";
import "@/assets/styles/globals.css";

const metadata = {
  title: "Casa verde",
  description:
  "Treinando design e composition pattern com TailwindCSS e Daisyui"
};

const montserrat = Montserrat({ subsets: ["latin"] });

const RootLayout = ({ children }) => (
  <html lang="pt-BR">
    <body
      style={montserrat.style}
      className="min-h-screen w-full overflow-x-hidden bg-base-200 text-gray-s"
    >
      <main className="relative isolate mx-auto max-w-screen-2xl">
        <LayoutHeader navs={navs} />

        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
export { metadata };
