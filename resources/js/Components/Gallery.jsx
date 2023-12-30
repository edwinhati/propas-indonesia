export default function Gallery({ images }) {
    return (
        <div className="p-4 mx-auto container">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
