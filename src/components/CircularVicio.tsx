import "./CircularVicio.css";

function CircularVicio() {
  return (
    <div className="w-[7.78vh] h-[7.78vh] relative">
      <div className="absolute inset-0 bg-[url('assets/circle-vicio-0.svg')] bg-contain animate-[spin_12s_linear_infinite]"></div>
      <div className="absolute inset-0 bg-[url('assets/circle-vicio-1.svg')] bg-contain"></div>
    </div>
  );
}

export default CircularVicio;
