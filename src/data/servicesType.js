import type1 from "../images/homeCleaning.jpg";
import type2 from "../images/ironing.jpg";
import type3 from "../images/officeCleaning.jpg";
import type4 from "../images/carWaching.jpg"

const servicesType = [
  {
    id: 0,
    photo: type1,
    serviceNum: "01",
    type: "House Cleaning",
    description:
      "Trust us to create a fresh, welcoming environment for you and your family, with attention to every detail",
  },
  {
    id: 1,
    photo: type2,
    serviceNum: "02",
    type: "Ironing",
    description:
      "We handle all garments with care, ensuring crisp, wrinkle-free results that make outfits look their best",
  },
  {
    id: 2,
    photo: type3,
    serviceNum: "03",
    type: "Office Cleaning",
    description:
      "From regular tidying to detailed deep cleans, we ensure every area is spotless and well-organized",
  },
  {
    id: 3,
    photo: type4,
    serviceNum: "04",
    type: "Car Washing",
    description:
      "We provide thorough exterior and interior cleaning, removing dirt and streaks to give your car a polished",
  },
];
export default servicesType;