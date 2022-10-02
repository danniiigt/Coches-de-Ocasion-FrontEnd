import { HomePageData, NavMenu, Search } from "../components";

export const HomePage = () => {
  return (
    <>
      <NavMenu bgTransparent={true} />
      <Search />
      <HomePageData />
    </>
  );
};
