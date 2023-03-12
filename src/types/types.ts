export type Navlinks = {
  link: string;
  id: string;
};

export type HeroB = {
  title: string;
  subtitle: string;
  text: string;
  btn1: string;
  btn2: string;
  img: any;
};

export type FooterDetail = {
  titles: {
    title: string;
  }[];
  links: {
    link: string;
  }[][];
  sociallinks: {
    icon: any;
  }[];
};

export type MemoryDetail = {
  title: string;
  subtitle: string;
  text: string;
  img: any;
  experience: {
    number: string;
    title: string;
  }[];
};

export type PlaceApiDetail = {
  placeImg: any;
  location: string;
  distance: string;
}[];

export type BrandDetail = {
    iconSrc: any;
}[];

export type PricingDetail =  {
    title: string;
    text: string;
    btn1: string;
    btn2: string;
    plans: {
        planicon: any;
        title: string;
        text: string;
        plantype: string;
        plancontent: {
            iconbox: any;
            text: string;
        }[];
        buttonText: string;
    }[];
}

export type PlanDetail = {
    planicon: any;
    title: string;
    text: string;
    plantype: string;
    plancontent: {
        iconbox: any;
        text: string;
    }[];
    buttonText: string;
}

export type BannerDetail =  {
    title: string;
    text: string;
    imgSrc: any;
    btnText: string;
}