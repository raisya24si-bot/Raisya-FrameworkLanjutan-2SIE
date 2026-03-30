import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import Typhography from "./Typhography";
import './tailwind.css';
import FlexboxGrid from "./FlexboxGrid";
import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/>
            <Typhography/>     
            <FlexboxGrid/>
            <UserForm/>  
            <HitungGajiForm/>   
        </div>
    )