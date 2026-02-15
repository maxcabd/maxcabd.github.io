"use client";

import { useEffect, useState } from "react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

export function TableOfContents() {
    const [headings, setHeadings] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll(
                "article h1[id], article h2[id], article h3[id]"
            )
        );

        const items: TocItem[] = elements.map((el) => ({
            id: el.id,
            text: el.textContent || "",
            level: el.tagName === "H1" ? 1 : el.tagName === "H2" ? 2 : 3,
        }));

        setHeadings(items);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-80px 0px -80% 0px" }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    if (headings.length === 0) return null;

    return (
        <nav>
            <p className="text-[11px] text-warm tracking-[0.2em] uppercase mb-4 font-medium">
                On this page
            </p>
            <ul className="space-y-2 border-l border-warm/20 max-h-[calc(100vh-10rem)] overflow-y-auto">
                {headings.map((heading) => (
                    <li key={heading.id}>
                        <a
                            href={`#${heading.id}`}
                            className={`block text-[13px] leading-snug transition-colors duration-200 border-l -ml-px py-1 ${heading.level === 3 ? "pl-6" : "pl-4"
                                } ${activeId === heading.id
                                    ? "text-white border-white"
                                    : "text-warm border-transparent hover:text-white hover:border-warm"
                                }`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}