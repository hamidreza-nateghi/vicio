import NikeShoes from "../assets/nike-shoes.png";

function GiftDisplay() {
  return (
    <div className="flex flex-col justify-between">
      <img src={NikeShoes} loading="lazy" className="w-[26.7vh] h-[32.75vh]" />
      <div className="flex gap-[0.86vh]">
        <div className="bg-[url('assets/bar-code.svg')] bg-contain w-[11.02vh] h-[2.91vh]"></div>
        <div className="text-block">And Nike gave it to us</div>
      </div>
    </div>
  );
}

export default GiftDisplay;
