import React, { useState , useEffect } from 'react';
import ImageCard from './components/Images';



function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {

        if (term === '') return; // Don't make a request if term is empty

        // setIsLoading(true); // Start loading before fetching data

        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
            })
            .catch(error => console.log(error));
    },[]);
    
    return (
       <div className=" container mx-auto">
        <div className="grid grid-cols-3 gap-4">
        {images.map(image =>(
            <ImageCard key={image.id} image={image} />
        ))}
        </div>
       </div>

    );
}

export default App;