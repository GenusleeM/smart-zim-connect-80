import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  BookOpen, 
  TrendingUp, 
  AlertTriangle, 
  School,
  Calendar,
  FileText,
  UserCheck,
  CreditCard,
  Bell,
  Settings,
  BarChart3,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Total Staff",
      value: "64",
      change: "+2",
      icon: GraduationCap,
      color: "text-green-600"
    },
    {
      title: "Fee Collection",
      value: "$45,230",
      change: "+8%",
      icon: DollarSign,
      color: "text-yellow-600"
    },
    {
      title: "Active Classes",
      value: "28",
      change: "+3",
      icon: BookOpen,
      color: "text-purple-600"
    }
  ];

  const recentActivities = [
    "New student enrolled: John Mukanya",
    "Fee payment received: $200 from Mary Chihota",
    "Staff leave approved: Ms. Sibanda",
    "Report cards generated for Form 4A",
    "Parent meeting scheduled for next week"
  ];

  return (
    <DashboardLayout userRole="admin" userName="Dr. Patricia Mabhena">
      <div className="space-y-8">
        {/* Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <School className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Harare High School</h1>
                  <p className="text-slate-300">Administrative Dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Term 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Week 7 of 13</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4" />
                <span>94% Attendance Today</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>87% Fee Collection</span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 right-16 w-32 h-32 bg-white/5 rounded-full translate-y-16"></div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const isPositive = stat.change.includes('+');
            const colorMap = {
              'text-blue-600': { bg: 'from-blue-50 to-blue-100/50 dark:from-blue-950 dark:to-blue-900', icon: 'bg-blue-500/20', text: 'text-blue-700 dark:text-blue-300' },
              'text-green-600': { bg: 'from-emerald-50 to-emerald-100/50 dark:from-emerald-950 dark:to-emerald-900', icon: 'bg-emerald-500/20', text: 'text-emerald-700 dark:text-emerald-300' },
              'text-yellow-600': { bg: 'from-amber-50 to-amber-100/50 dark:from-amber-950 dark:to-amber-900', icon: 'bg-amber-500/20', text: 'text-amber-700 dark:text-amber-300' },
              'text-purple-600': { bg: 'from-purple-50 to-purple-100/50 dark:from-purple-950 dark:to-purple-900', icon: 'bg-purple-500/20', text: 'text-purple-700 dark:text-purple-300' }
            };
            const colors = colorMap[stat.color as keyof typeof colorMap];
            
            return (
              <Card key={index} className={`relative overflow-hidden border-0 shadow-lg bg-gradient-to-br ${colors.bg}`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className={`text-sm font-medium ${colors.text}`}>{stat.title}</CardTitle>
                  <div className={`h-12 w-12 rounded-xl ${colors.icon} flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold mb-2 ${colors.text.replace('text-', 'text-').replace('-300', '-800').replace('-700', '-800')}`}>
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-2">
                    {isPositive ? (
                      <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                    <span className={`text-sm font-medium ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                    <span className="text-xs text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Activities Feed */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Recent Activities</CardTitle>
                    <CardDescription>Latest school operations and events</CardDescription>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const icons = [Users, CreditCard, UserCheck, FileText, Calendar];
                  const colors = ['bg-blue-100 text-blue-600', 'bg-emerald-100 text-emerald-600', 'bg-purple-100 text-purple-600', 'bg-orange-100 text-orange-600', 'bg-amber-100 text-amber-600'];
                  const IconComponent = icons[index % icons.length];
                  
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl border hover:border-primary/50 transition-colors">
                      <div className={`h-10 w-10 rounded-full ${colors[index % colors.length]} flex items-center justify-center`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{activity}</p>
                        <p className="text-sm text-muted-foreground">{Math.floor(Math.random() * 60)} minutes ago</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        New
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions & Alerts */}
          <div className="space-y-6">
            {/* Critical Alerts */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center">
                    <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Critical Alerts</CardTitle>
                    <CardDescription>Items requiring immediate attention</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-800 dark:text-red-200">Outstanding Fees</p>
                      <p className="text-xs text-red-600 dark:text-red-400">15 students • $12,450 total</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
                    <Clock className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-200">Reports Due</p>
                      <p className="text-xs text-amber-600 dark:text-amber-400">Term end reports in 5 days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                    <Bell className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Pending Applications</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">3 teacher applications</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                    <CardDescription>Common administrative tasks</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="h-12 flex-col gap-1">
                    <Users className="h-4 w-4" />
                    <span className="text-xs">Add Student</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-12 flex-col gap-1">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-xs">Add Teacher</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-12 flex-col gap-1">
                    <FileText className="h-4 w-4" />
                    <span className="text-xs">Generate Report</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-12 flex-col gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-xs">Schedule Event</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">School Performance</CardTitle>
                <CardDescription>Key indicators this term</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Attendance Rate</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Fee Collection</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Academic Performance</span>
                    <span className="font-medium">91%</span>
                  </div>
                  <Progress value={91} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;