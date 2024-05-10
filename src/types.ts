export type Image = {
  id: string;
  description?: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  user: {
    name: string;
    bio: string;
    profile_image: { large: string };
  };
  links: { html: string };
};

export type ModalData = {
  likes: number;
  alt_description?: string;
  user: {
    name: string;
    bio: string;
    profile_image: { large: string };
  };
  links: { html: string };
  urls: {
    regular: string;
  };
};
