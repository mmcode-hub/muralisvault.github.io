import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollSection = ({ children, className = '' }: ScrollSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
