import { Header, Sidebar } from "@/components";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const LayoutHeader = ({ navs }) => {
  return (
    <Header className="sm:px-4">
      <Header.Logo />

      <Header.List
        items={navs}
        className="max-lg:hidden"
      />

      <Sidebar className="lg:hidden">
        <Sidebar.Toggle>
          <Bars3Icon
            className="h-6 w-6"
            strokeWidth={2}
          />
        </Sidebar.Toggle>

        <Sidebar.List
          close={
            <XMarkIcon
              className="h-5 w-5"
              strokeWidth={3}
            />
          }
          items={navs}
        />
      </Sidebar>
    </Header>
  );
};

export default LayoutHeader;
