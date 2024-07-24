export const metadata = {
  title: "BeYoung | India's Fashion Destination",
  description: "BeYoung homepage",
};

export default function Home() {
  return (
    <div className="parent">
      <div className="flex items-center justify-center">
        <div className="first-item border m-2 p-2">
          <h1 className="text-3xl  font-bold underline text-center">
            Hello world!
          </h1>
          <p className="text-2xl  text-center">This is homepage content.</p>
        </div>
      </div>
    </div>
  );
}
