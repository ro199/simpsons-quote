import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
 
type CustomRouterTypeProp = {
  customHRef: string;
  routeTitle: string;
  customClass?: string;
};
 
export default component$<CustomRouterTypeProp>(
  ({ customHRef, routeTitle, customClass }) => {
    return (
      <li>
        <Link class={ customClass } href={ customHRef }>
          { routeTitle }
        </Link>
      </li>
    );
  }
);