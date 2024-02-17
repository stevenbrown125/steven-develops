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
    width: SpringValue<number>;
    isVisible: boolean;
    isMaximized: boolean;
    closeSidebar: () => void;
}

const defaultSidebarContext: SidebarContextProps = {
    toggleSidebar: () => { },
    bind: () => { },
    width: new SpringValue(0),
    isVisible: true,
    isDragging: false,
    isMaximized: false,
    closeSidebar: () => { },
};

export const SidebarContext =
    createContext<SidebarContextProps>(defaultSidebarContext);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
    const MIN_WINDOW_BREAKPOINT = 640;
    const WINDOW_BREAKPOINT = 1536;
    const SIDEBAR_MIN_WIDTH = 325;
    const SIDEBAR_MAX_WIDTH = 550;
    const SCROLL_BAR_WIDTH = 5;
    const [isVisible, setIsVisible] = useState(true); /* Used to only when going from mobile to nonmobile */
    const [isMaximized, setIsMaximized] = useState(false); /* Used to toggle between nonmobile viewPoints */
    const [isDragging, setIsDragging] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); /* Used to prevent snappiness resulted from going full screen */

    const [{ width }, api] = useSpring(() => ({
        width: SIDEBAR_MIN_WIDTH,
        config: { tension: 210, friction: 20 },
    }));

    const getSidebarWidth = (viewWidth: number) => {
        return viewWidth > WINDOW_BREAKPOINT ? SIDEBAR_MAX_WIDTH : SIDEBAR_MIN_WIDTH
    }

    const toggleSidebar = () => {
        const viewWidth = document.documentElement.clientWidth
        /* Needs to handle this differently depending on the window size */
        if (viewWidth > MIN_WINDOW_BREAKPOINT) { /* Desktop */
            if (!isMaximized) /* We need to maximize it */
                maximizeSidebar(viewWidth)
            else
                minimizeSidebar(viewWidth)
        } else { /* handle for mobile */
            if (isVisible) {
                closeSidebar();
            } else {
                openSidebar();
            }
        }
    }

    const maximizeSidebar = (viewWidth: number) => {
        setIsAnimating(true)
        api.start({
            width: viewWidth,
            immediate: false,
            onRest: () => setIsAnimating(false),
        })
        setIsMaximized(true)
    }

    const minimizeSidebar = (viewWidth: number) => {
        setIsMaximized(false)
        if (viewWidth > WINDOW_BREAKPOINT)
            api.start({ width: SIDEBAR_MAX_WIDTH, immediate: false })
        else
            api.start({ width: SIDEBAR_MIN_WIDTH, immediate: false })
    }

    const updateSidebar = (viewWidth: number) => {
        if (isMaximized) {
            if (!isAnimating)
                api.start({ width: viewWidth, immediate: true })
        } else if (viewWidth >= MIN_WINDOW_BREAKPOINT - SCROLL_BAR_WIDTH) {
            minimizeSidebar(viewWidth)
        } else {
            closeSidebar()
        }
    }

    const closeSidebar = () => {
        api.start({ width: 0 });
        setIsVisible(false)
    }

    const openSidebar = () => {
        const viewWidth = document.documentElement.clientWidth
        setIsVisible(true)
        minimizeSidebar(viewWidth)
    }

    const bind = useGesture(
        {
            onDragStart: () => { setIsDragging(true); },
            onDrag: ({ movement: [mx] }) => {
                const viewWidth = window.innerWidth
                const sidebarWidth = getSidebarWidth(viewWidth)
                const newWidth = isMaximized ? Math.min(viewWidth, viewWidth + mx) : Math.max(sidebarWidth, sidebarWidth + mx);
                api.start({ width: newWidth, immediate: true, }), { axis: 'x', threshold: 150 };;
            },

            onDragEnd: ({ movement: [mx], intentional, distance: [dx] }) => {
                setIsDragging(false)
                const viewWidth = window.innerWidth
                const sidebarWidth = getSidebarWidth(viewWidth)
                if (intentional && dx > 30) {
                    if (mx > sidebarWidth + 50) {
                        maximizeSidebar(viewWidth)
                    } else {
                        setIsMaximized(false)
                        api.start({ width: sidebarWidth, immediate: false })
                    }
                } else { /* Wasn't intentional so reset sidebar state */
                    if (isMaximized)
                        api.start({ width: viewWidth, immediate: false })
                    else
                        api.start({ width: sidebarWidth, immediate: false })
                }
            }
        }
    );

    useEffect(() => {
        const handleResize = () => {
            const viewWidth = document.documentElement.clientWidth
            if (isVisible) {
                updateSidebar(viewWidth)
            } else {
                if (viewWidth > MIN_WINDOW_BREAKPOINT) openSidebar()
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isVisible, isMaximized]);

    return (
        <SidebarContext.Provider value={{ toggleSidebar, bind, isDragging, width, isMaximized, isVisible, closeSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};


export const useSidebar = () => useContext(SidebarContext);
