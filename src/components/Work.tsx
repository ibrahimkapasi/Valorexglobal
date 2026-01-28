"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // IMPORT THIS!

const projects = [
    {
        id: 1,
        title: "Neon Brand",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Space Xplorer",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Urban Architecture",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        title: "Future Tech",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Work() {
    return (
        <section className="bg-black py-24 px-6" id="work">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tighter"
                >
                    Selected Work
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }} // Lifts the card up slightly
                            transition={{ duration: 0.3 }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            {/* The Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill // fills the parent container
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-purple-400 font-medium">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}