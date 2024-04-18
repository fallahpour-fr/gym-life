import { useContainer } from "./container";
import {View} from "./view";

export const HomeModule = (props:any) => {
  
      return View(useContainer(props));
}