import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react"

interface UIStateContextType {
  sortingStates: SortingState
  toggleSortingOrder: (slug: string) => void
}

interface SortingState {
  [slug: string]: boolean // Using an object to store sorting state: true for asc, false for desc
}

const UIStateContext = createContext<UIStateContextType | undefined>(undefined)

export const useUIState = () => {
  const context = useContext(UIStateContext)
  if (context === undefined) {
    throw new Error("useUIState must be used within a UIStateProvider")
  }
  return context
}

export const UIStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sortingStates, setSortingStates] = useState<SortingState>({})

  const toggleSortingOrder = (slug: string) => {
    setSortingStates((prevStates) => ({
      ...prevStates,
      [slug]: !prevStates[slug],
    }))
  }

  return (
    <UIStateContext.Provider value={{ sortingStates, toggleSortingOrder }}>
      {children}
    </UIStateContext.Provider>
  )
}
