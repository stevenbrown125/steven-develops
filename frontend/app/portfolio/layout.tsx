export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="px-4 lg:px-8 py-4 ">{children}</div>;
}