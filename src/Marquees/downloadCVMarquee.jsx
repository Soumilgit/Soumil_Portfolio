import _Marquee from "react-fast-marquee";

const Marquee = _Marquee.default || _Marquee;

export function DownloadCVMarquee() {
  return (
    <div className="relative overflow-hidden">
      <Marquee speed={100}>
        {Array(7).fill("RESUME").map((word, index) => (
          <p key={index} className="proto accent mx-3">{word}</p>
        ))}
      </Marquee>
    </div>
  );
}

