function CarGallary({ gallery }) {
  return (
    <div>
      {gallery && (
        <div className="container mx-auto p-6">
          <h2 className="header-text font-bold mb-4">Gallary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {gallery.map((car, index) => (
              <div key={index} className={index % 2 === 0 ? "" : "mt-10"}>
                <img
                  className="h-auto max-w-full"
                  src={`${import.meta.env.VITE_API_URL}api/v1/${car.filepath}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CarGallary;
