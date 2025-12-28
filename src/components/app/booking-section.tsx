"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { DatePicker } from "@/components/ui/date-picker"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { halls } from "@/lib/data"
import { IndianRupee } from 'lucide-react'

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  eventDate: z.date({ required_error: "Please select a date." }),
  hall: z.string({ required_error: "Please select a hall." }),
  guests: z.coerce.number().min(1, "At least 1 guest is required"),
});

const paymentSchema = z.object({
  cardNumber: z.string().length(16, "Card number must be 16 digits").regex(/^\d+$/, "Card number must only contain digits"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date (MM/YY)"),
  cvc: z.string().length(3, "CVC must be 3 digits").regex(/^\d+$/, "CVC must only contain digits"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isPaymentDialogOpen, setPaymentDialogOpen] = useState(false)
  const [bookingDetails, setBookingDetails] = useState<BookingFormValues | null>(null);
  const { toast } = useToast()

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: 100,
    }
  })

  const paymentForm = useForm({
    resolver: zodResolver(paymentSchema),
  });

  function onSubmit(data: BookingFormValues) {
    setBookingDetails(data);
    setPaymentDialogOpen(true)
  }

  function onPaymentSubmit() {
    toast({
      title: "Booking Confirmed!",
      description: "Your event is booked. We will contact you shortly.",
    })
    setPaymentDialogOpen(false)
    form.reset()
    paymentForm.reset()
  }

  const selectedHall = halls.find(h => h.id === form.watch('hall'));
  const totalCost = selectedHall ? selectedHall.price : 0;

  return (
    <>
      <section id="booking" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-10">
            Book Your Event
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Request a Booking</CardTitle>
                    <CardDescription>Fill out the form below to request a booking. We'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                        </div>
                        <FormField control={form.control} name="hall" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select a Hall</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl><SelectTrigger><SelectValue placeholder="Choose a venue" /></SelectTrigger></FormControl>
                                    <SelectContent>
                                        {halls.map(hall => <SelectItem key={hall.id} value={hall.id}>{hall.name}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField control={form.control} name="eventDate" render={({ field }) => (
                                <FormItem><FormLabel>Event Date</FormLabel><FormControl><DatePicker date={field.value} setDate={field.onChange} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="guests" render={({ field }) => (
                                <FormItem><FormLabel>Number of Guests</FormLabel><FormControl><Input type="number" placeholder="100" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                        </div>
                        <Button type="submit" size="lg" className="w-full">Request Booking</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <div className="flex flex-col items-center gap-4">
                <p className="text-lg text-center text-muted-foreground">Check our availability at a glance. Dates in grey are unavailable.</p>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-lg bg-card"
                    disabled={(date) => date < new Date() || date.getDate() % 5 === 0}
                />
            </div>
          </div>
        </div>
      </section>
      
      <Dialog open={isPaymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">Complete Your Booking</DialogTitle>
            <DialogDescription>
                Please provide dummy payment details to confirm your booking for the {selectedHall?.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4 flex justify-between items-center">
                <span className="font-semibold">Total Amount</span>
                <span className="font-bold text-xl flex items-center gap-1"><IndianRupee size={20} />{totalCost.toLocaleString('en-IN')}</span>
            </div>
             <Form {...paymentForm}>
              <form onSubmit={paymentForm.handleSubmit(onPaymentSubmit)} className="space-y-4">
                <FormField control={paymentForm.control} name="cardNumber" render={({ field }) => (
                    <FormItem><FormLabel>Card Number</FormLabel><FormControl><Input placeholder="1111222233334444" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <div className="grid grid-cols-2 gap-4">
                    <FormField control={paymentForm.control} name="expiry" render={({ field }) => (
                        <FormItem><FormLabel>Expiry Date</FormLabel><FormControl><Input placeholder="12/28" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={paymentForm.control} name="cvc" render={({ field }) => (
                        <FormItem><FormLabel>CVC</FormLabel><FormControl><Input placeholder="123" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                </div>
                <Button type="submit" className="w-full" size="lg">Pay Now</Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
