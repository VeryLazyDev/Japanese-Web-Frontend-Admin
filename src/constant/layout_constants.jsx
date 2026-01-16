import { BookOpen } from "lucide-react";
import { Settings } from "lucide-react";
import { UserCircle } from "lucide-react";
import { Book } from "lucide-react";
import { Home } from "lucide-react";

export const DockPages = [
    { id: 1, pageName: "HOME", route: "/", icon: BookOpen },
    { id: 2, pageName: "ACCOUNT", route: "/account", icon: UserCircle },
    { id: 3, pageName: "SETTINGS", route: "/settings", icon: Settings },
];
