import * as Yup from "yup";

export interface INote {
  information: {
    name: string;
    country?: string;
    region?: string;
    grapes?: string;
    producer?: string;
    vintage?: number;
    alcohol?: number;
  };
  appearance?: {
    intensity?: string;
    colour?: string;
    variant?: string;
  };
  nose?: {
    intensity?: string;
    aromas?: string;
  };
  palate?: {
    sweetness?: string;
    acidity?: string;
    tannin?: string;
    alcohol?: string;
    body?: string;
    intensity?: string;
    flavours?: string;
    finish?: string;
  };
  conclusions?: {
    quality?: string;
    comments?: string;
  };
  creator: string;
}

export const NoteFormInitialValues: INote = {
  information: {
    name: "",
    country: "",
    region: "",
    grapes: "",
    producer: "",
    vintage: undefined,
    alcohol: undefined,
  },
  appearance: {
    intensity: "",
    colour: "",
    variant: "",
  },
  nose: {
    intensity: "",
    aromas: "",
  },
  palate: {
    sweetness: "",
    acidity: "",
    tannin: "",
    alcohol: "",
    body: "",
    intensity: "",
    flavours: "",
    finish: "",
  },
  conclusions: {
    quality: "",
    comments: "",
  },
  creator: "default",
};

export const NoteFormValidationSchema = Yup.object().shape({
  information: Yup.object().shape({
    name: Yup.string().required("Required"),
    country: Yup.string(),
    region: Yup.string(),
    grapes: Yup.string(),
    producer: Yup.string(),
    vintage: Yup.number(),
    alcohol: Yup.number(),
  }),
  appearance: Yup.object().shape({
    intensity: Yup.string(),
    color: Yup.string(),
    variant: Yup.string(),
  }),
  nose: Yup.object().shape({
    intensity: Yup.string(),
    aromas: Yup.string(),
  }),
  palate: Yup.object().shape({
    sweetness: Yup.string(),
    acidity: Yup.string(),
    tannin: Yup.string(),
    alcohol: Yup.string(),
    body: Yup.string(),
    intensity: Yup.string(),
    flavours: Yup.string(),
    finish: Yup.string(),
  }),
  conclusions: Yup.object().shape({
    quality: Yup.string(),
    comments: Yup.string(),
  }),
  creator: Yup.string().required("Required"),
});
