/* eslint-disable react/prop-types */
import { FaBity, FaBlackberry, FaSlidersH, FaSortAlphaDown, FaUncharted, FaVenusMars, FaVine } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const Masterlayout = ({ children }) => {
  return (
    <section className="layout">
      {/* sidebar */}
      <aside className="min-w-[250px] bg-white min-h-screen h-full fixed overflow-y-auto">
        <div className="logo px-[20px] py-[30px] flex justify-center border-b border-gray-200">
          <img src="/Img/logo-dark.png" alt="" />
        </div>

        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Navigation</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <NavLink to="/" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }
              > <FaBlackberry /> Dashboard</NavLink>
            </li>

          </ul>
        </div>
        <div className="px-[10px]  pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Slider</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <NavLink to="/create-slider" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }><FaSlidersH /> Create Slider</NavLink>
            </li>
            <li className="pb-[2px]">
              <NavLink to="/all-slider" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }><FaBity /> All Slider</NavLink>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Product</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <NavLink to="/create-product" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }><FaUncharted /> Create Product</NavLink>
            </li>
            <li className="pb-[2px]">
              <NavLink to="/all-product" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }><FaSortAlphaDown /> All Product</NavLink>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">User</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <NavLink to="/all-user" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }><FaUserGroup /> All User</NavLink>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Features</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <NavLink to="/create-feature" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }><FaVenusMars /> Create Features</NavLink>
            </li>
            <li className="pb-[2px]">
              <NavLink to="/all-feature" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }><FaVine /> All Features</NavLink>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Brand</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <NavLink to="/create-brand" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }>Create Brand</NavLink>
            </li>
            <li className="pb-[2px]">
              <NavLink to="/all-brand" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }>All Brand</NavLink>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Category</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <NavLink to="/create-category" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }>Create Category</NavLink>
            </li>
            <li className="pb-[2px]">
              <NavLink to="/all-category" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }>All Category</NavLink>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Review</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <NavLink to="/all-review" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }>All Reviews</NavLink>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Invoice & Order</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <NavLink to="/" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }>All Invoice</NavLink>
            </li>
            <li className="pb-[2px]">
              <NavLink to="/" className={(navData) =>
                navData.isActive
                  ? "link_item active"
                  : "link_item"
              }>All Order</NavLink>
            </li>
          </ul>
        </div>

      </aside>

      {/* Inner data */}
      <div className="bg-[#EBEFF2] ml-[250px] min-h-screen">
        <div className="px-[20px] pt-[10px] ">
          <div className="top bg-white px-[20px] py-[10px] rounded-md ">
            <div className="flex justify-between items-center">
              <p className="text-[20px]">Inner Dashboard</p>
              <div className="user_profile  flex items-start gap-[10px] cursor-pointer">
                <img src="/Img/avater.png" alt="" className="w-[50px]" />
                <div>
                  <p className="font-medium text-gray-700">Alex Johan</p>
                  <p>amit@demo.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[20px]">
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="ml-[250px] bg-[#EBEFF2]">
        <div className="mx-[20px] ">
          <div className=" bg-white  px-[20px] py-[20px] rounded-md ">
            <div className="flex justify-center items-center">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

      </footer>
    </section>
  )
}

export default Masterlayout