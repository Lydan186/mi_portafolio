
interface HeroProps {
  title: string;
  text: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
       <h1 className="text-black text-6xl">{props.title}</h1>
       <br />
      <div className="flex items-center space-x-8 animate-marquee">
        <div className="bg-white p-1 rounded-lg shadow-md flex-shrink-0">
      <p className="text-black text-4xl">{props.text}</p>
      </div>
      </div>
    </div>
  );
}