import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";

interface ErrorPageProps {
  errorCode: number;
  errorMessage: string;
}

function ErrorPage({ errorCode, errorMessage }: ErrorPageProps) {
  return (
    <div className="bg-[#040404] flex flex-col min-h-screen justify-between text-white items-center">
      <Menu />
      <main className="space-y-2 laptop:py-12">
        <div className="text-5xl whitespace">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-[#a578ff] to-[#4690FF] font-gilroy-bold">
            Error {errorCode}
          </h2>
        </div>
        <div className="font-gilroy-medium text-[#8f9ba8]">
          <p>{errorMessage}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
