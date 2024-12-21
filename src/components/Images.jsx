import React from 'react';

const ImageCard = ({image}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
             <img src={image} alt="Sunset in the mountains" className="w-full" />
             <div className="px-6 py-4">
                 <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                 <p className="text-gray-700 text-base">
                     Coldest Sunset in the world. Which is it?
                 </p>
                 <li>
                    <strong>views:</strong> 1234
                 </li>
                 <li>
                    <strong>likes:</strong> 142
                 </li>
                 <li>
                    <strong>downloads:</strong> 123
                 </li>
             </div>
             <div className="px-6 py-4">
                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
             </div>
        </div>
    );
};

export default ImageCard;