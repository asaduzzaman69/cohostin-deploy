const Dropdown = ({children}) => {
    return (
        <ul className="dropdown-menu menu-renters dropdown-menu-quarter-top" aria-labelledby="dropdownMenuLink">
            {children}
       </ul>
    );
}

export const DropdownItem = ({label, description}) => {

    return (
        <li>
            <a className="dropdown-item item-turquoise" href="tel:18019003003">
                <span className="item-title title-deposit text-turquoise">{label}</span>
                <span className="item-description">{description}</span>
            </a>
        </li>
  
    )
}

export default Dropdown;