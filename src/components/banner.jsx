import { useEffect, useRef } from "react";
export default function Banner() {
  const banner = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const atOptions = {
    key: "4a9484e745a30d15214cb828f8645a43",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
  };
  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.topcreativeformat.com/4a9484e745a30d15214cb828f8645a43/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);

  return (
    <div>
      {/* <iframe
        width={320}
        height={50}
        src="topcreativeformat.com/4a9484e745a30d15214cb828f8645a43/invoke.js"
      /> */}
      <div
        className="mx-2 my-5 items-center justify-center border border-gray-200 text-center text-white"
        ref={banner}
      ></div>
    </div>
  );
}
