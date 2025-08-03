import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, DollarSign, BookOpen, Calendar, Bell } from "lucide-react";

const ParentDashboard = () => {
  const children = [
    { name: "Tanaka Mukanya", class: "Form 4A", fees: "Paid", attendance: "95%" },
    { name: "Chipo Mukanya", class: "Form 2B", fees: "Outstanding", attendance: "92%" }
  ];

  const upcomingEvents = [
    { event: "Parent-Teacher Meeting", date: "15 Mar 2024", time: "2:00 PM" },
    { event: "Sports Day", date: "22 Mar 2024", time: "9:00 AM" },
    { event: "Term End Exams", date: "1 Apr 2024", time: "8:00 AM" }
  ];

  const recentNotices = [
    "School fees for Term 2 are now due",
    "New COVID-19 safety protocols in place",
    "Library books must be returned by March 20th",
    "School uniforms available at the uniform shop"
  ];

  return (
    <DashboardLayout userRole="parent" userName="Mr. Mukanya">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Parent Portal</h1>
          <p className="text-muted-foreground">Stay connected with your children's education</p>
        </div>

        {/* Children Overview */}
        <div className="grid gap-4 md:grid-cols-2">
          {children.map((child, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {child.name}
                </CardTitle>
                <CardDescription>Class: {child.class}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Fee Status</p>
                    <p className={`text-sm ${child.fees === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                      {child.fees}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Attendance</p>
                    <p className="text-sm text-green-600">{child.attendance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Fees</CardTitle>
              <DollarSign className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">$150</div>
              <p className="text-xs text-muted-foreground">Due: March 31st</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">B+</div>
              <p className="text-xs text-muted-foreground">Last term average</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Event</CardTitle>
              <Calendar className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Days until P-T meeting</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
              <Bell className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">From teachers</p>
            </CardContent>
          </Card>
        </div>

        {/* Events and Notices */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Important school events and dates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{event.event}</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                    <div className="text-sm font-medium">{event.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Notices</CardTitle>
              <CardDescription>Latest announcements from the school</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentNotices.map((notice, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{notice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ParentDashboard;