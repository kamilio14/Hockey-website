import Amelia from "./pictures/amelia.jpeg";
import { SearchComponent } from "./search-component";

export const MainContainerRight = () => {
  return (
    <div className="main-container-right">
      <img src={Amelia} className="pic-amelia" />
      <SearchComponent />
    </div>
  );
};
