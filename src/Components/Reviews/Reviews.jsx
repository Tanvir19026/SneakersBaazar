

const Reviews = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-5xl font-bold mb-6 text-center">Reviews</h1>
                
                <div className="rating rating-half mb-6">
                    <input type="radio" name="rating-10" className="rating-hidden" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="movieName">
                        Movie Name
                    </label>
                    <input 
                        type="text" 
                        id="movieName" 
                        name="movieName" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="Enter movie name" 
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                        Comment
                    </label>
                    <textarea 
                        id="comment" 
                        name="comment" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="Enter your comment" 
                        rows="4"
                    ></textarea>
                </div>
                
                <div className="flex items-center justify-center">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="button"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
