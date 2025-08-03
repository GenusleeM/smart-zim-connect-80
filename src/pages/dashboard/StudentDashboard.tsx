import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Calendar, Award, Clock, Target, TrendingUp, Users, Star, AlertTriangle, CheckCircle2, GraduationCap } from "lucide-react";

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
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 text-white">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, Tanaka!</h1>
                <p className="text-primary-foreground/80">Ready to continue your learning journey?</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Form 4A • Harare High School</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Term 1, 2024</span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 right-8 w-20 h-20 bg-white/5 rounded-full translate-y-10"></div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950 dark:to-emerald-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Current GPA</CardTitle>
              <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-800 dark:text-emerald-200">3.7</div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">↗ +0.2 this term</p>
              <Progress value={74} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950 dark:to-blue-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Attendance Rate</CardTitle>
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-800 dark:text-blue-200">95%</div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">47 of 49 days</p>
              <Progress value={95} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950 dark:to-purple-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Today's Classes</CardTitle>
              <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-800 dark:text-purple-200">4</div>
              <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Next: Mathematics 08:00</p>
              <div className="flex gap-1 mt-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-2 w-full bg-purple-200 dark:bg-purple-800 rounded-full" />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950 dark:to-orange-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">Pending Tasks</CardTitle>
              <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-800 dark:text-orange-200">2</div>
              <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Due this week</p>
              <div className="flex items-center gap-2 mt-3">
                <AlertTriangle className="h-3 w-3 text-orange-500" />
                <span className="text-xs text-orange-600 dark:text-orange-400">1 overdue</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule and Recent Grades */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">Today's Schedule</CardTitle>
                  <CardDescription>Your classes for March 15, 2024</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayClasses.map((cls, index) => {
                  const isNext = index === 0;
                  const isPast = false;
                  return (
                    <div key={index} className={`relative flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      isNext ? 'border-primary bg-primary/5 shadow-sm' : 
                      isPast ? 'border-muted bg-muted/20 opacity-75' : 'border-border hover:border-primary/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${
                          isNext ? 'bg-primary animate-pulse' : 
                          isPast ? 'bg-muted-foreground' : 'bg-border'
                        }`}></div>
                        <div>
                          <p className="font-semibold text-foreground">{cls.subject}</p>
                          <p className="text-sm text-muted-foreground">{cls.teacher} • {cls.room}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{cls.time}</p>
                        {isNext && <Badge className="text-xs mt-1">Next</Badge>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                  <Star className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">Recent Grades</CardTitle>
                  <CardDescription>Your latest assessment results</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades.map((grade, index) => {
                  const gradeColor = grade.grade.startsWith('A') ? 'emerald' : 
                                   grade.grade.startsWith('B') ? 'blue' : 'orange';
                  return (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full bg-${gradeColor}-100 dark:bg-${gradeColor}-900 flex items-center justify-center`}>
                          <span className={`text-sm font-bold text-${gradeColor}-600 dark:text-${gradeColor}-400`}>
                            {grade.subject.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{grade.subject}</p>
                          <p className="text-sm text-muted-foreground">{grade.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold text-${gradeColor}-600 dark:text-${gradeColor}-400`}>
                          {grade.grade}
                        </div>
                        <p className="text-sm text-muted-foreground">{grade.percentage}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assignments & Achievements */}
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Assignments & Tasks</CardTitle>
                    <CardDescription>Track your homework and projects</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {assignments.filter(a => a.status === 'Pending').length} pending
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((assignment, index) => {
                  const isOverdue = assignment.status === 'Pending' && index === 0;
                  const isSubmitted = assignment.status === 'Submitted';
                  return (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      isOverdue ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950' :
                      isSubmitted ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950' :
                      'border-border hover:border-primary/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`h-2 w-2 rounded-full ${
                          isOverdue ? 'bg-red-500' :
                          isSubmitted ? 'bg-emerald-500' : 'bg-orange-500'
                        }`}></div>
                        <div>
                          <p className="font-semibold text-foreground">{assignment.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-muted-foreground">{assignment.subject}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">Due: {assignment.dueDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isSubmitted ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        ) : isOverdue ? (
                          <AlertTriangle className="h-5 w-5 text-red-500" />
                        ) : (
                          <Clock className="h-5 w-5 text-orange-500" />
                        )}
                        <Badge variant={isSubmitted ? "secondary" : isOverdue ? "destructive" : "outline"} className="text-xs">
                          {assignment.status}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                  <Award className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">Achievements</CardTitle>
                  <CardDescription>Recent accomplishments</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                  <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Perfect Attendance</p>
                    <p className="text-xs text-muted-foreground">2 weeks streak</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Grade Improvement</p>
                    <p className="text-xs text-muted-foreground">Mathematics +15%</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950">
                  <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Class Leader</p>
                    <p className="text-xs text-muted-foreground">Top 5 this term</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;