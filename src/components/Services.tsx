"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Globe, Palette } from "lucide-react"; // Importing specific icons

// 1. The Data (Our Array)
const services = [
    {
        title: "Web Development",
        description: "High-performance websites built with Next.js and React.",
        icon: <Globe className="w-8 h-8 text-purple-500" />,
    },
    {
        title: "UI/UX Design",
        description: "Modern aesthetics combined with intuitive user flows.",
        icon: <Palette className="w-8 h-8 text-pink-500" />,
    },
    {
        title: "SEO Optimization",
        description: "Ranking your brand at the top of search engines.",
        icon: <Rocket className="w-8 h-8 text-blue-500" />,
    },
    {
        title: "Custom Solutions",
        description: "Tailored software to solve your unique business problems.",
        icon: <Code className="w-8 h-8 text-green-500" />,
    },
];

// 2. The Animation Variant (Stagger Effect)
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // This makes items appear one after another
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function Services() {
    return (
        <section className="bg-black py-24 px-6" id="services">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }} // Animates when you scroll to it
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We don't just write code; we build digital assets that drive revenue.
                    </p>
                </motion.div>

                {/* 3. The Loop (Mapping) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                          // THE KEY PROP IS CRITICAL HERE
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl cursor-pointer hover:border-purple-500/50 transition-colors"
                        >
                            <div className="mb-4 bg-white/10 w-14 h-14 rounded-full flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}