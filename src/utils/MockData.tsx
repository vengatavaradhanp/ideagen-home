import {
  BarChartOutlined,
  HubOutlined,
  PentagonOutlined,
  ReviewsOutlined,
} from "@mui/icons-material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";

export const ProductsMockData = [
  {
    id: 1,
    name: "Academy",
    badge: "Learning Management",
    body: "E-Learning management softwares for maximincy",
    icon: <LanguageOutlinedIcon className="iconFont42" />,
  },
  {
    id: 2,
    name: "Coruson",
    badge: "Risk Management",
    body: "safety and operational risk management software",
    icon: <BarChartOutlined className="iconFont42" />,
  },
  {
    id: 3,
    name: "Huddle",
    badge: "Collaboration Management",
    body: "Collaboration software for regulated documents",
    icon: <HubOutlined className="iconFont40" />,
  },
  {
    id: 4,
    name: "Pentana",
    badge: "Audit Management",
    body: "Audit management softwares for internal teams",
    icon: <PentagonOutlined className="iconFont42" />,
  },
  {
    id: 5,
    name: "OpsBase",
    badge: "Process Management",
    body: "Self-service process management softwares",
    icon: <ReviewsOutlined className="iconFont42" />,
  },
  {
    id: 6,
    name: "PleaseReview",
    badge: "Learning Management",
    body: "E-Learning softwares for maximincy. E-Learning softwares for maximincy",
    icon: <ReviewsOutlined className="iconFont42" />,
  },
  {
    id: 7,
    name: "Q-Pulse",
    badge: "Learning Management",
    body: "E-Learning softwares for maximincy. E-Learning softwares for maximincy",
    icon: <InvertColorsOutlinedIcon className="iconFont42" />,
  },
  {
    id: 8,
    name: "Q-Pulse*PM",
    badge: "Learning Management",
    body: "E-Learning softwares for maximincy. E-Learning softwares for maximincy",
    icon: <InvertColorsOutlinedIcon className="iconFont42" />,
  },
  {
    id: 9,
    name: "Q-Pulse*Law",
    badge: "Product Object Management",
    body: "E-Learning softwares for maximincy. E-Learning softwares for maximincy",
    icon: <InvertColorsOutlinedIcon className="iconFont42" />,
  },
  {
    id: 10,
    name: "WorkRite",
    badge: "E-Learning Management",
    body: "E-Learning for workplace training. E-Learning softwares for maximincy",
    icon: <InvertColorsOutlinedIcon className="iconFont42" />,
  },
];

export const carouselSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  cssEase: "linear",
};

export const carouselMockData = [{}, {}, {}];