import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { mockListing } from "../data/mockListing";

const GalleryContext = createContext(null);

export function GalleryProvider({ children, photos = mockListing.photos }) {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const openPhotoTour = useCallback(() => {
    setIsPhotoTourOpen(true);
    setIsLightboxOpen(false);
  }, []);

  const closePhotoTour = useCallback(() => {
    setIsPhotoTourOpen(false);
  }, []);

  const openLightbox = useCallback((index = 0) => {
    const validIndex = Math.max(0, Math.min(index, photos.length - 1));
    setActivePhotoIndex(validIndex);
    setIsLightboxOpen(true);
  }, [photos.length]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Lock body scroll when either overlay is open
  useEffect(() => {
    if (isPhotoTourOpen || isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPhotoTourOpen, isLightboxOpen]);

  // Keyboard navigation for Lightbox and Photo Tour
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen) {
        if (e.key === "Escape") {
          e.preventDefault();
          closeLightbox();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          nextPhoto();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          prevPhoto();
        }
      } else if (isPhotoTourOpen) {
        if (e.key === "Escape") {
          e.preventDefault();
          closePhotoTour();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, isPhotoTourOpen, nextPhoto, prevPhoto, closeLightbox, closePhotoTour]);

  const value = {
    photos,
    isPhotoTourOpen,
    openPhotoTour,
    closePhotoTour,
    isLightboxOpen,
    activePhotoIndex,
    openLightbox,
    closeLightbox,
    nextPhoto,
    prevPhoto,
    currentPhoto: photos[activePhotoIndex] || photos[0],
    totalPhotos: photos.length,
  };

  return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>;
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}
