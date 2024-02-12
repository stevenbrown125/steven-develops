"use client";

import { SpringValue, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { createContext, useState, ReactNode, useContext, useEffect } from "react";

interface SidebarProviderProps {
    children: ReactNode;
}

interface SidebarContextProps {
    toggleSidebar: () => void;
    isDragging: boolean;
    bind: () => void;
    width: SpringValue<number>,
}
const defaultSidebarContext: SidebarContextProps = {
    toggleSidebar: () => { },
    bind: () => { },
    width: new SpringValue(0),
    isDragging: false,
};

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [isDragging, setIsDragging] = useState(false)
    const initialWidth = 325;
    const expandThreshold = 375;
    const [{ width }, api] = useSpring(() => ({
        width: initialWidth,
        config: { tension: 210, friction: 20, easing: 100 },
    }));

    const toggleSidebar = () => {
        if (!isMaximized)
            api.start({ width: window.innerWidth, immediate: false })
        else
            api.start({ width: initialWidth, immediate: false })
        setIsMaximized(!isMaximized)
    }

    const bind = useGesture(
        {
            onDragStart: () => { setIsDragging(true); },
            onDrag: ({ movement: [mx], cancel }) => {
                const newWidth = isMaximized ? Math.min(window.innerWidth, window.innerWidth + mx) : Math.max(initialWidth, initialWidth + mx);
                api.start({ width: newWidth, immediate: true, }), { axis: 'x', threshold: 150 };;

            },
            onDragEnd: ({ movement: [mx], intentional, distance: [dx] }) => {
                setIsDragging(false)
                if (intentional && dx > 30) {
                    if (mx > expandThreshold) {
                        setIsMaximized(true)
                        api.start({ width: window.innerWidth, immediate: false })
                    }
                    else {
                        setIsMaximized(false)
                        api.start({ width: initialWidth, immediate: false })
                    }
                }
                else {
                    if (isMaximized)
                        api.start({ width: window.innerWidth, immediate: false })

                    else
                        api.start({ width: initialWidth, immediate: false })
                }
            }
        }
    );

    useEffect(() => {
        const handleResize = () => {
            if (isMaximized) {
                api.start({ width: window.innerWidth });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMaximized, api]);

    return (
        <SidebarContext.Provider value={{ toggleSidebar, bind, isDragging, width }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const SidebarContext =
    createContext<SidebarContextProps>(defaultSidebarContext);

export const useSidebar = () => useContext(SidebarContext);
