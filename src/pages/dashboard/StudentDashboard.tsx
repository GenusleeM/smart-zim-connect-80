import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, Award, Clock, Target } from "lucide-react";

const StudentDashboard = () => {
  const todayClasses = [
    { time: "08:00 - 08:40", subject: "Mathematics", teacher: "Ms. Chiweshe", room: "Room 12" },
    { time: "09:00 - 09:40", subject: "English", teacher: "Mr. Mazvita", room: "Room 8" },
    { time: "10:00 - 10:40", subject: "Biology", teacher: "Dr. Kambarami", room: "Lab 1" },
    { time: "14:00 - 14:40", subject: "History", teacher: "Mrs. Moyo", room: "Room 5" }
  ];

  const recentGrades = [
    { subject: "Mathematics", grade: "A", percentage: "89%", date: "10 Mar 2024" },
    { subject: "English", grade: "B+", percentage: "82%", date: "8 Mar 2024" },
    { subject: "Biology", grade: "A-", percentage: "85%", date: "5 Mar 2024" },
    { subject: "Physics", grade: "B", percentage: "78%", date: "3 Mar 2024" }
  ];

  const assignments = [
    { subject: "Mathematics", title: "Quadratic Equations", dueDate: "18 Mar 2024", status: "Pending" },
    { subject: "English", title: "Essay on Climate Change", dueDate: "20 Mar 2024", status: "Submitted" },
    { subject: "Biology", title: "Lab Report - Photosynthesis", dueDate: "22 Mar 2024", status: "Pending" }
  ];

  return (
    <DashboardLayout userRole="student" userName="Tanaka Mukanya">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Portal</h1>
          <p className="text-muted-foreground">Track your academic progress and schedule</p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GPA</CardTitle>
              <Award className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.7</div>
              <p className="text-xs text-muted-foreground">Current semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <Target className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">This term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Classes</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Scheduled</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Work</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Assignments due</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule and Recent Grades */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your classes for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todayClasses.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{cls.subject}</p>
                      <p className="text-sm text-muted-foreground">{cls.teacher} • {cls.room}</p>
                    </div>
                    <div className="text-sm font-medium">{cls.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Grades</CardTitle>
              <CardDescription>Your latest assessment results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{grade.subject}</p>
                      <p className="text-sm text-muted-foreground">{grade.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{grade.grade}</p>
                      <p className="text-sm text-muted-foreground">{grade.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Assignments
            </CardTitle>
            <CardDescription>Your current and upcoming assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {assignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{assignment.title}</p>
                    <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Due: {assignment.dueDate}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      assignment.status === 'Submitted' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;