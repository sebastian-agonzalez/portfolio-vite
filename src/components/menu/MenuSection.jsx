import ActionBar from "../action-bar/ActionBar";
import FadingRoute from "../animated-route/FadingRoute";

const MenuSection = () => {
  return (
    <FadingRoute ckey={"menu"} directionY={300}>
      <section>
        <ActionBar locationpathname={"/"} />
      </section>
    </FadingRoute>
  );
};

export default MenuSection;
