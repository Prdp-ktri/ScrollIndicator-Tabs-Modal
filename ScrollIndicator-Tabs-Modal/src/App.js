import ScrollIndicator from "./components/scroll-indicator/index";
import "./styles.css";

export default function MenuList({ list = [] }) {
  return (
    // <ul className="menu-list-container">
    //   {list && list.length
    //     ? list.map((listItem) => <MenuItem item={listItem} />)
    //     : null}
    // </ul>
    // <QRCodeGenerator/>
    // <LightDarkMode />
    <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
  );
}
