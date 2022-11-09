import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const RecentPhoto = () => {
  return (
    <div>
      <section className="overflow-hidden text-gray-700 pb-20">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-10">My recent Photos</h1>
          </div>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <PhotoProvider>
                  <PhotoView src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp">
                    <img
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <PhotoProvider>
                  <PhotoView src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div className="w-full p-1 md:p-2">
                <PhotoProvider>
                  <PhotoView src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <PhotoProvider>
                  <PhotoView src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <PhotoProvider>
                  <PhotoView src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <PhotoProvider>
                  <PhotoView src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentPhoto;
