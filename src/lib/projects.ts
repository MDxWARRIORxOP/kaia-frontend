interface MarketplaceProject {
  title: string;
  location: string;
  category: string;
  filterCategory: string;
  vintage: string;
  registry: string;
  sdg: string;
  type: string;
  standard: string;
  volume: string;
  price: string;
  image: string;
}

// export const marketplaceProjects: MarketplaceProject[] = [
//   {
//     title: "Amazon Rainforest Conservation",
//     location: "Para, Brazil",
//     category: "Nature-based",
//     filterCategory: "Blue Carbon",
//     vintage: "2024",
//     registry: "Verra VCS",
//     sdg: "SDG 15",
//     type: "Verra VCS",
//     standard: "REDD+",
//     volume: "1.2M tCO2e",
//     price: "$15.00",
//     image: "/images/windmillSection3_1.svg",
//   },
//   {
//     title: "Cropcity Afforestation Project of Mahogany Trees",
//     location: "India",
//     category: "Nature-based",
//     filterCategory: "Afforestation",
//     vintage: "2022",
//     registry: "International Carbon Registry",
//     sdg: "SDG 15",
//     type: "International Carbon Registry",
//     standard: "REDD+",
//     volume: "1.2M tCO2e",
//     price: "$15.00",
//     image: "/images/windmillSection3_1.svg",
//   },
//   {
//     title: "Rajasthan Solar Farm Development",
//     location: "Rajasthan, India",
//     category: "Nature-based",
//     filterCategory: "Renewable Energy",
//     vintage: "2023",
//     registry: "Gold Standard",
//     sdg: "SDG 7",
//     type: "Gold Standard",
//     standard: "",
//     volume: "850K tCO2e",
//     price: "$8.50",
//     image: "/images/windmillSection3_2.svg",
//   },
//   {
//     title: "Kenya Clean Cookstoves Initiative",
//     location: "Para, Brazil",
//     category: "Health",
//     filterCategory: "Energy Efficiency",
//     vintage: "2024",
//     registry: "Gold Standard",
//     sdg: "SDG 12",
//     type: "Household Energy",
//     standard: "",
//     volume: "340K tCO2e",
//     price: "$18.00",
//     image: "/images/buyerSection6_1.svg",
//   },
//   {
//     title: "India Wind Farm Initiative",
//     location: "Rajasthan, India",
//     category: "Biodiversity",
//     filterCategory: "Renewable Energy",
//     vintage: "2022",
//     registry: "Verra VCS",
//     sdg: "SDG 13",
//     type: "Verra VCS",
//     standard: "REDD+",
//     volume: "1.2M tCO2e",
//     price: "$15.00",
//     image: "/images/windmillSection3_4.svg",
//   },
//   {
//     title: "Amazon Rainforest Conservation",
//     location: "Para, Brazil",
//     category: "Nature-based",
//     filterCategory: "Waste Disposal",
//     vintage: "2021",
//     registry: "Verra VCS",
//     sdg: "SDG 15",
//     type: "Verra VCS",
//     standard: "REDD+",
//     volume: "1.2M tCO2e",
//     price: "$15.00",
//     image: "/images/windmillSection3_4.svg",
//   },
//   {
//     title: "Soil Carbon Sequestration - Brazil",
//     location: "Mato Grosso, Brazil",
//     category: "Health",
//     filterCategory: "Industrial Processing",
//     vintage: "2024",
//     registry: "Puro.earth",
//     sdg: "SDG 13",
//     type: "Household Energy",
//     standard: "",
//     volume: "340K tCO2e",
//     price: "$18.00",
//     image: "/images/oceanProject7.svg",
//   },
//   {
//     title: "Direct Air Capture - Iceland",
//     location: "Iceland, Northern Europe",
//     category: "Nature-based",
//     filterCategory: "Industrial Processing",
//     vintage: "2023",
//     registry: "Puro.earth",
//     sdg: "SDG 13",
//     type: "REDD+",
//     standard: "",
//     volume: "850K tCO2e",
//     price: "$8.50",
//     image: "/images/buyerSection5.svg",
//   },
//   {
//     title: "Soil Carbon Sequestration - Brazil",
//     location: "Mato Grosso, Brazil",
//     category: "Health",
//     filterCategory: "Blue Carbon",
//     vintage: "2022",
//     registry: "Verra VCS",
//     sdg: "SDG 15",
//     type: "Household Energy",
//     standard: "",
//     volume: "340K tCO2e",
//     price: "$18.00",
//     image: "/images/oceanProject7.svg",
//   },
//   {
//     title: "Rajasthan Solar Farm Development",
//     location: "Rajasthan, India",
//     category: "Nature-based",
//     filterCategory: "Renewable Energy",
//     vintage: "2024",
//     registry: "Gold Standard",
//     sdg: "SDG 7",
//     type: "Gold Standard",
//     standard: "",
//     volume: "850K tCO2e",
//     price: "$8.50",
//     image: "/images/windmillSection7.svg",
//   },
//   {
//     title: "Kenya Clean Cookstoves Initiative",
//     location: "Para, Brazil",
//     category: "Clean Energy",
//     filterCategory: "Energy Efficiency",
//     vintage: "2021",
//     registry: "Gold Standard",
//     sdg: "SDG 12",
//     type: "Household Energy",
//     standard: "",
//     volume: "340K tCO2e",
//     price: "$18.00",
//     image: "/images/windmillSection7.svg",
//   },
// ];

