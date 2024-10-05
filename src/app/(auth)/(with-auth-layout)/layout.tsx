export default function AuthLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div>
            <h1>Auth inner layout</h1>
            {children}
        </div>
    )
}
