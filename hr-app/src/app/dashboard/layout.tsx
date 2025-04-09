import BottomNavigation from '@/components/BottomNavigation';

export default function DashboardLayout({children}){
    return(
        <main>
            {children}
            <BottomNavigation />
        </main>
    )
}