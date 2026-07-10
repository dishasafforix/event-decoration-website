import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const open = index !== null && index !== undefined;
  const current = open ? items[index] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm grid place-items-center p-4"
          data-testid="lightbox"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            data-testid="lightbox-close"
            className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            data-testid="lightbox-prev"
            className="absolute left-4 sm:left-8 grid place-items-center h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            data-testid="lightbox-next"
            className="absolute right-4 sm:right-8 grid place-items-center h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <motion.div
            key={current.url}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full"
          >
            <img
              src={current.url}
              alt={current.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F59E0B]">
                {current.category}
              </p>
              <h4 className="font-display text-xl text-white mt-1">
                {current.title}
              </h4>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
