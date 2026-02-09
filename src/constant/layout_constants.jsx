import { BookOpen } from "lucide-react";
import { Settings } from "lucide-react";
import { UserCircle } from "lucide-react";

export const DockPages = [
    { id: 1, pageName: "Home", route: "/admin", icon: BookOpen },
    { id: 2, pageName: "Account", route: "/admin/account", icon: UserCircle },
    { id: 3, pageName: "Settings", route: "/admin/settings", icon: Settings },
];
