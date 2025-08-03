import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  DollarSign, 
  Calendar, 
  Settings, 
  LogOut,
  Menu,
  X,
  BookOpen,
  ClipboardList,
  Bell,
  Home
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: "admin" | "teacher" | "parent" | "student";
  userName: string;
}

const DashboardLayout = ({ children, userRole, userName }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const getMenuItems = () => {
    const commonItems = [
      { icon: LayoutDashboard, label: "Dashboard", href: `/dashboard/${userRole}` },
    ];

    switch (userRole) {
      case "admin":
        return [
          ...commonItems,
          { icon: Users, label: "Students", href: "/students" },
          { icon: GraduationCap, label: "Teachers", href: "/teachers" },
          { icon: BookOpen, label: "Classes", href: "/classes" },
          { icon: DollarSign, label: "Fees", href: "/fees" },
          { icon: Calendar, label: "Calendar", href: "/calendar" },
          { icon: ClipboardList, label: "Reports", href: "/reports" },
          { icon: Settings, label: "Settings", href: "/settings" },
        ];
      case "teacher":
        return [
          ...commonItems,
          { icon: BookOpen, label: "My Classes", href: "/my-classes" },
          { icon: Users, label: "Students", href: "/students" },
          { icon: ClipboardList, label: "Attendance", href: "/attendance" },
          { icon: Calendar, label: "Schedule", href: "/schedule" },
          { icon: Settings, label: "Profile", href: "/profile" },
        ];
      case "parent":
        return [
          ...commonItems,
          { icon: Users, label: "My Children", href: "/children" },
          { icon: DollarSign, label: "Fees", href: "/fees" },
          { icon: ClipboardList, label: "Reports", href: "/reports" },
          { icon: Calendar, label: "Events", href: "/events" },
          { icon: Bell, label: "Messages", href: "/messages" },
        ];
      case "student":
        return [
          ...commonItems,
          { icon: Calendar, label: "Schedule", href: "/schedule" },
          { icon: ClipboardList, label: "Grades", href: "/grades" },
          { icon: BookOpen, label: "Assignments", href: "/assignments" },
          { icon: Bell, label: "Notices", href: "/notices" },
        ];
      default:
        return commonItems;
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const menuItems = getMenuItems();

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-primary">SmartSchool ZW</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3 mb-3">
            <Avatar>
              <AvatarFallback>
                {userName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">{userName}</p>
              <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top header */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex-1" />
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;