import { BookOpen } from "lucide-react";
import { Settings } from "lucide-react";
import { UserCircle } from "lucide-react";
import { Book } from "lucide-react";
import { Home } from "lucide-react";

export const DockPages = [
  { id: 1, pageName: "Home", route: "/admin", icon: BookOpen },
  { id: 2, pageName: "Account", route: "/account", icon: UserCircle },
  { id: 3, pageName: "Settings", route: "/settings", icon: Settings },
];
