const BookDetails = () => {
  return (
    <section>
      <div className="grid grid-cols-2 p-10">
        <div className=" grid place-content-end pr-20">
          <img
            src="https://m.media-amazon.com/images/I/71Ow6MUOx2L.jpg"
            alt="book"
            width={300}
            height={300}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">A book of heaven</h2>
          <small>Author: Masud Rana</small>
          <p className="font-bold">Genre: Horror</p>
          <p className="font-bold">Publication Date: 27 July</p>
          <p className="mt-16 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptates, voluptate, quibusdam, doloribus, quia voluptatum
            molestiae quas quos quidem voluptatibus doloremque? Quisquam
            voluptate, quod voluptatibus, voluptatem, quae quia quos
            consequuntur quibusdam voluptatum nesciunt quas. Quisquam
            voluptate, quod voluptatibus, voluptatem, quae quia quos
            consequuntur quibusdam voluptatum nesciunt quas.
          </p>
        </div>
      </div>

      {/* book details */}

      <div className="my-16">
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div>
            <p className="font-bold text-xl">Book Details</p>

            <div className="flex items-center mt-4">
              <p className="font-semibold">Author:</p>
              <p className="ml-4">Masud Rana</p>
            </div>
            <div className="flex items-center mt-4">
              <p className="font-semibold">Genre:</p>
              <p className="ml-4">Horror</p>
            </div>
            <div className="flex items-center mt-4">
              <p className="font-semibold">Publication Date:</p>
              <p className="ml-4">27 July</p>
            </div>
            <div className="flex items-center mt-4">
              <p className="font-semibold">Publisher:</p>
              <p className="ml-4">Masud Rana</p>
            </div>
            <div className="flex items-center mt-4">
              <p className="font-semibold">Pages:</p>
              <p className="ml-4">200</p>
            </div>
            <div className="flex items-center mt-4">
              <p className="font-semibold">Language:</p>
              <p className="ml-4">English</p>
            </div>
            <div className="flex items-center mt-4">
              <p className="font-semibold">ISBN:</p>
              <p className="ml-4">123456789</p>
            </div>

          </div>
          <div>
            <p className="font-bold text-xl">Book Reviews</p>
            {/* book Reviews */}

            <div className="flex items-center mt-4">
              <img
                src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                alt="book"
                className="w-12 h-12 object-cover object-center rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Masud Rana</p>
                <p className="font-semibold">5.0</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                alt="book"
                className="w-12 h-12 object-cover object-center rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Masud Rana</p>
                <p className="font-semibold">5.0</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img
                src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                alt="book"
                className="w-12 h-12 object-cover object-center rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">Masud Rana</p>
                <p className="font-semibold">5.0</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* related books */}
      <div>
        <h2 className="text-3xl font-bold">Related Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1612837049782-1e0b5d0b3e6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="book"
                        className="w-full h-56 object-cover object-center"
                    />
                    <div className="p-4">
                        <p className="text-2xl font-semibold">A book of heaven</p>
                        <p className="font-semibold text-gray-500">Author: Masud Rana</p>
                        <p className="font-semibold text-gray-500">Genre: Horror</p>
                        <p className="font-semibold text-gray-500">Publication Date: 27 July</p>

                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1612837049782-1e0b5d0b3e6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="book"
                        className="w-full h-56 object-cover object-center"
                    />
                    <div className="p-4">
                        <p className="text-2xl font-semibold">A book of heaven</p>
                        <p className="font-semibold text-gray-500">Author: Masud Rana</p>
                        <p className="font-semibold text-gray-500">Genre: Horror</p>
                        <p className="font-semibold text-gray-500">Publication Date: 27 July</p>

                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1612837049782-1e0b5d0b3e6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="book"
                        className="w-full h-56 object-cover object-center"
                    />
                    <div className="p-4">
                        <p className="text-2xl font-semibold">A book of heaven</p>
                        <p className="font-semibold text-gray-500">Author: Masud Rana</p>
                        <p className="font-semibold text-gray-500">Genre: Horror</p>
                        <p className="font-semibold text-gray-500">Publication Date: 27 July</p>

                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1612837049782-1e0b5d0b3e6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="book"
                        className="w-full h-56 object-cover object-center"
                    />
                    <div className="p-4">
                        <p className="text-2xl font-semibold">A book of heaven</p>
                        <p className="font-semibold text-gray-500">Author: Masud Rana</p>
                        <p className="font-semibold text-gray-500">Genre: Horror</p>
                        <p className="font-semibold text-gray-500">Publication Date: 27 July</p>

                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1612837049782-1e0b5d0b3e6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="book"
                        className="w-full h-56 object-cover object-center"
                    />
                    <div className="p-4">
                        <p className="text-2xl font-semibold">A book of heaven</p>
                        <p className="font-semibold text-gray-500">Author: Masud Rana</p>
                        <p className="font-semibold text-gray-500">Genre: Horror</p>
                        <p className="font-semibold text-gray-500">Publication Date: 27 July</p>

                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default BookDetails;
