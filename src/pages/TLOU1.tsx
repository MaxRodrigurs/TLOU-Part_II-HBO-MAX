import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu//Menu";
import Other from "../components/Other/Other";
import About1 from "../components/About/About1";

function TLOU1() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-tlou bg-no-repeat phone:bg-contain bg-black desktop:bg-cover text-white ">
      <Menu />
      <main className="space-y-12 phone:px-8 phone:py-6 tablet:px-14 tablet:py-6 laptop:px-28 laptop:py-12">
        <About1 />
        <section className="font-gilroy-medium py-12">
          <h2 className="text-3xl font-gilroy-bold">The Last Of Us Collections</h2>
          <div className="cursor-pointer flex phone:space-x-1 laptop:space-x-4 mt-6">
            <CollectionLink link="/" imageSrc="/img/partII.png" />
            <CollectionLink link="https://play.hbomax.com/page/urn:hbo:page:spotlight-the-last-of-us" imageSrc="/img/collection.png" />
          </div>
          <Other />
        </section>
      </main>
      <Footer />
    </div>
  );
}

interface CollectionLinkProps {
  link: string;
  imageSrc: string;
}

const CollectionLink: React.FC<CollectionLinkProps> = ({ link, imageSrc }) => {
  return (
    <a className='bg-black rounded-lg' href={link}>
      <img className="rounded-lg opacity-70 hover:opacity-100 hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-purple-600 ease-in-out duration-200" src={imageSrc} alt="" />
    </a>
  );
};

export default TLOU1;
