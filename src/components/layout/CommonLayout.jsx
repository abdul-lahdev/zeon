import Header from "./Header";

export default function CommonLayout({ children }) {
    return (
        <>

            <div className="p-3">
                <Header />
                <div className="mt-3">
                    {children}
                </div>
            </div>
        </>
    )
}