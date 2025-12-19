import { NavLink } from "react-router-dom"
import { type ReactNode } from "react"

interface NavItemProps {
    to: string
    icon: ReactNode
    label: string

}

export default function NavItem({ to, icon, label }: NavItemProps){
    return(
        <NavLink
            to={to}
            className={({ isActive }) => 

                 `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition
                 ${
                 isActive
                 ? "bg-muted font-medium text-foreground"
                 : "text-muted-foreground hover:bg-muted hover:text-foreground"
                 }`
            }
            >
            {icon}
            <span>{label}</span>
        
        </NavLink>
    )
}