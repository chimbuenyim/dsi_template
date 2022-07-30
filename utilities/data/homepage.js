import technology from "../../assets/home/cogwheel.svg";
import product from "../../assets/home/product-description.svg";
import services from "../../assets/home/verified.svg";
import pana from "../../assets/home/pana.svg";
import hero from "../../assets/home/hero_image.svg";

export const HomeProductService = [
  {
    icon: product,
    title: "Our Product",
    content:
      "Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.",
  },
  {
    icon: services,
    title: "Our Service",
    content:
      "DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.",
  },
  {
    icon: technology,
    title: "Our Technology",
    content:
      "First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.",
  },
];

export const HomeBody = [
  {
    id: 1,
    icon: hero,
    title: (
      <h1>
        Making the most of the ever-growing{" "}
        <span className="app__color-name">Information Technology</span>
      </h1>
    ),
    content: [
      {
        paragraph: (
          <p>
            Managed by a team of professional experts with extensive experience
            and impressive track records
          </p>
        ),
      },
    ],
    button: "Read More",
  },
  {
    id: 2,
    icon: pana,
    title: (
      <h3>
        Welcome to{" "}
        <span className="app__color-name">Dwidasa Samsara Indonesia (DSI)</span>
      </h3>
    ),
    content: [
      {
        paragraph: (
          <p>
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
            the founders, who each of them has a common end objective to
            innovate new creations by making the most of the ever-growing
            information technology through{" "}
            <span className="app__color-name">DSI’s</span> distinct front-end
            based application concept.
          </p>
        ),
      },
      {
        paragraph: (
          <p>
            Managed by a team of professional experts with extensive experience
            and impressive track records,{" "}
            <span className="app__color-name">DSI</span> believes that
            continuous improvements and innovations assure your business to run
            effectively and efficiently.
          </p>
        ),
      },
    ],
  },
];
