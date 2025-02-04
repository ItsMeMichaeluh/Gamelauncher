export default function GameCard({ game }) {
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6">
                {game.cover_image && (
                    <img 
                        src={game.cover_image} 
                        alt={game.title}
                        className="w-full h-48 object-cover rounded-md"
                    />
                )}
                <h3 className="mt-4 text-xl font-semibold">{game.title}</h3>
                <p className="mt-2 text-gray-600 truncate">{game.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold">€{game.price}</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}