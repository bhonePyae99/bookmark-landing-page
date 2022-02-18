import { useState } from "react";
const Tabs = () => {
  const tabs = [
    {
      heading: "Bookmark in one click",
      id: "1",
      img: "/images/illustration-features-tab-1.svg",
      content:
        "Organize your bookmarks however you like. Our simple drag-and-dropinterface gives you complete control over how you manage your favouritesites.",
    },
    {
      heading: "Intelligent search",
      id: "2",
      img: "/images/illustration-features-tab-2.svg",
      content:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      heading: "Share your bookmarks",
      id: "3",
      img: "/images/illustration-features-tab-3.svg",
      content:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  const [currentSelected, setCurrentSelected] = useState("1");
  let style =
    "w-1/3 h-full bg-softRed duration-500 ease-in-out transform absolute left-0 transition";
  if (currentSelected === "1") {
    style += " translate-x-[0%]";
  } else if (currentSelected === "2") {
    style += " translate-x-[110%]";
  } else {
    style += " translate-x-[200%]";
  }
  return (
    <div className="mt-4 w-5/6 mx-auto">
      <div className="w-3/4 mx-auto mt-10">
        <ul className="list-none md:flex md:justify-around">
          {tabs.map((item) => (
            <li
              className="cursor-pointer py-3 md:py-0 border-y md:border-none border-grayishBlue borderob-2 relative"
              onClick={() => {
                setCurrentSelected(item.id);
              }}
              key={item.heading}
            >
              <p
                className={
                  item.id === currentSelected
                    ? "text-black"
                    : "text-grayishBlue hover:text-softRed"
                }
              >
                {item.heading}
              </p>
              {currentSelected === item.id && (
                <div className="w-1/2 h-1 bg-softRed block md:hidden mx-auto absolute bottom-0 translate-y-1/3 left-1/2 -translate-x-1/2"></div>
              )}
            </li>
          ))}
        </ul>
        <div className="w-full h-1 bg-gray-300 hidden md:block relative mt-5">
          <div className={style}></div>
        </div>
      </div>
      {tabs.map((item) => (
        <>
          {currentSelected === item.id && (
            <div
              className="grid md:grid-cols-2 md:mt-10 mt-36 gap-20"
              key={item.id}
            >
              <div className="col-span-1 relative">
                <div className="bg-softBlue md:absolute left-0 translate-y-1/4 -translate-x-1/2 md:ml-0 w-[150%] h-44 md:h-full rounded-r-full">
                  <img
                    src={item.img}
                    className="md:w-[600px] md:h-[400px] absolute scale-75 md:right-0 translate-x-1/3 bottom-1/2 transform translate-y-1/3 md:translate-x-1/4"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-1 text-center md:text-left md:pt-20 md:pl-20 px-0">
                <h2 className="md:text-3xl text-2xl font-bold">
                  {item.heading}
                </h2>
                <p className="text-lg text-grayishBlue mt-4">{item.content}</p>
                <button className="bg-softBlue px-4 py-2 rounded text-white mt-5">
                  More Info
                </button>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Tabs;
