import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar as CalendarIcon,
    Clock,
    CreditCard,
    CheckCircle2,
    ChevronRight,
    ArrowLeft,
    ShieldCheck,
    Mail,
    User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";
import emailjs from '@emailjs/browser';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

// Initialize Stripe using the publishable key from environmental variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "");

const CheckoutForm = ({ amount, bookingData, onClear }: {
    amount: string;
    bookingData: { name: string; email: string; package: string; date: string; time: string };
    onClear: () => void
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessing(true);

        // Simulation of payment for testing
        setTimeout(async () => {
            // Send email via EmailJS
            try {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        to_name: bookingData.name,
                        to_email: bookingData.email,
                        package_name: bookingData.package,
                        booking_date: bookingData.date,
                        booking_time: bookingData.time,
                        amount: amount
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );
            } catch (error) {
                console.error("Email failed to send:", error);
            }

            setIsProcessing(false);
            setIsSuccess(true);
            toast.success("Payment successful! Your booking is confirmed.");
        }, 2000);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Booking Confirmed!</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                    Check your email for the preparation details and calendar invitation.
                </p>
                <Button size="lg" className="rounded-full px-8" onClick={onClear}>
                    Done
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
                <Label className="text-sm font-bold uppercase tracking-wider">Card Details</Label>
                <div className="p-4 rounded-xl bg-background border border-border">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={!stripe || isProcessing}
                className="w-full h-14 text-lg font-bold uppercase tracking-widest rounded-2xl"
            >
                {isProcessing ? "Processing..." : `Pay ${amount}`}
            </Button>

            <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Secure Payment Powered by Stripe
            </p>
        </form>
    );
};

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [time, setTime] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        package: location.state?.packageName || "Standard Consultation",
        price: location.state?.price || "150.00"
    });

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const nextStep = () => {
        if (step === 1 && (!date || !time)) {
            toast.error("Please select a date and time");
            return;
        }
        if (step === 2 && (!formData.name || !formData.email)) {
            toast.error("Please fill in all contact details");
            return;
        }
        setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    return (
        <main className="pt-24 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <Button
                        variant="ghost"
                        onClick={() => step > 1 ? prevStep() : navigate(-1)}
                        className="group"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back
                    </Button>
                    <div className="flex gap-2">
                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={cn(
                                    "w-12 h-1.5 rounded-full transition-all duration-500",
                                    step >= s ? "bg-primary" : "bg-muted"
                                )}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side: Steps */}
                    <div className="lg:col-span-12 space-y-8">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-card p-8 md:p-12 rounded-[2.5rem] card-shadow border border-border"
                                >
                                    <div className="mb-8">
                                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4 px-4 py-1">Step 1</Badge>
                                        <h2 className="text-4xl font-bold font-display">Select Date & Time</h2>
                                        <p className="text-muted-foreground mt-2">Choose a convenient slot for your session.</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div>
                                            <Label className="text-sm font-bold uppercase tracking-widest mb-4 block">Calendar</Label>
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                className="rounded-2xl border border-border shadow-sm p-4"
                                                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                                            />
                                        </div>
                                        <div className="space-y-6">
                                            <Label className="text-sm font-bold uppercase tracking-widest mb-4 block">Available Times</Label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {timeSlots.map((t) => (
                                                    <button
                                                        key={t}
                                                        onClick={() => setTime(t)}
                                                        className={cn(
                                                            "p-4 rounded-xl border text-sm font-bold transition-all",
                                                            time === t
                                                                ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                                                                : "bg-muted/20 border-border hover:border-primary/50 text-foreground"
                                                        )}
                                                    >
                                                        {t}
                                                    </button>
                                                ))}
                                            </div>

                                            {date && time && (
                                                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
                                                    <p className="text-sm font-bold text-primary uppercase">Your Selection:</p>
                                                    <p className="text-lg font-bold flex items-center gap-2">
                                                        <CalendarIcon className="w-5 h-5" />
                                                        {format(date, "EEEE, MMMM do")}
                                                    </p>
                                                    <p className="text-lg font-bold flex items-center gap-2">
                                                        <Clock className="w-5 h-5" />
                                                        {time}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <Button size="lg" className="w-full mt-12 h-14 text-lg font-bold uppercase tracking-widest rounded-2xl" onClick={nextStep}>
                                        Continue to Details
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-card p-8 md:p-12 rounded-[2.5rem] card-shadow border border-border"
                                >
                                    <div className="mb-8">
                                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4 px-4 py-1">Step 2</Badge>
                                        <h2 className="text-4xl font-bold font-display">Personal Details</h2>
                                        <p className="text-muted-foreground mt-2">Information for your assessment.</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <Label htmlFor="name" className="text-sm font-bold uppercase tracking-widest">Full Name</Label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                    <Input
                                                        id="name"
                                                        placeholder="John Doe"
                                                        className="pl-12 h-14 rounded-xl border-border bg-muted/20 focus:ring-primary"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <Label htmlFor="email" className="text-sm font-bold uppercase tracking-widest">Email Address</Label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        className="pl-12 h-14 rounded-xl border-border bg-muted/20 focus:ring-primary"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 rounded-[2rem] bg-accent/30 border border-primary/10">
                                            <h4 className="font-bold text-xl mb-4">Summary</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center text-muted-foreground">
                                                    <span>Selected Package:</span>
                                                    <span className="text-foreground font-bold">{formData.package}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-muted-foreground">
                                                    <span>Session Time:</span>
                                                    <span className="text-foreground font-bold">{format(date!, "MMM do")} at {time}</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-3 border-t border-border">
                                                    <span className="text-foreground font-bold">Total Amount:</span>
                                                    <span className="text-2xl font-bold text-primary">C${formData.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Button size="lg" className="w-full mt-12 h-14 text-lg font-bold uppercase tracking-widest rounded-2xl" onClick={nextStep}>
                                        Proceed to Payment
                                        <CreditCard className="ml-2 w-5 h-5" />
                                    </Button>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-card p-8 md:p-12 rounded-[2.5rem] card-shadow border border-border max-w-2xl mx-auto"
                                >
                                    <div className="mb-8 text-center">
                                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4 px-4 py-1">Step 3</Badge>
                                        <h2 className="text-4xl font-bold font-display">Secure Payment</h2>
                                        <p className="text-muted-foreground mt-2">Complete your booking with Stripe.</p>
                                    </div>

                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm
                                            amount={`C$${formData.price}`}
                                            bookingData={{
                                                ...formData,
                                                date: date ? format(date, "EEEE, MMMM do") : "",
                                                time: time
                                            }}
                                            onClear={() => navigate('/')}
                                        />
                                    </Elements>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Booking;
