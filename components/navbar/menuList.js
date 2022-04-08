import CollapseMenu from "./collapseMenu"
//Get Menuitems from Layout and build the navbar menu list
export default function MenuList({ menuItems }) {
  // Flex stacks the items by sideways. For Mobile we need the items to be stacked in row
  // We use flex-grow only for large devices
  return (
    <div className="md:text-lg text-md font-bold tracking-normal ml-10 lg:ml-80 lg:flex-grow">
      {
        //A Sub function to build individual menu
        menuItems.map((menuItem) => (
          <Menu key={menuItem.menu} menuItem={menuItem} />)

        )}
    </div>
  )
}
//Sub function to build the individual menu
function Menu({ menuItem }) {
  return (
    <a href="#responsive-header" className="block mt-4 pr-8 lg:inline-block lg:mt-0 text-gray-800 hover:text-th-accent-medium mr-4">
      {menuItem.menu}
      {menuItem.subMenus ? (
        <CollapseMenu subMenus={menuItem.subMenus} />
      ) : null
      }
    </a>


  )
}