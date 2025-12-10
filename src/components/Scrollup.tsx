import { ArrowUp } from "lucide-react";

const Scrollup: React.FC = () => {
  const scrollToTop = () => {
    const scrollElement = document.scrollingElement || document.documentElement;
    scrollElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Hidden on mobile, visible on md+ screens
    <button
      onClick={scrollToTop}
      className="hidden md:flex w-12 h-12 fixed bottom-6 right-6 rounded-full
                 bg-linear-to-br from-pink-200 via-purple-200 to-blue-200
                 dark:from-pink-800 dark:via-purple-800 dark:to-blue-800
                 shadow-xl hover:shadow-2xl hover:scale-110
                 transition-all duration-300 items-center justify-center
                 group border-2 border-white/50 dark:border-gray-700/50"
      aria-label="Scroll to top"
    >
      <ArrowUp
        className="w-6 h-6 text-gray-800 dark:text-gray-100
                   group-hover:-translate-y-1 transition-transform duration-300"
      />
    </button>
  );
};

export default Scrollup;
