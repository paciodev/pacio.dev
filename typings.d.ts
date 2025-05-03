type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Reference {
  _ref: string;
  _type: 'reference'
}


interface Image {
  _type: 'image';
  asset: Reference;
}

interface Category extends Base {
  title: string;
}

interface Technology extends Base {
  title: string;
  url: string;
  image: Image;
}

interface Span {
  _key: string;
  _type: 'span'
  marks: string[];
  text: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Project extends Base {
  name: string;
  slug: Slug;
  company: string;
  role: string;
  github: string;
  live: string;
  colorLight: Color;
  colorDark: Color;
  previewImage: Image;
  previewImageSize: number;
  previewImagePosition: string;
  image: Image;
  categories: Category[];
  technologies: Technology[];
  createdAt: Date;
  body: Block[];
}

interface Color extends Base {
  hex: string
  alpha: number
  hsl: {
    _type: string,
    h: number
    s: number
    l: number
    a: number
  }
  hsv: {
    _type: string
    h: number
    s: number
    v: number
    a: number
  }
  rgb: {
    _type: string
    r: number
    g: number
    b: number
    a: number
  }
}