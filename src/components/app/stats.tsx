import { Award, Building, Calendar, Users } from "lucide-react";

const stats = [
    { value: "1,500+", label: "Events Hosted", icon: Calendar },
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "10", label: "Grand Venues", icon: Building },
    { value: "25+", label: "Industry Awards", icon: Award },
];

export function Stats() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                             <stat.icon className="h-10 w-10 text-primary" />
                            <p className="text-3xl md:text-4xl font-bold font-headline">{stat.value}</p>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
