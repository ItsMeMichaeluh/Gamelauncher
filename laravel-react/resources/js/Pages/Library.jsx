import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Library({ auth, purchasedGames }) {
    const [downloadingGame, setDownloadingGame] = useState(null);

    const handleDownload = (game) => {
        setDownloadingGame(game.id);
        // Hier komt later de download logica
        setTimeout(() => {
            setDownloadingGame(null);
        }, 2000);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My Library
                </h2>
            }
        >
            <Head title="My Library" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {purchasedGames.length === 0 ? (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <p className="text-gray-600">You haven't purchased any games yet.</p>
                            <a 
                                href="/games" 
                                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                            >
                                Browse Games
                            </a>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {purchasedGames.map((game) => (
                                <div key={game.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                                    <img 
                                        src={game.cover_image || '/placeholder-game.jpg'} 
                                        alt={game.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Purchased on: {new Date(game.pivot.purchase_date).toLocaleDateString()}
                                        </p>
                                        <button 
                                            onClick={() => handleDownload(game)}
                                            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                                            disabled={downloadingGame === game.id}
                                        >
                                            {downloadingGame === game.id ? (
                                                <span>Downloading...</span>
                                            ) : (
                                                <span>Download Game</span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}