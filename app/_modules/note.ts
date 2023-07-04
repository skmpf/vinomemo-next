import * as Yup from "yup";

export interface INote {
  information: {
    name: string;
    country?: string;
    region?: string;
    grapes?: string[];
    producer?: string;
    vintage?: number;
    alcohol?: number;
  };
  appearance?: {
    intensity?: number;
    color?: string;
  };
  nose?: {
    intensity?: number;
    aromas?: string[];
  };
  palate?: {
    sweetness?: number;
    acidity?: number;
    tannin?: number;
    alcohol?: number;
    body?: number;
    intensity?: number;
    flavors?: string[];
    finish?: number;
  };
  conclusion?: {
    comments?: string;
    rating?: number;
  };
  creator: string;
}

export const NoteFormInitialValues: INote = {
  information: {
    name: "",
    country: "",
    region: "",
    grapes: [],
    producer: "",
    vintage: undefined,
    alcohol: undefined,
  },
  appearance: {
    intensity: 0,
    color: "",
  },
  nose: {
    intensity: 0,
    aromas: [],
  },
  palate: {
    sweetness: 0,
    acidity: 0,
    tannin: 0,
    alcohol: 0,
    body: 0,
    intensity: 0,
    flavors: [],
    finish: 0,
  },
  conclusion: {
    comments: "",
    rating: 0,
  },
  creator: "default",
};

export const NoteFormValidationSchema = Yup.object().shape({
  information: Yup.object().shape({
    name: Yup.string().required("Required"),
    country: Yup.string(),
    region: Yup.string(),
    grapes: Yup.array().of(Yup.string()),
    producer: Yup.string(),
    vintage: Yup.number(),
    alcohol: Yup.number(),
  }),
  appearance: Yup.object().shape({
    intensity: Yup.number(),
    color: Yup.string(),
  }),
  nose: Yup.object().shape({
    intensity: Yup.number(),
    aromas: Yup.array().of(Yup.string()),
  }),
  palate: Yup.object().shape({
    sweetness: Yup.number(),
    acidity: Yup.number(),
    tannin: Yup.number(),
    alcohol: Yup.number(),
    body: Yup.number(),
    intensity: Yup.number(),
    flavors: Yup.array().of(Yup.string()),
    finish: Yup.number(),
  }),
  conclusion: Yup.object().shape({
    comments: Yup.string(),
    rating: Yup.number(),
  }),
  creator: Yup.string().required("Required"),
});
