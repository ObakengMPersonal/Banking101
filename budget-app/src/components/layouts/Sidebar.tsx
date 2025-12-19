import NavItem from "../common/NavItem"
import{
    Home,
    LayoutDashboard,
    CreditCard,
    TrendingUp,
    BarChart3,
    PiggyBank,
    Settings,
    HelpCircle,
} from "lucide-react"

export default function Sidebar(){
    return(
        <aside className="w-64 border-r bg-background p-4 flex flex-col">
            {/* Brand */}
            <div className="mb-6 text-lg font-semibold">
                Budget App
            </div>

            {/*Navigation*/}
            <nav className="flex-1 space-y-1">
                <NavItem to="/Dashboard" icon={<LayoutDashboard size={18}/>} label="Dashboard" />
                <NavItem to="/income" icon={<TrendingUp size={18} />} label="Income" />
                <NavItem to="/expense" icon={<CreditCard size={18} />} label="Expense" />
                <NavItem to="/cards" icon={<PiggyBank size={18} />} label="Cards" />
                <NavItem to="/reports" icon={<BarChart3 size={18} />} label="Reports" />
                <NavItem to="/forecast" icon={<Home size={18} />} label="Forecast" />
            </nav>

            {/* Footer */}
            <div className="pt-4 border-t space-y-1">
                <NavItem to="/settings" icon={<Settings size={18} />} label="Settings" />
                <NavItem to="/support" icon={<HelpCircle size={18} />} label="Support" />
            </div>
      </aside>
    )
}