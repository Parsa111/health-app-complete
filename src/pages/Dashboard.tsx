import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
    Calendar, 
    Clock, 
    User, 
    Mail, 
    CreditCard, 
    Package,
    ArrowLeft,
    CheckCircle2,
    CalendarDays
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Booking {
    id: string;
    name: string;
    email: string;
    package: string;
    date: string;
    time: string;
    price: string;
    status: 'paid' | 'pending';
    timestamp: number;
}

const Dashboard = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        const savedBookings = JSON.parse(localStorage.getItem("medically_fit_bookings") || "[]");
        // Sort by timestamp descending
        setBookings(savedBookings.sort((a: Booking, b: Booking) => b.timestamp - a.timestamp));
    }, []);

    return (
        <main className="pt-24 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold font-display mb-2">Booking Dashboard</h1>
                        <p className="text-muted-foreground">Monitor and manage your recent session bookings.</p>
                    </div>
                    <Button variant="outline" onClick={() => navigate('/')} className="rounded-full">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back to Home
                    </Button>
                </div>

                {bookings.length === 0 ? (
                    <Card className="p-12 text-center border-dashed border-2">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                            <CalendarDays className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">No Bookings Yet</h2>
                        <p className="text-muted-foreground mb-8">Once you make a booking, it will appear here.</p>
                        <Button onClick={() => navigate('/booking')} className="rounded-full px-8">
                            Book Your First Session
                        </Button>
                    </Card>
                ) : (
                    <div className="grid gap-6">
                        {bookings.map((booking) => (
                            <motion.div
                                key={booking.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-border">
                                    <CardHeader className="bg-muted/30 pb-4">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 hero-gradient rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold">{booking.name.charAt(0)}</span>
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg">{booking.name}</CardTitle>
                                                    <CardDescription className="flex items-center gap-1">
                                                        <Mail className="w-3 h-3" />
                                                        {booking.email}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Badge variant={booking.status === 'paid' ? 'default' : 'secondary'} className="px-3 py-1">
                                                    {booking.status === 'paid' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                                                    {booking.status.toUpperCase()}
                                                </Badge>
                                                <span className="text-xl font-bold text-primary">C${booking.price}</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                                    <Package className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Package</p>
                                                    <p className="font-bold">{booking.package}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                                    <Calendar className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Date</p>
                                                    <p className="font-bold">{booking.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Time</p>
                                                    <p className="font-bold">{booking.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default Dashboard;
