import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, DollarSign, BookOpen, TrendingUp, AlertTriangle } from "lucide-react";

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
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">School Overview</h1>
          <p className="text-muted-foreground">Manage your school operations efficiently</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activities and Alerts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Activities
              </CardTitle>
              <CardDescription>Latest school activities and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{activity}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Alerts & Notifications
              </CardTitle>
              <CardDescription>Important items requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">15 students with outstanding fees</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Term end reports due in 5 days</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">3 new teacher applications pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;