export const marketplaceProjects: MarketplaceProject[] = [
  {
    title: "Cropcity Afforestation Project of Mahogany Trees",
    location: "India",
    category: "Nature-based",
    filterCategory: "Afforestation",
    vintage: "2022",
    registry: "International Carbon Registry",
    sdg: "SDG 8, SDG 13, SDG 15",
    type: "SPOT",
    standard: "ICR",
    volume: "", // Not publicly disclosed on the ICR project page (ID: ICR172)
    price: "", // Not publicly disclosed
    image: "/projects/CropcityAfforestationProjectOfMahoganyTrees.webp",
  },
  {
    title: "Qianbei ARR",
    location: "Guizhou, China",
    category: "Nature-based",
    filterCategory: "Afforestation",
    vintage: "2021",
    registry: "Verra",
    sdg: "SDG 8, SDG 13, SDG 15",
    type: "SPOT",
    standard: "Verra VCS, CCB",
    volume: "", // Not disclosed at the row level; sheet references Verra ID 2352 / project 2082
    price: "",
    image: "/projects/QianbeiARR.png",
  },
  {
    title: "Alberami Agro Ecology (AgroEcology Italy)",
    location: "Italy",
    category: "Nature-based",
    filterCategory: "Agroecology",
    vintage: "2023",
    registry: "International Carbon Registry",
    sdg: "SDG 13, SDG 15",
    type: "SPOT",
    standard: "ICR",
    volume: "", // Alberami has scaled from 1,500 to 6,200 regenerated hectares since 2022; no fixed per-vintage tCO2e disclosed
    price: "", // 100% removal credits; no public unit price
    image: "/projects/AlberamiAgroEcology.webp",
  },
  {
    title: "Ocean Alkalinity Enhancement with Limenet",
    location: "Augusta, Sicily, Italy",
    category: "Technology-based",
    filterCategory: "Ocean Alkalinity Enhancement",
    vintage: "2024",
    registry: "CarbonMark / Isometric",
    sdg: "SDG 13, SDG 14",
    type: "SPOT 12, FORWARD 986",
    standard: "CarbonMark Direct (RINA verified)",
    volume: "14.7 tCO2e", // first issued batch; facility processing ~800 tCO2e/year, scaling to 100,000 tCO2e/year by 2028
    price: "", // priced per retirement volume on CarbonMark; no fixed public unit price
    image: "/projects/OceanAlkalinityEnhancementWithLimenet.png",
  },
  {
    title: "IOT HECTOR Water Filtration Project",
    location: "India",
    category: "Technology-based",
    filterCategory: "Community Water",
    vintage: "2024",
    registry: "Gold Standard",
    sdg: "", // Not confirmed from available sources
    type: "SPOT",
    standard: "Gold Standard",
    volume: "", // Not publicly available (ID: GS12792)
    price: "",
    image: "/projects/IOTHECTORWaterFiltrationProject.webp",
  },
  {
    title: "Sea Cave True Blue Carbon",
    location: "Isla San Martín, Baja California, Mexico",
    category: "Nature-based",
    filterCategory: "Blue Carbon",
    vintage: "2024",
    registry: "International Carbon Registry",
    sdg: "SDG 1, SDG 2, SDG 8, SDG 13, SDG 14",
    type: "SPOT",
    standard: "ICR",
    volume: "3,752 tCO2e", // expected average annual mitigation; 1,719.62 tCO2e verified in first monitoring period (Aug 2023-Jun 2024)
    price: "$200.00", // first vintage of 2,444 credits sold at $200 each
    image: "/projects/SeaCaveTrueBlueCarbon.webp",
  },
  {
    title: "Fish Reef Project / IMMB",
    location: "Baja California, Mexico / California, USA",
    category: "Nature-based",
    filterCategory: "Blue Carbon",
    vintage: "2024",
    registry: "International Carbon Registry",
    sdg: "SDG 1, SDG 2, SDG 8, SDG 13, SDG 14",
    type: "SPOT",
    standard: "ICR",
    volume: "", // Each Sea Cave unit generates ~5 verified credits/year; no separate total disclosed for this row
    price: "$200.00", // Same first-vintage pricing as the Sea Cave program it operates under
    image: "/projects/FishReefProject_IMMB.webp",
  },
  {
    title: "ECOERA Biochar Carbon Removal",
    location: "Hammenhög, Sweden",
    category: "Technology-based",
    filterCategory: "Biochar",
    vintage: "2024",
    registry: "Rainbow Standard",
    sdg: "", // Not confirmed from available sources
    type: "Removal",
    standard: "Rainbow Standard (European Biochar Certificate compliant)",
    volume: "", // Sweden ECOERA project (RIV-2025-PROJ-146) shows 248 credited on Rainbow Registry; note the sheet's linked ID (RIV-2025-PROJ-118) actually corresponds to a separate India-based Earthrevive project, not ECOERA
    price: "",
    image: "/projects/ECOERABiocharCarbonRemoval.jpg",
  },
];

export interface FilterGroup {
  id: "category" | "vintage" | "registry" | "sdg";
  title: string;
  options: string[];
}

export const filterGroups: FilterGroup[] = [
  {
    id: "category",
    title: "Category",
    options: [
      "Afforestation",
      "Agroecology",
      "Ocean Alkalinity Enhancement",
      "Community Water",
      "Blue Carbon",
      "Biochar",
    ],
  },
  {
    id: "vintage",
    title: "Vintage",
    options: ["2024", "2023", "2022", "2021"],
  },
  {
    id: "registry",
    title: "Registry",
    options: [
      "International Carbon Registry",
      "Verra",
      "CarbonMark / Isometric",
      "Gold Standard",
      "Rainbow Standard",
    ],
  },
  {
    id: "sdg",
    title: "UN SDG",
    options: ["SDG 1", "SDG 2", "SDG 8", "SDG 13", "SDG 14", "SDG 15"],
  },
];

export default filterGroups;
