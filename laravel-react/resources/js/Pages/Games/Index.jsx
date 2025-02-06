import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth, games }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Game Store
                    </h2>
                    <div className="flex gap-4">
                        <input 
                            type="text" 
                            placeholder="Search games..." 
                            className="rounded-lg border-gray-300"
                        />
                        <select className="rounded-lg border-gray-300">
                            <option value="">All Genres</option>
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="rpg">RPG</option>
                            <option value="simulation">Simulation</option>
                            <option value="strategy">Strategy</option>
                        </select>
                    </div>
                </div>
            }
        >
            <Head title="Game Store" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {games.map((game) => (
                            <div key={game.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                                <img 
                                    src={game.cover_image || '/placeholder-game.jpg'} 
                                    alt={game.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {game.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold">${game.price}</span>
                                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}