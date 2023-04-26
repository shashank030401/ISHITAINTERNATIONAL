import WSF from "../Images/WSF.jpg";
import Herbal from "../Images/Herbal.jpg";
import Industrial from "../Images/Industrial.jpg";
import Consulting from "../Images/Consulting.jpg";
import _19All from "../Images/WSF_Products/19all.JPG";
import _12_61_0 from "../Images/WSF_Products/12_61_0.JPG";
import _13_0_45 from "../Images/WSF_Products/13_0_45.JPG";
import EXSOL from "../Images/Industrial_Products/EXSOL.jpeg";
import EXSOL_TABLE from "../Images/Industrial_Products/EXSOL_TABLE.png";
import Urea from "../Images/Industrial_Products/Urea.jpeg";
import UREA_TABLE from "../Images/Industrial_Products/UREA_TABLE.png";
export const navItems = [
  { id: "nav_item_1", navItemName: "Home", URL: "/" },
  { id: "nav_item_2", navItemName: "About Us", URL: "/" },
  { id: "nav_item_3", navItemName: "B2B", URL: "/b2b" },
  { id: "nav_item_4", navItemName: "B2C", URL: "/wsf/b2c/exsol-fertilizers" },
  { id: "nav_item_5", navItemName: "News & Updates", URL: "/" },
  { id: "nav_item_6", navItemName: "Contact", URL: "/" },
];

export const ServiceTiles = [
  {
    id: "service_name_1",
    serviceName: "Water Soluble Fertiliser",
    URL: "/wsf",
    image: WSF,
  },
  {
    id: "service_name_2",
    serviceName: "Industrial Chemical",
    URL: "/industrial-chemicals",
    image: Industrial,
  },
  {
    id: "service_name_3",
    serviceName: "Herbal and Bio",
    URL: "/",
    image: Herbal,
  },
  {
    id: "service_name_4",
    serviceName: "Consulting",
    URL: "/",
    image: Consulting,
  },
];

export const WSF_Products = [
  {
    id: "WSF_Products_1",
    img: _19All,
    swap: true,
    title: "Water Soluble NPK 19-19-19",
    content:
      "We have manufacturing capacity to produce 300 mt of water soluble NPK Fertilizer, 300 mt Potassium Nitrate Fertilizer 13-0-45. Majority of our fertilizer and fertilizer raw material production is sold to large fertilizer companies on co marketing basis. We are the pioneer company providing import substitute. A large section of farmers, public sector companies and private sector companies sell WSFs produced by us.",
  },
  {
    id: "WSF_Products_2",
    img: _13_0_45,
    swap: false,
    title: "Water Soluble Potasium Nitrate 13-0-45",
    content:
      "With an installed manufacturing capacity to produce 300 mt Potassium Nitrate Fertilizer 13-0-45 per month we are catering to majority of public sector and large private sector companies for their need of speciality fertilizer raw material and finished good. Our 13-0-45 is special in many ways. It has K2O more than 46%, Nitrogen more than 13.5%, sodium and chlorine very well with the FCO limits and most importantly pH at 7.",
  },
  {
    id: "WSF_Products_3",
    img: _12_61_0,
    swap: true,
    title: "Mono Ammonium Phosphate 12-61-0",
    content:
      "With an installed manufacturing capacity to produce 300 mt Potassium Nitrate Fertilizer 13-0-45 per month we are catering to majority of public sector and large private sector companies for their need of speciality fertilizer raw material and finished good. Our 13-0-45 is special in many ways. It has K2O more than 46%, Nitrogen more than 13.5%, sodium and chlorine very well with the FCO limits and most importantly pH at 7.",
  },
];

export const Instrial_Product = [
  {
    id: "Instrial_Product_1",
    img: Urea,
    swap: true,
    table: UREA_TABLE,
    title: "Urea Technical Grade",
    content:
      "We are manufacturing Urea Technical grade in crystalline form. Its suitable for us in dyes, pigments, water treatment and variety of Industrial applications. Its not suitable for use in agriculture and as DEF. Please contact directly for special grades.",
  },
  {
    id: "Instrial_Product_2",
    img: EXSOL,
    table: EXSOL_TABLE,
    swap: false,
    title: "DEF exhaust Fluid",
    content:
      "EXSOL DEF is for BS 6 heavy vehicles and cars. Its available in the following specs –",
  },
];

export const b2b = [
  {
    id: "b2b_1",
    img: WSF,
    swap: true,
    title: "Water Soluble Fertilizer",
    content:
      "We produce a variety of water soluble fertilizer for co-marketing in India and for export. We are also producing variety of Industrial chemicals for water treatment, dye, pigment, phosphates and white gypsum for white cement, PoP and putty manufacturing. Please click on the relevant section below to know products we are currently producing.",
  },
  {
    id: "b2b_2",
    img: Industrial,
    swap: false,
    title: "Industrial Chemicals",
    content:
      "We produce a variety of water soluble fertilizer for co-marketing in India and for export. We are also producing variety of Industrial chemicals for water treatment, dye, pigment, phosphates and white gypsum for white cement, PoP and putty manufacturing. Please click on the relevant section below to know products we are currently producing.",
  },
];
