declare module "aos" {
  const AOS: {
    init: (options?: {
      duration?: number;
      easing?: string;
      once?: boolean;
      startEvent?: string;
      offset?: number;
      mirror?: boolean;
    }) => void;
    refresh: () => void;
    refreshHard: () => void;
  };

  export default AOS;
}