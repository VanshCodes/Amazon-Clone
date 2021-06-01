export const Header = {
  logo: {
    src: "https://archive.org/download/amazon-2/amazon_PNG11.png",
    alt: "Amazon Logo"
  }
};
export const bottomnav = {
  navItems: [
    "Fresh",
    "Amazon Pay",
    "Prime",
    "Gift Cards",
    "Sports, Fitness & Outdoors",
    "Customer Service",
    "Gift Ideas",
    "Toys & Games"
  ]
};

export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};