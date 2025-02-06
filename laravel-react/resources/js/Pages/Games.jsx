import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import GameCard from '@/Components/GameCard';

export default function Index({ auth, games }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold">Game Store</h2>}
        >
            <Head title="Game Store" />
        
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {games.data.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}