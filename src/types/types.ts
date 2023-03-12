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

export type Title = {
  title:string;
}

export type Link={
  link:string;
}

export type Icon={
  icon: any;
}

export type FooterDetail = {
  titles: Title[];
  links: Link[][];
  sociallinks: Icon[];
};

export type Experience = {
  number:string;
  title: string;
}

export type MemoryDetail = {
  title: string;
  subtitle: string;
  text: string;
  img: any;
  experience: Experience[];
};

export type PlaceApiDetail = {
  placeImg: any;
  location: string;
  distance: string;
};

export type BrandDetail = {
    iconSrc: any;
};

export type Plancontent= {
  iconbox: any;
  text: string;
};

export type Plans= {
  planicon: any;
  title: string;
  text: string;
  plantype: string;
  plancontent: Plancontent[]
  buttonText: string;
};

export type PricingDetail =  {
    title: string;
    text: string;
    btn1: string;
    btn2: string;
    plans: Plans[];
}

export type PlanDetail = {
    planicon: any;
    title: string;
    text: string;
    plantype: string;
    plancontent: Plancontent[];
    buttonText: string;
}

export type BannerDetail =  {
    title: string;
    text: string;
    imgSrc: any;
    btnText: string;
}