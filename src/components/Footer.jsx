import React from "react";

function Footer({ footerAPI }) {
  return (
    <>
      <footer className="bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7 ">
        <div className="grid items-center grid-cols-3 justify-items-center">
          {footerAPI.titles?.map((elm, index) => (
            <div key={index} className="grid items-center justify-items-center">
              <h1 className="text-xl lg:text-base uppercase font-semibold">{elm.title}</h1>
            </div>
          ))}
          {footerAPI.links?.map((lists, index) => (
            <ul key={index} className="grid items-center justify-items-center gap-1">
              {
                lists?.map((list,index)=>(
                  <li key={index} className="font-mono text-sm sm:text-xsm">{list.link}</li>
                ))
              }
            </ul>
          ))}
        </div>
        <div className="w-7/12 lg:w-[95vw] m-auto mt-9">
          <div className="h-[0.1vh] bg-black/30 my-7 md:my-5"></div>
          <div className="flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse">
          <p className="text-sm md:text-center">Copyright <sup className="text-base font-bold">&copy;</sup>All Reserved Rights 2023</p>
            <div className="flex items-center gap-3">{footerAPI.sociallinks?.map((elm,index)=>(
                  <img src={elm.icon} alt="footer-icon" key={index} className="w-5 h-5"/>
            ))}</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
