import { Link, NavLink } from "react-router-dom";
import { SiAlltrails } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 text-md text-white bg-blue m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg   text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div
      className="ml-3 h-screen
     md:overflow-hidden-auto 
     md:hover:overflow-auto pd-10"
    >
      {activeMenu && (
        <>
          <div
            className="flex justify-between 
          items-center"
          >
            <Link
              to="/"
              onClick={() => {}}
              className="item-center gap-3
            ml-3 mt-4 flex text-xl font-extrabold tracking-tighter
             dark:text-white text-slate-900 "
            >
              <SiAlltrails />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevState) => !prevState)}
                className="text-xl rounded-full p-3
               hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-100">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`${link.name}`}
                    key={link.name}
                    onCanPlay={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize"> {link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
